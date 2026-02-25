# bot.py
import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Absolute path for data.txt to avoid FileNotFoundError
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data.txt")

try:
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        context = f.read()
except Exception as e:
    print("Error loading data.txt:", e)
    context = "Sandy's data not available."

def ask_bot(question):
    if not question or question.strip() == "":
        return "You can ask me about Sandy's character, routine, or mindset."

    prompt = f"""
You are Sandy AI — a personal AI assistant that speaks ONLY about Sandy (Santhosh).

Rules:
- Answer ONLY using the information provided below
- Explain clearly, step by step, from top to bottom when asked
- If the question is NOT about Sandy, politely refuse
- Do NOT invent information
- Keep answers natural and human-like

SANDY INFORMATION:
{context}

If the user asks anything unrelated, reply exactly:
"I can answer only about Sandy."

User Question:
{question}
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": question}
            ],
            temperature=0.3
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print("AI bot error:", e)
        return "Sandy AI is currently unavailable, please try again later."