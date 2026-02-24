from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# ✅ Import Groq client
from groq import GroqClient

app = Flask(__name__)

# ✅ Proper CORS: allow your frontend and local dev
CORS(
    app,
    origins=[
        "https://portfolio-frontend-rsw1.onrender.com",
        "http://localhost:5173"
    ],
    supports_credentials=True,
    methods=["GET", "POST", "OPTIONS"]
)

# ✅ Initialize Groq client with env API key
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
client = GroqClient(api_key=GROQ_API_KEY)

def get_ai_answer(question: str) -> str:
    """
    Fetch the AI answer from Groq.
    Fallback to dummy response if anything fails.
    """
    try:
        # Example Groq query - adjust according to your dataset
        query = '*[_type=="faq" && question match $q]{answer}[0]'
        result = client.query(query, {"q": question})

        if result:
            return result
        return "Sorry, I don't have an answer for that."

    except Exception as e:
        print("Groq query error:", e)
        return f"You asked: {question}. This is a dummy response."

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    # OPTIONS requests are handled automatically by flask-cors
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    try:
        data = request.get_json()
        question = data.get("question", "")

        if not question:
            return jsonify({"answer": "Please provide a question"}), 400

        # ✅ Get real AI/Groq answer
        answer = get_ai_answer(question)
        return jsonify({"answer": answer})

    except Exception as e:
        print("Server error:", e)
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)