"use client";

import Image from "next/image"
import { useEffect, useState } from "react"
import { Header } from "@/components/all/Header"
import { Footer } from "@/components/all/Footer"
import { CardInformation } from "@/components/admin/home/CardInformation"
import { TableInformation } from "@/components/admin/home/TableInformation"
import { Celula, Eventos, Ministerio,Trabalhador, Visitante } from "@/types/types"
import { fetchAllEventos } from "@/functions/GET/fetchAllEventos"
import { fetchAllCelulas } from "@/functions/GET/fetchAllCelulas"
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters"
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores"
import { fetchAllVisitantes } from "@/functions/GET/fetchAllVisitantes"
import { animatedNumber } from "@/functions/ALL/animatedNumber";

import styles from "./styles.module.css";
import foto from "../../../../public/assets/backgroundAdmin.png"


export function AdminHomeClient(){

    const [ celulas, setCelulas ] = useState<Celula[]>([])
    const [ eventos, setEventos ] = useState<Eventos[]>([])
    const [ ministerio, setMinisterio ] = useState<Ministerio[]>([])
    const [ trabalhador, setTrabalhador ] = useState<Trabalhador[]>([])
    const [ visitante, setVisitante ] = useState<Visitante[]>([])

    useEffect(()=> {
        fetchAllEventos().then((data) => {
            setEventos(Array.isArray(data) ? data : []);
        });

        fetchAllCelulas().then((data) => {
            setCelulas(Array.isArray(data) ? data : []);
        });

        fetchAllMinisters().then((data) => {
            setMinisterio(Array.isArray(data) ? data : []);
        });

        fetchAllTrabalhadores().then((data) => {
            setTrabalhador(Array.isArray(data) ? data : []);
        });

        fetchAllVisitantes().then((data) => {
            setVisitante(Array.isArray(data) ? data : []);
        });
    }, [])

    return(
        <>
            <section className="relative h-full w-full overflow-visible">
                <div className="relative z-50">
                    <Header />
                </div>

                <Image
                    alt="Foto de fundo"
                    src={foto}
                    className="absolute inset-0 w-full h-max object-cover opacity-65 z-10 md:opacity-85"
                />

                <div className="relative z-20 flex h-full w-full items-start justify-center px-6 pt-20">
                    <div className="max-w-7xl w-full">
                        <h1 className="text-3xl md:text-4xl font-manrope font-bold text-white">
                            Administrador
                        </h1>
                    </div>
                </div>



                {/* INFO CARDS */}

                <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-10 p-7 rounded-tr-4xl rounded-tl-4xl">
                    
                    {/* CARDS */}
                    <div className={`${styles.customScroll} w-full flex gap-4 overflow-x-auto p-1`}>
                    <CardInformation
                    nome="Trabalhadores" 
                    numeros={animatedNumber(trabalhador.length)}
                    legenda="Pessoas interessadas em trabalhar em ministério da igreja."
                    link="/admin/trabalhadores" />

                    <CardInformation
                    nome="Eventos Ativos" 
                    numeros={animatedNumber(eventos.length)}
                    legenda="Eventos que estão aberto ao público para ser frequentado."
                    link="/admin/eventos" />

                    <CardInformation
                    nome="Células Ativas"
                    numeros={animatedNumber(celulas.length)}
                    legenda="Células abertas para novos membros participarem."
                    link="/admin/celulas" />

                    <CardInformation
                    nome="Visitantes Interessados" 
                    numeros={animatedNumber(visitante.length)}
                    legenda="Pessoas interessadas em fazer uma visita na igreja."
                    link="/admin/visitantes" />

                    <CardInformation
                    nome="Ministérios Abertos" 
                    numeros={animatedNumber(ministerio.length)}
                    legenda="Ministérios abertos para servir ao Senhor com excelência."
                    link="/admin/ministerios" />
                    </div>


                    {/* TABLE */}

                    <div className="max-w-7xl w-full mt-16">
                        <h1 className="text-2xl md:text-3xl font-montserrat font-light text-white">Trabalhadores disponíveis</h1>
                        <TableInformation />
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}