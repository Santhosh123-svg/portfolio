from flask import Flask, request, jsonify
import os

app = Flask(__name__)

GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("question")
    if not question:
        return jsonify({"answer": "No question provided"}), 400

    try:
        # 🔹 Example Groq query placeholder
        # Replace with your actual Groq query logic
        answer = "Simulated AI answer to: " + question
        return jsonify({"answer": answer})
    except Exception as e:
        print("Backend error:", e)  # This logs error on Render
        return jsonify({"answer": "Backend error ⚠️"}), 500