import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Maximize,
  X,
  Sparkles,
  Film,
  Database,
  Cake
} from "lucide-react";

/* ===============================
   PROJECT DATA
================================ */

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    icon: <Sparkles />,
    video: "src/assets/Sandy/Sandy - profolio.mp4",
    tech: ["HTML", "CSS"],
    description:
      "This is my very first website and the foundation of my web development journey. Built using pure HTML and CSS, this project taught me structure, layouts, responsiveness, and visual hierarchy."
  },
  {
    id: 2,
    title: "Cake Website Project",
    icon: <Cake />,
    video: "src/assets/Sandy/Screen Recording 2026-02-03 104316.mp4",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "This project introduced me to JavaScript and real interactivity. It helped me understand DOM, animations, and user-focused UI."
  },
  {
    id: 3,
    title: "Movie Explorer",
    icon: <Film />,
    video: "src/assets/Sandy/Screen Recording 2026-02-03 104746.mp4",
    tech: ["HTML", "CSS", "JavaScript", "React JS"],
    description:
      "My first React project which helped me master components, state management and reusable UI concepts."
  },
  {
    id: 4,
    title: "Skill Mirror (MERN Stack)",
    icon: <Database />,
    video: "src/assets/Sandy/Screen Recording 2026-02-04 142705.mp4",
    tech: ["MongoDB", "Express", "React JS", "Node JS"],
    description:
      "My first MERN stack project. UX may not be perfect, but this project taught me backend, APIs, and full-stack flow."
  },
  {
    id: 5,
    title: "Sandy’s Sweet Nest",
    icon: <Cake />,
    video: "src/assets/Sandy/San.mp4",
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
      "My dream project. A real-world MERN application with proper UX, backend logic and scalability."
  }
];

/* ===============================
   COMPONENT
================================ */

export default function Projects() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [active, setActive] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);

  /* Auto play when project changes */
  useEffect(() => {
    if (videoRef.current && active && !fullscreen) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [active, fullscreen]);

  /* Hide chatbot only in fullscreen */
  useEffect(() => {
    document.body.classList.toggle("hide-chatbot", fullscreen);
  }, [fullscreen]);

  return (
    <section className="min-h-screen pt-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="fixed left-6 top-28 w-11 h-11
                     flex items-center justify-center
                     rounded-xl bg-white/10 border border-white/10
                     hover:border-primary hover:text-primary transition-all"
        >
          <ArrowLeft size={20} />
        </button>

        {/* TITLE */}
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cinematic <span className="text-primary">Projects</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Click a project and experience my journey visually.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">

          {/* PROJECT LIST */}
          <div className="md:col-span-2 space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActive(project)}
                className={`cursor-pointer p-5 rounded-2xl border
                  ${
                    active?.id === project.id
                      ? "border-primary bg-primary/10 scale-[1.03]"
                      : "border-white/10 bg-card/60"
                  }
                  hover:border-primary transition-all`}
              >
                <div className="flex items-center gap-3 mb-2 text-primary">
                  {project.icon}
                  <h3 className="font-semibold">{project.title}</h3>
                </div>

                <p className="text-sm text-textMuted">
                  {project.tech.join(" • ")}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="md:col-span-3">
            {!active ? (
              <div className="h-full flex flex-col items-center justify-center
                              text-center bg-card/50 border border-white/10
                              rounded-2xl p-10 animate-fadeIn">
                <Film size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Select a Project
                </h3>
                <p className="text-textMuted">
                  Choose a project to begin the cinematic experience.
                </p>
              </div>
            ) : (
              <div className="animate-fadeIn">

                {/* VIDEO PLAYER */}
                <div className="relative rounded-2xl overflow-hidden bg-black mb-8">
                  <video
                    ref={videoRef}
                    src={active.video}
                    controls
                    controlsList="nofullscreen"
                    playsInline
                    className="w-full h-[320px] object-cover"
                  />

                  {/* CUSTOM FULLSCREEN */}
                  <button
                    onClick={() => {
                      setFullscreen(true);
                      if (videoRef.current) {
                        videoRef.current.pause();
                      }
                    }}
                    className="absolute bottom-4 right-4
                               bg-black/70 p-2 rounded-lg
                               hover:scale-110 transition"
                  >
                    <Maximize size={20} />
                  </button>
                </div>

                {/* DETAILS */}
                <h3 className="text-3xl font-bold mb-4">
                  {active.title}
                </h3>

                <p className="text-textMuted leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {active.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm
                                 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FULLSCREEN OVERLAY */}
      {fullscreen && active && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => {
              setFullscreen(false);

              // force browser fullscreen exit
              if (document.fullscreenElement) {
                document.exitFullscreen();
              }
            }}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>

          <video
            src={active.video}
            autoPlay
            controls
            controlsList="nofullscreen"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
