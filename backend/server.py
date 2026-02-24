from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# ✅ Proper CORS for frontend
CORS(app, origins=[
    "https://portfolio-frontend-rsw1.onrender.com",
    "http://localhost:5173"
], supports_credentials=True, methods=["GET", "POST", "OPTIONS"])

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    try:
        data = request.get_json()
        question = data.get("question", "")
        if not question:
            return jsonify({"answer": "Please provide a question"}), 400

        # Dummy AI response
        answer = f"You asked: {question}. This is a dummy response."
        return jsonify({"answer": answer})

    except Exception as e:
        print("Server error:", e)
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)