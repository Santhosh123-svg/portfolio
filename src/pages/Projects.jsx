import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Film,
  Database,
  Cake,
  ExternalLink
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    icon: <Sparkles />,
    video: "https://www.youtube.com/embed/Yy-R2XTGsnE",
    live: "https://sweet-duckanoo-645848.netlify.app/",
    tech: ["HTML", "CSS"],
    description:
      "This is my very first website and the foundation of my web development journey."
  },
  {
    id: 2,
    title: "Cake Website Project",
    icon: <Cake />,
    video: "https://www.youtube.com/embed/9Wdjnpz6DRI",
    live: "https://leafy-brigadeiros-ad1ee1.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "This project introduced me to JavaScript and real interactivity."
  },
  {
    id: 3,
    title: "Movie Explorer",
    icon: <Film />,
    video: "https://www.youtube.com/embed/GvPKMTRkadw",
    live: "https://elaborate-semifreddo-eaa46a.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "React JS"],
    description:
      "My first React project which helped me master components and reusable UI."
  },
  {
    id: 4,
    title: "Skill Mirror (MERN Stack)",
    icon: <Database />,
    video: "https://www.youtube.com/embed/k-0wBCWfDR8",
    live: "https://skillmirror-live.onrender.com/login",
    tech: ["MongoDB", "Express", "React JS", "Node JS"],
    description:
      "My first MERN stack project that taught me backend APIs and full stack flow."
  },
  {
    id: 5,
    title: "Sandy’s Sweet Nest",
    icon: <Cake />,
    video: "https://www.youtube.com/embed/URpHmSAY_i8",
    live: "https://sandy-sweet-nest-3.onrender.com/",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Node JS",
      "MongoDB"
    ],
    description:
      "My dream full-stack MERN application with real-world scalability."
  }
];

export default function Projects() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-black via-[#0f172a] to-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="fixed left-4 top-20 sm:top-28 w-10 h-10
                     flex items-center justify-center
                     rounded-xl bg-white/10 backdrop-blur-md
                     border border-white/10
                     hover:border-primary hover:text-primary
                     hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowLeft size={18} />
        </button>

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Cinematic <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Click a project and explore the experience visually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActive(project)}
                className={`cursor-pointer p-5 rounded-2xl border
                  transition-all duration-300 backdrop-blur-md
                  ${
                    active?.id === project.id
                      ? "border-primary bg-primary/10 scale-105 shadow-lg shadow-primary/20"
                      : "border-white/10 bg-white/5 hover:border-primary hover:scale-105"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2 text-primary">
                  {project.icon}
                  <h3 className="font-semibold text-base sm:text-lg">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-400">
                  {project.tech.join(" • ")}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3">
            {!active ? (
              <div className="flex flex-col items-center justify-center
                              text-center bg-white/5 border border-white/10
                              rounded-2xl p-8 sm:p-12">
                <Film size={40} className="text-primary mb-4 animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Select a Project
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Choose a project to begin the cinematic experience.
                </p>
              </div>
            ) : (
              <div>

                {/* Responsive Video */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl shadow-black/50">
                  <iframe
                    src={active.video}
                    title={active.title}
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {active.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {active.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs sm:text-sm rounded-lg
                                 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-5 py-3 rounded-xl
                             bg-primary text-black font-semibold
                             hover:scale-105 transition-all duration-300"
                >
                  Visit Website <ExternalLink size={16} />
                </a>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}