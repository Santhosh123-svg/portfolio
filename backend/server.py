# server.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from bot import ask_bot  # ✅ Import your bot.py function

app = Flask(__name__)

# ✅ Proper CORS for frontend
CORS(app, origins=[
    "https://portfolio-frontend-rsw1.onrender.com",  # change if your frontend URL different
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

        # ✅ Call your AI bot function
        answer = ask_bot(question)

        return jsonify({"answer": answer})

    except Exception as e:
        print("Server error:", e)
        return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    print(f"🚀 Server running on port {port}")
    app.run(host="0.0.0.0", port=port)