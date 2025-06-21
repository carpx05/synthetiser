# import gradio as gr
# from transformers import pipeline

# # Load your fine-tuned model
# summarizer = pipeline("text2text-generation", model="ayushmishra/results")

# # Inference function
# def summarize(text):
#     result = summarizer(text, clean_up_tokenization_spaces=True)
#     return result[0]["generated_text"]

# # Expose function via Gradio HTTP API
# app = gr.Interface(fn=summarize, inputs="text", outputs="text", api_name="predict")

# # Enable API endpoint
# app.launch(share=True)

import gradio as gr
from transformers import pipeline

summarizer = pipeline("text2text-generation", model="ayushmishra/results")

def summarize(text):
    return summarizer(text, max_length=60, min_length=5, do_sample=False)[0]['generated_text']

iface = gr.Interface(
    fn=summarize,
    inputs=gr.Textbox(lines=4, label="Input"),
    outputs=gr.Textbox(label="Output"),
    live=False
)

iface.launch()
