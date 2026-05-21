"use client";

import Image from "next/image";
import { Header } from "@/components/all/Header";
import { Wrapper } from "@/components/all/Wrapper";
import { Main } from "@/components/eventos/Main";
import { BannerEvent } from "@/components/eventos/BannerEvent";
import { Footer } from "@/components/all/Footer";

import foto from "../../../public/assets/Eventos.webp";

export default function Eventos() {

  return (
    <>
      <section className="relative h-full w-full overflow-visible">
        <Header />

        <Image 
        alt="Foto de fundo"
        src={foto}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65
        md:opacity-85"
        />

        <div className="absolute inset-0 bg-[#050505]/40 z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#050505] z-[2]" />

        <Main />
      </section>

      <Wrapper>
        <section className="w-full">

            {/* CONTENT EVENTS */}
            <main className="w-full mx-auto">
              <BannerEvent />
            </main>
        </section>

        <Footer />
      </Wrapper>
    </>
  );
}