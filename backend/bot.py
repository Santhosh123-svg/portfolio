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
        return "Hi, I am Sandy.\nYou can ask about me."

    question_lower = question.lower().strip()

    greetings = ["hi", "hello", "hii", "hey"]
    if question_lower in greetings:
        return "Hi, I am Santhosh S.\nAlso known as Sandy.\nI am a Full Stack Developer.\nI also build AI Chatbots."

    prompt = f"""
You are Sandy AI.

STRICT RULES:
- Answer ONLY about Sandy.
- If question is unrelated, reply exactly:
I can answer only about Sandy.
- Response MUST be in bullet point style.
- Each point MUST be on a new line.
- Do NOT combine points in paragraph.
- Maximum 6 lines only.
- Keep each line short and clear.

Information about Sandy:
{context}

Question:
{question}
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": prompt}
            ],
            temperature=0.2,
            max_tokens=300
        )

        answer = response.choices[0].message.content.strip()

        # Ensure proper line formatting
        formatted_answer = "\n".join(
            [line.strip() for line in answer.split("\n") if line.strip()]
        )

        return formatted_answer

    except Exception as e:
        print("AI Error:", e)
        return "Sandy AI is temporarily busy.\nPlease try again."