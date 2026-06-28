"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[60px] bg-[#060d07] border-b border-green-900">
      
      {/* Logo */}
      <span className="font-mono text-sm font-bold tracking-widest text-green-400">
        ANEK.DEV
      </span>

      {/* Links */}
      <ul className="flex items-center gap-6 list-none">
        <li><a href="#home"     className="text-sm text-green-300 hover:text-green-400">Home</a></li>
        <li><a href="#about"    className="text-sm text-green-300 hover:text-green-400">About</a></li>
        <li><a href="#skills"   className="text-sm text-green-300 hover:text-green-400">Skills</a></li>
        <li><a href="#projects" className="text-sm text-green-300 hover:text-green-400">Projects</a></li>
      </ul>

    </nav>
  );
}