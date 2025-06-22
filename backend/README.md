## 📦 Backend (/backend)
The backend is an Express.js API service that connects to a Hugging Face Gradio Space to perform French text summarization using a fine-tuned T5 model.

### 🚀 API Endpoint
POST /summarize

Summarizes a given French input text using a Hugging Face-hosted model.

### Request:

URL: https://project_name.onrender.com/summarize

Method: POST

Headers: Content-Type: application/json

Body:

    {
        "text": "La pandémie de COVID-19 a profondément transformé le monde entier..."
    }

### Response:

    {
        "summary": "La pandémie de COVID-19 a bouleversé la santé, l’économie et la société.",
        "stats": {
            "input_length": 380,
            "summary_length": 94,
            "input_words": 64,
            "summary_words": 15,
            "compression_ratio": 0.247,
            "latency_ms": 6892,
            "model": "username/model_name",
            "timestamp": "2025-06-22T20:42:31.004Z"
        }
    }

### ⚙️ Environment Variables

Create a .env file inside the /backend folder refering .env.example

### 🧪 Local Development

    cd backend
    npm install
    npm start

The server will start on http://localhost:your_port_number