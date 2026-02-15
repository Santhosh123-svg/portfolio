import React from "react";
import { FileDown, Code, Hand } from "lucide-react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen pt-28 px-6 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE BLOCK */}
          <div className="order-1 md:order-2 flex flex-col items-center animate-slideIn">
            <div className="relative h-[340px] w-full md:h-[420px] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('src/assets/Sandy4.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
            </div>

            {/* NAME BELOW IMAGE */}
            <div className="mt-5 text-center">
              <p className="flex items-center justify-center gap-2 text-lg text-textMuted">
                <Hand size={18} className="text-primary animate-wave" />
                Hey, welcome! I’m
              </p>
              <h3 className="text-2xl font-bold tracking-wide">
                Santhosh <span className="text-primary">(Sandy)</span>
              </h3>

              {/* MENTOR INFO */}
              <p className="mt-2 text-sm text-textMuted">
                Mentor: <span className="text-primary">Rajvengadam S</span> • 2nd year B.Tech IT at KIOT
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-2 md:order-1 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Welcome to my<br />
              <span className="text-primary">personal portfolio website</span>
            </h2>

            <p className="text-textMuted max-w-md mb-8">
              I’m a frontend & React developer. Thanks for visiting my website —
              feel free to explore my projects and work.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap mb-8">
              <a
                href="/projects"
                className="btn-glow flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-xl font-semibold"
              >
                <Code size={18} /> Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-outline flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl"
              >
                <FileDown size={18} /> Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/_jith__sandy_?igsh=ZzVteXU1N2Jjemdi"
                target="_blank"
                className="social-icon instagram"
              >
                <Instagram size={22} />
              </a>

              <a
                href="linkedin.com/in/santhosh-s-88013b319"
                target="_blank"
                className="social-icon linkedin"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://wa.me/916374122294"
                target="_blank"
                className="social-icon whatsapp"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-textMuted text-sm">
        © {new Date().getFullYear()} Santhosh Portfolio • Built with passion
      </footer>
    </>
  );
}
