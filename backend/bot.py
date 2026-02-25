import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not set")

client = Groq(api_key=api_key)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data.txt")

with open(DATA_PATH, "r", encoding="utf-8") as f:
    context = f.read()


def ask_bot(question):
    if not question or question.strip() == "":
        return "Hi, I am Sandy. You can ask about me."

    question_lower = question.lower()

    # If greeting → introduce Sandy
    greetings = ["hi", "hello", "hii", "hey"]
    if question_lower in greetings:
        return "Hi, I am Santhosh S, also known as Sandy. I am a calm and focused Full Stack Developer and AI Chatbot Developer. You can ask anything about me."

    prompt = f"""
You are Sandy AI.

STRICT RULES:
- You must answer ONLY about Sandy.
- Use ONLY the information given below.
- If question is not about Sandy, reply exactly:
I can answer only about Sandy.
- Keep answers simple and clear.
- Do not invent information.

SANDY INFORMATION:
{context}

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
            temperature=0.2
        )

        return response.choices[0].message.content.strip()

    except Exception as e:
        print("AI Error:", e)
        return "Sandy AI is currently unavailable."