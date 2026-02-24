from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# ✅ Enable CORS for your frontend URL
CORS(app, origins=[
    "https://portfolio-frontend-rsw1.onrender.com"  # optional for local dev
])

# Example /chat route
@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        question = data.get("question", "")
        
        if not question:
            return jsonify({"answer": "Please provide a question"}), 400

        # Dummy AI response (replace with your Groq or AI logic)
        answer = f"You asked: {question}. This is a dummy response."
        return jsonify({"answer": answer})

    except Exception as e:
        print("Server error:", e)
        return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)