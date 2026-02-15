import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Code,
  FolderKanban,
  Award,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-card/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-primary block animate-pulse" />
            <span className="absolute inset-0 w-3 h-3 rounded-full bg-primary blur-md opacity-70" />
          </div>

          <h1 className="text-lg font-bold tracking-wide flex items-center gap-1">
            <span className="group-hover:text-primary transition">
              Santhosh
            </span>
            <span className="text-primary">.portfolio</span>
            <Sparkles
              size={16}
              className="text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12"
            />
          </h1>
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 flex items-center justify-center rounded-xl
                     bg-white/10 hover:bg-white/20 transition-all
                     hover:scale-105 active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={22} className="text-primary rotate-90 transition" />
          ) : (
            <Menu size={22} className="text-white transition" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card px-6 py-6 flex flex-col gap-4">

          {/* ITEM */}
          <Link
            to="/skills"
            onClick={handleNavClick}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl
                        transition-all hover:bg-white/10
                        ${isActive("/skills") ? "text-primary bg-white/5" : ""}`}
          >
            <Code size={20} />
            <span className="text-base font-medium">Skills</span>
          </Link>

          <Link
            to="/projects"
            onClick={handleNavClick}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl
                        transition-all hover:bg-white/10
                        ${isActive("/projects") ? "text-primary bg-white/5" : ""}`}
          >
            <FolderKanban size={20} />
            <span className="text-base font-medium">Projects</span>
          </Link>

          <Link
            to="/certificates"
            onClick={handleNavClick}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl
                        transition-all hover:bg-white/10
                        ${isActive("/certificates") ? "text-primary bg-white/5" : ""}`}
          >
            <Award size={20} />
            <span className="text-base font-medium">Certificates</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
