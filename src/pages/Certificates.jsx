import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  X,
  BookOpen,
  Languages,
  Mic,
  Code2,
  Cpu,
  Trophy,
  Glasses
} from "lucide-react";

/* ===============================
   CERTIFICATE DATA
================================ */

const certificates = [
  {
    id: 1,
    title: "Prathmic",
    icon: <BookOpen />,
    image: "src/assets/Sandy/1.jpeg",
    description:
      "Prathmic marks the foundation of my Hindi learning journey. This certification strengthened my understanding of basic grammar, sentence structure, reading comprehension, and everyday vocabulary. It laid the groundwork for all advanced language levels that followed."
  },
  {
    id: 2,
    title: "Madhyama",
    icon: <BookOpen />,
    image: "src/assets/Sandy/2.jpeg",
    description:
      "The Madhyama certification enhanced my intermediate proficiency in Hindi. I gained confidence in forming complex sentences, improved reading speed, and developed clarity in written communication."
  },
  {
    id: 3,
    title: "Rashtrabasha",
    icon: <Languages />,
    image: "src/assets/Sandy/3.jpeg",
    description:
      "This certification focused on strengthening Hindi as a national language. It emphasized formal writing, comprehension of official content, and structured expression of ideas."
  },
  {
    id: 4,
    title: "Praveshika",
    icon: <Languages />,
    image: "src/assets/Sandy/4.jpeg",
    description:
      "Praveshika helped me advance my language fluency with deeper grammar concepts, improved writing techniques, and enhanced ability to understand professional-level Hindi content."
  },
  {
    id: 5,
    title: "Visharath Poorvath",
    icon: <BookOpen />,
    image: "src/assets/Sandy/5.jpeg",
    description:
      "This level focused on advanced grammar, literature exposure, and formal communication. It significantly improved my confidence in reading long texts and structured writing."
  },
  {
    id: 6,
    title: "Visharath Uvthrath",
    icon: <BookOpen />,
    image: "src/assets/Sandy/6.jpeg",
    description:
      "Visharath Uvthrath refined my expertise in Hindi with strong emphasis on professional writing, interpretation, and precise usage of language in formal contexts."
  },
  {
    id: 7,
    title: "Praveen Poorvath",
    icon: <Languages />,
    image: "src/assets/Sandy/7.jpeg",
    description:
      "This certification validated my advanced-level proficiency in Hindi, focusing on critical reading, expressive writing, and linguistic accuracy."
  },
  {
    id: 8,
    title: "Praveen Uvthrath",
    icon: <Languages />,
    image: "src/assets/Sandy/8.jpeg",
    description:
      "The highest academic level in my Hindi journey, Praveen Uvthrath represents mastery over grammar, literature comprehension, and professional communication."
  },
  {
    id: 9,
    title: "Hindi Speaking – Level 1",
    icon: <Mic />,
    image: "src/assets/Sandy/V 1.jpeg",
    description:
      "This course focused on conversational Hindi, pronunciation, and everyday communication. It helped me speak confidently in real-world situations."
  },
  {
    id: 10,
    title: "Hindi Speaking – Level 2",
    icon: <Mic />,
    image: "src/assets/Sandy/V 2.jpeg",
    description:
      "An advanced speaking certification that strengthened my fluency, clarity, and confidence in professional and social Hindi conversations."
  },
  {
    id: 11,
    title: "Python Programming",
    icon: <Code2 />,
    image: "src/assets/Sandy/Python.jpeg",
    description:
      "This certification reflects my strong foundation in Python programming, including logic building, data handling, and real-world problem solving."
  },
  {
    id: 12,
    title: "NPTEL – IoT 4.0",
    icon: <Cpu />,
    image: "src/assets/Sandy/Screenshot 2026-02-05 204913.png",
    description:
      "Completed the NPTEL IoT 4.0 course with a 60% score, gaining insights into connected systems, sensors, data flow, and emerging IoT technologies."
  },
  {
    id: 13,
    title: "Hackathon Participation",
    icon: <Trophy />,
    image: "src/assets/Sandy/Trixathon.jpeg",
    description:
      "Participated in a hackathon at Erode, where I collaborated with peers, solved real-time problems, and gained hands-on experience in teamwork and innovation."
  },
  {
    id: 14,
    title: "AR / VR Career Guidance",
    icon: <Glasses />,
    image: "src/assets/Sandy/AR VR.jpeg",
    description:
      "Completed an AR/VR-based career guidance program, exploring immersive technologies and understanding how extended reality can shape future learning experiences."
  }
];

/* ===============================
   COMPONENT
================================ */

export default function Certificates() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen pt-28 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-6 top-28 w-11 h-11
                     flex items-center justify-center
                     rounded-xl bg-white/10 border border-white/10
                     hover:border-primary hover:text-primary
                     transition-all"
        >
          <ArrowLeft size={20} />
        </button>

        {/* TOP TOGGLE */}
        <div className="flex justify-center gap-4 mb-14">
          <button
            onClick={() => navigate("/skills")}
            className="px-6 py-3 rounded-xl font-semibold
                       border border-white/20 text-textMuted
                       hover:border-primary transition-all"
          >
            Skills
          </button>

          <button
            className="px-6 py-3 rounded-xl font-semibold
                       bg-primary text-black shadow-lg"
          >
            Certificates
          </button>
        </div>

        {/* TITLE */}
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Certificates</span>
          </h2>
          <p className="text-textMuted max-w-xl mx-auto">
            A curated collection of language mastery, technical learning
            and professional achievements.
          </p>
        </div>

        {/* DETAIL VIEW */}
        {selected ? (
          <div className="relative bg-card/80 border border-white/10
                          rounded-2xl p-6 animate-fadeIn">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10
                         flex items-center justify-center
                         rounded-lg bg-white/10 hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[420px] object-contain rounded-xl mb-6"
            />

            <div className="flex items-center gap-3 mb-4 text-primary">
              {selected.icon}
              <h3 className="text-2xl font-semibold text-white">
                {selected.title}
              </h3>
            </div>

            <p className="text-textMuted leading-relaxed">
              {selected.description}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelected(cert)}
                className="cursor-pointer bg-card/70 border border-white/10
                           rounded-2xl p-4 hover:border-primary
                           hover:-translate-y-2 hover:shadow-xl
                           transition-all animate-slideIn"
              >
                <div className="flex items-center gap-2 mb-3 text-primary">
                  {cert.icon}
                  <span className="font-medium">{cert.title}</span>
                </div>

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-44 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
