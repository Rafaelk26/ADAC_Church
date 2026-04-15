"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/all/Header";
import { Wrapper } from "@/components/all/Wrapper";
import { Main } from "@/components/eventos/Main";
import foto from "../../../public/assets/BANNER 3.png";
import { BannerEvent } from "@/components/eventos/BannerEvent";
import { Footer } from "@/components/all/Footer";

export default function Eventos() {

    const [ministers, setMinisters] = useState<any[]>([]);


    useEffect(()=> {
        const minister = Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            nomeMinisterio: "Célula X",
            nomeLider: "Líder X",
            status: true,
            fotoMinisterio: foto,
        }));

        setMinisters(minister)
    },[])


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
            <main
            className="w-full mx-auto"
            >
                <BannerEvent />
            </main>
        </section>

        <Footer />
      </Wrapper>
    </>
  );
}