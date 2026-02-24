import { useState } from "react";
import { ArrowLeft, Mic, Send } from "lucide-react";
import { useChatbot } from "../../context/ChatbotContext";

export default function ChatbotPanel() {
  const { open, setOpen } = useChatbot();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  if (!open) return null;

  const sendMessage = async (text) => {
    if (!text) return;

    setMessages((m) => [...m, { type: "user", text }]);
    setInput("");

    try {
      const res = await fetch("https://portfolio-backend-4uka.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });

      const data = await res.json();
      setMessages((m) => [...m, { type: "bot", text: data.answer }]);
    } catch {
      setMessages((m) => [
        ...m,
        { type: "bot", text: "Server not running ⚠️" },
      ]);
    }
  };

  /* 🎤 VOICE INPUT */
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      sendMessage(e.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="fixed inset-y-0 left-0 w-full sm:w-[380px]
                    bg-bg border-r border-white/10 z-50
                    flex flex-col animate-slideIn">

      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <button onClick={() => setOpen(false)}>
          <ArrowLeft />
        </button>
        <h3 className="font-semibold">Sandy AI 🤖</h3>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[85%]
            ${m.type === "user"
              ? "ml-auto bg-primary text-black"
              : "bg-white/10"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-3 flex gap-2 border-t border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Santhosh..."
          className="flex-1 bg-transparent outline-none"
        />

        <button onClick={startVoice}>
          <Mic />
        </button>

        <button onClick={() => sendMessage(input)}>
          <Send />
        </button>
      </div>
    </div>
  );
}
