require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');


const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Logging middleware
app.use(morgan('dev'));

// 🛡 Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests. Please try again later.'
  }
});
app.use(limiter);


const PORT = process.env.PORT || 3000;
const MODEL_NAME = process.env.MODEL_NAME;
const BASE_URL = process.env.GRADIO_BASE_URL;


app.post('/summarize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text input is required.' });
  }

  try {
    const startTime = Date.now();

    // Step 1: Trigger the model
    const postRes = await axios.post(BASE_URL, {
      data: [text]
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    const eventId = postRes.data.event_id;
    if (!eventId) {
      return res.status(500).json({ error: 'No event_id returned.' });
    }

    console.log("✅ Event ID:", eventId);

    // Step 2: Poll for result
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const maxTries = 20;
    let result = null;

    for (let i = 0; i < maxTries; i++) {
      await delay(1000);
      console.log(`⏳ Attempt ${i + 1}: polling...`);

      const pollRes = await axios.get(`${BASE_URL}/${eventId}`, {
        responseType: 'text'
      });

      const lines = pollRes.data.split('\n');
      const dataLine = lines.find(line => line.startsWith('data: '));
      if (dataLine) {
        try {
          const jsonText = dataLine.replace('data: ', '');
          const parsed = JSON.parse(jsonText);
          if (Array.isArray(parsed) && parsed.length > 0) {
            result = parsed[0];
            break;
          }
        } catch (e) {
          console.error("❌ JSON parse error:", e.message);
        }
      }
    }

    if (result) {
      const endTime = Date.now();
      const latencyMs = endTime - startTime;
      const timestamp = new Date().toISOString();

      const inputWords = text.trim().split(/\s+/).length;
      const outputWords = result.trim().split(/\s+/).length;

      const compressionRatio = Number((result.length / text.length).toFixed(3));


      return res.json({
        summary: result,
        stats: {
          input_length: text.length,
          summary_length: result.length,
          input_words: inputWords,
          summary_words: outputWords,
          latency_ms: latencyMs,
          compression_ratio: compressionRatio,
          model: MODEL_NAME,
          timestamp: timestamp
        }
      });
    } else {
      return res.status(504).json({ error: 'Model did not respond in time.' });
    }

  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
    return res.status(500).json({ error: 'Unexpected error during inference.' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', model: MODEL_NAME });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
