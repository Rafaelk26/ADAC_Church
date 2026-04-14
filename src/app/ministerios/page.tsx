"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/all/Header";
import { Wrapper } from "@/components/all/Wrapper";
import { MinistersCard } from "@/components/ministerios/MinistersCard";
import { Main } from "@/components/ministerios/Main";
import styles from './styles.module.css'
import foto from "../../../public/assets/BANNER 2.png";
import { Footer } from "@/components/all/Footer";

export default function Ministerios() {

    const [ministers, setMinisters] = useState<any[]>([]);


    useEffect(()=> {
        const minister = Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            nomeCelula: "Célula X",
            bairroCelula: "Gaviotas",
            faixaCelula: "18-40 Anos",
            generoCelula: "Masculino",
            nomeLider: "Líder X",
            fotoCelula: foto,
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

            {/* GRID */}
            <main
            className="w-11/12 grid grid-cols-1 mt-16 mb-20 md:mt-32 gap-8 mx-auto
            md:grid-cols-3 md:gap-10 md:w-full md:mx-0"
            >
                {ministers.map((minister) => (
                    <div className={`${styles.animateFadeUp}`} key={minister.id}>
                        <MinistersCard 
                        fotoMinisterio={foto} 
                        nomeMinisterio="Ministério X"
                        nomeLider="Líder X"
                        status={true} 
                        link={`/`}
                        {...minister} />
                    </div>
                ))}
            </main>
        </section>

        <Footer />
      </Wrapper>
    </>
  );
}