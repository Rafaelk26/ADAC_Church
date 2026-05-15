"use client";

import Image from "next/image";
import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { TableInformation } from "@/components/admin/home/TableInformation";
import { Trabalhador } from "@/types/types";

import foto from "../../../../public/assets/backgroundAdmin.png"
import { useEffect, useState } from "react";
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores";

export function TrabalhadoresClient(){

    const [interesses, setInteresses] = useState<Trabalhador[]>([])

    // Carrega e insere no state "setInteresses" os trabalhadores do banco resgatados
    useEffect(() => {
        fetchAllTrabalhadores().then((data) => {
            setInteresses(Array.isArray(data) ? data : []);
        });
    }, []);

    return(
        <>
            <section className="relative w-full flex flex-col flex-1">
                <div className="relative z-50">
                    <Header />
                </div>

                <Image
                    width={1000}
                    height={1000}
                    alt="Foto de fundo"
                    src={foto}
                    className="absolute inset-0 w-full h-full object-cover opacity-65 z-10 md:opacity-85"
                />

                <div className="relative z-20 flex h-full w-full items-start justify-center px-6 pt-20">
                    <div className="max-w-7xl w-full">
                        <h1 className="text-3xl md:text-4xl font-manrope font-bold text-white">
                            Trabalhadores
                        </h1>
                    </div>
                </div>


                <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-10 p-7 rounded-tr-4xl rounded-tl-4xl">
                    <div className="max-w-7xl w-full flex gap-4 justify-between items-center">
                        <h4 className="text-2xl font-montserrat font-normal text-white">Total de Resultados</h4>
                        <h1 className="text-5xl md:text-4xl font-montserrat font-semibold text-white">{interesses.length}</h1>
                    </div>    

                    {/* TABLE INFORMATION OF WORK */}
                    <div className="max-w-7xl w-full flex mt-4">
                        <TableInformation />
                    </div>            
                </div>

                <Footer />
            </section>
        </>
    )
}