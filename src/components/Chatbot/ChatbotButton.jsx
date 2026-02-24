import { MessageCircle } from "lucide-react";
import { useChatbot } from "../../context/ChatbotContext";

export default function ChatbotButton() {
  const { setOpen } = useChatbot();

  return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-40
                 w-14 h-14 rounded-full
                 bg-primary text-black
                 flex items-center justify-center
                 shadow-xl hover:scale-110 transition"
    >
      <MessageCircle />
    </button>
  );
}
