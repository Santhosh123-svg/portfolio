from flask import Flask, request, jsonify
from flask_cors import CORS
from bot import ask_bot

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    answer = ask_bot(data.get("question", ""))
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
