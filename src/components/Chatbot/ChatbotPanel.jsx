import { useState } from "react";
import { ArrowLeft, Mic, Send } from "lucide-react";
import { useChatbot } from "../../context/ChatbotContext";

export default function ChatbotPanel() {
  const { open, setOpen } = useChatbot();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Track if backend wake-up message has been shown
  const [backendWaking, setBackendWaking] = useState(false);

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://portfolio-backend-4uka.onrender.com";

  if (!open) return null;

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = { type: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();

      const botMessage = {
        type: "bot",
        text: data.answer || "No response from AI 🤖",
      };

      setMessages((prev) => [...prev, botMessage]);
      setBackendWaking(false); // Backend is up, reset flag
    } catch (error) {
      console.error("Chatbot error:", error);

      if (!backendWaking) {
        // Show this message only once
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Backend waking up... please wait ⏳" },
        ]);
        setBackendWaking(true);
      }
    } finally {
      setLoading(false);
    }
  };

  /* 🎤 VOICE INPUT */
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      sendMessage(transcript);
    };

    recognition.start();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <div
      className="fixed inset-y-0 left-0 w-full sm:w-[380px]
                 bg-bg border-r border-white/10 z-50
                 flex flex-col animate-slideIn"
    >
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
              ${
                m.type === "user"
                  ? "ml-auto bg-primary text-black"
                  : "bg-white/10"
              }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="bg-white/10 p-3 rounded-xl w-fit">Typing...</div>
        )}
      </div>

      {/* INPUT */}
      <div className="p-3 flex gap-2 border-t border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask about Sandy..."
          className="flex-1 bg-transparent outline-none"
        />

        <button onClick={startVoice}>
          <Mic />
        </button>

        <button onClick={() => sendMessage(input)} disabled={loading}>
          <Send />
        </button>
      </div>
    </div>
  );
}