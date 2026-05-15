"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/all/Header";
import { Wrapper } from "@/components/all/Wrapper";
import { MinistersCard } from "@/components/ministerios/MinistersCard";
import { Main } from "@/components/ministerios/Main";
import { Footer } from "@/components/all/Footer";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores";
import { Ministerio, Trabalhador } from "@/types/types";

import styles from './styles.module.css'
import foto from "../../../public/assets/BANNER 2.png";

export default function Ministerios() {

    const [ ministerios, setMinisterios ] = useState<Ministerio[]>([]);
    const [ ministersWork, setMinistersWork ] = useState<Trabalhador[]>([]);
    

    // Carrega e insere no state "setMinisterios" os ministerios do banco resgatados
    useEffect(() => {
        fetchAllTrabalhadores().then((data) => {
        setMinistersWork(Array.isArray(data) ? data : []);
      })

        fetchAllMinisters().then((data) => {
        setMinisterios(Array.isArray(data) ? data : []);
      })
    }, []);


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
                {ministerios.map((minister) => (
                    <div className={`${styles.animateFadeUp}`} key={minister.id}>
                        <MinistersCard
                          id={minister.id}
                          fotoMinisterio={minister.fotoMinisterio ?? undefined}
                          nomeMinisterio={minister.nomeMinisterio}
                          liderMinisterio={minister.liderMinisterio}
                          statusMinisterio={minister.statusMinisterio}
                          link="/"
                        />
                    </div>
                ))}
            </main>
        </section>

        <Footer />
      </Wrapper>
    </>
  );
}