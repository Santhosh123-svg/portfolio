import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";

/* CHATBOT */
import { ChatbotProvider } from "./context/ChatbotContext";
import ChatbotButton from "./components/Chatbot/ChatbotButton";
import ChatbotPanel from "./components/Chatbot/ChatbotPanel";

export default function App() {
  return (
    <ChatbotProvider>
      <div className="min-h-screen bg-bg text-textMain">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          {/* CHATBOT UI */}
          <ChatbotButton />
          <ChatbotPanel />
        </BrowserRouter>
      </div>
    </ChatbotProvider>
  );
}
