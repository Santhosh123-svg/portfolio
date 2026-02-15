import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Braces,
  Server,
  Wrench,
  ArrowLeft
} from "lucide-react";

/* ===============================
   SKILLS DATA
================================ */

const skillsData = [
  {
    title: "Programming Languages",
    icon: <Code2 />,
    skills: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Frontend Technologies",
    icon: <Braces />,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React JS"]
  },
  {
    title: "Backend & Database",
    icon: <Server />,
    skills: ["Node JS", "Python Django", "Java", "MongoDB"]
  }
];

const toolsData = [
  "ChatGPT",
  "GitHub Copilot",
  "Perplexity AI",
  "VS Code",
  "Render",
  "Qoder",
  "Git & GitHub",
  "Postman"
];

/* ===============================
   COMPONENT
================================ */

export default function Skills() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="min-h-screen pt-28 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-6 top-28
                     w-11 h-11 flex items-center justify-center
                     rounded-xl bg-white/10 border border-white/10
                     hover:border-primary hover:text-primary
                     hover:scale-105 transition-all"
          aria-label="Back to Home"
        >
          <ArrowLeft size={20} />
        </button>

        {/* TOP TOGGLE BUTTONS */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all
              ${
                activeTab === "skills"
                  ? "bg-primary text-black shadow-lg"
                  : "border border-white/20 text-textMuted hover:border-primary"
              }`}
          >
            Skills
          </button>

          <button
            onClick={() => navigate("/certificates")}
            className="px-6 py-3 rounded-xl font-semibold
                       border border-white/20 text-textMuted
                       hover:border-primary transition-all"
          >
            Certificates
          </button>
        </div>

        {/* PAGE TITLE */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-textMuted max-w-xl mx-auto">
            Technologies, frameworks and tools I use to build reliable,
            scalable and user-friendly applications.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="bg-card/80 border border-white/10 rounded-2xl
                         p-6 hover:border-primary transition-all
                         animate-slideIn"
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center
                                rounded-lg bg-primary/10 text-primary">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold">
                  {group.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg text-sm
                               bg-white/5 border border-white/10
                               hover:bg-primary hover:text-black
                               transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TOOLS SECTION */}
        <div className="animate-fadeIn">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center
                            rounded-lg bg-primary/10 text-primary">
              <Wrench />
            </div>
            <h3 className="text-2xl font-semibold">
              Tools I Use
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {toolsData.map((tool, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-xl text-sm
                           bg-card/70 border border-white/10
                           hover:border-primary hover:bg-primary
                           hover:text-black transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
