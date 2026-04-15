"use client";

import { useState } from "react";
import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full h-16 bg-transparent text-white flex items-center justify-center z-50">
      <div className="w-full max-w-7xl px-4 flex items-center justify-between">

        {/* Logo */}
        <Image src={ADACLogo} alt="ADAC Church" width={180} height={180} />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          <a href="/ministerios" className="text-sm font-montserrat hover:text-blue-400 transition-colors">MINISTÉRIOS</a>
          <a href="/celulas" className="text-sm font-montserrat hover:text-blue-400 transition-colors">CÉLULAS</a>
          <a href="/#visit" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PLANEJAR VISITA</a>
          <a href="/#programation" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PROGRAMAÇÃO</a>
          <a href="/about" className="text-sm font-montserrat hover:text-blue-400 transition-colors">QUEM SOMOS</a>
          <a href="/eventos" className="text-sm font-montserrat hover:text-blue-400 transition-colors">EVENTOS</a>
        </nav>

        {/* BOTÃO HAMBURGUER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-[#090909]/95 backdrop-blur-md
          flex flex-col items-center gap-6 py-6
          transition-all duration-300 z-40
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <a onClick={() => setOpen(false)} href="/ministerios">MINISTÉRIOS</a>
        <a onClick={() => setOpen(false)} href="/celulas">CÉLULAS</a>
        <a onClick={() => setOpen(false)} href="/#visit">PLANEJAR VISITA</a>
        <a onClick={() => setOpen(false)} href="/#programation">PROGRAMAÇÃO</a>
        <a onClick={() => setOpen(false)} href="/about">QUEM SOMOS</a>
        <a onClick={() => setOpen(false)} href="/eventos">EVENTOS</a>
      </div>
    </header>
  );
}