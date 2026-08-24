"use client";

import { useState } from "react";
import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isAdminRoute = pathname.startsWith("/admin");

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/auth/login");
  }

  return (
    <header className="relative w-full h-16 bg-transparent text-white flex items-center justify-center z-50">
      <div className="w-full max-w-7xl px-4 flex items-center justify-between">

        {/* Logo */}
        <a onClick={() => setOpen(false)} href="/">
          <Image src={ADACLogo} alt="ADAC Church" width={180} height={180} />
        </a>

        {/* MENU DESKTOP */}
        {isAdminRoute ? (
          <>
            <nav className="hidden md:flex gap-6">
              <a href="/admin/home" className="text-sm font-montserrat hover:text-blue-400 transition-colors">HOME ADMIN</a>
              <a href="/admin/trabalhadores" className="text-sm font-montserrat hover:text-blue-400 transition-colors">TRABALHADORES</a>
              <a href="/admin/ministerios" className="text-sm font-montserrat hover:text-blue-400 transition-colors">MINISTÉRIOS</a>
              <a href="/admin/celulas" className="text-sm font-montserrat hover:text-blue-400 transition-colors">CÉLULAS</a>
              <a href="/admin/eventos" className="text-sm font-montserrat hover:text-blue-400 transition-colors">EVENTOS</a>
              <a href="/admin/visitantes" className="text-sm font-montserrat hover:text-blue-400 transition-colors">VISITANTES</a>
              <a href="/auth/login" onClick={()=> handleLogout()} className="text-sm font-montserrat hover:text-red-400 transition-colors">SAIR</a>
            </nav>
          </>
        ):(
          <>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-sm font-montserrat hover:text-blue-400 transition-colors">HOME</a>
              <a href="/ministerios" className="text-sm font-montserrat hover:text-blue-400 transition-colors">MINISTÉRIOS</a>
              <a href="/celulas" className="text-sm font-montserrat hover:text-blue-400 transition-colors">CÉLULAS</a>
              <a href="/#visit" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PLANEJAR VISITA</a>
              <a href="/#programation" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PROGRAMAÇÃO</a>
              <a href="/about" className="text-sm font-montserrat hover:text-blue-400 transition-colors">QUEM SOMOS</a>
              <a href="/eventos" className="text-sm font-montserrat hover:text-blue-400 transition-colors">EVENTOS</a>
              <a href="/auth/login" className="text-sm font-montserrat hover:text-blue-400 transition-colors">ÁREA ADMIN</a>
            </nav>
          </>
        )}

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
          absolute top-16 left-0 w-full h-screen bg-[#090909]/70 backdrop-blur-md
          flex flex-col items-center gap-6 py-6
          transition-all duration-300 z-50
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        {isAdminRoute ? (
          <>
            <a onClick={() => setOpen(false)} href="/admin/home">HOME ADMIN</a>
            <a onClick={() => setOpen(false)} href="/admin/trabalhadores">TRABALHADORES</a>
            <a onClick={() => setOpen(false)} href="/admin/ministerios">MINISTÉRIOS</a>
            <a onClick={() => setOpen(false)} href="/admin/celulas">CÉLULAS</a>
            <a onClick={() => setOpen(false)} href="/admin/eventos">EVENTOS</a>
            <a onClick={() => setOpen(false)} href="/admin/visitantes">VISITANTES</a>
            <a onClick={() => {
              setOpen(false);
              handleLogout();
            }} href="/auth/login">SAIR</a>
          </>
        ):(
          <>
            <a onClick={() => setOpen(false)} href="/">HOME</a>
            <a onClick={() => setOpen(false)} href="/ministerios">MINISTÉRIOS</a>
            <a onClick={() => setOpen(false)} href="/celulas">CÉLULAS</a>
            <a onClick={() => setOpen(false)} href="/#visit">PLANEJAR VISITA</a>
            <a onClick={() => setOpen(false)} href="/#programation">PROGRAMAÇÃO</a>
            <a onClick={() => setOpen(false)} href="/about">QUEM SOMOS</a>
            <a onClick={() => setOpen(false)} href="/eventos">EVENTOS</a>
            <a onClick={() => setOpen(false)} href="/auth/login">ÁREA ADMIN</a>
          </>
        )}
      </div>
    </header>
  );
}