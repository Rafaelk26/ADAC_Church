"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardsCell } from "./CardsCell";
import { ButtonLink } from "../ButtonLink";
import { fetchAllCelulas } from "@/functions/GET/fetchAllCelulas";
import { Celula } from "@/types/types";


export function Cell() {
  const [ cells, setCells ] = useState<Celula[]>([]);

  const column1 = cells.filter((_, index) => index % 3 === 0);
  const column2 = cells.filter((_, index) => index % 3 === 1);
  const column3 = cells.filter((_, index) => index % 3 === 2);


    // Carrega e insere no state "setCells" as fotos das células do banco resgatados
    useEffect(() => {
        fetchAllCelulas().then((data) => {
        setCells(Array.isArray(data) ? data : []);
    });
    }, []);


  return (
    <section className="max-w-5xl w-full mx-auto">
        <div className="max-w-full w-full flex justify-between gap-4 mx-auto mt-16 overflow-hidden h-[600px]">

            {/* COLUNA 1 */}
            <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            }}
            className="w-1/3 flex flex-col gap-4">
                {[...column1, ...column1].map((cell, index) => (
                <CardsCell key={`${cell.id}-${index}`} foto={cell.fotoCelula ?? null} />
                ))}
            </motion.div>


            {/* COLUNA 2 */}
            <motion.div
            animate={{ y: ["-50%", "0%"] }}
            transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            }}
            className="w-1/3 flex flex-col gap-4">
                {[...column2, ...column2].map((cell, index) => (
                <CardsCell key={`${cell.id}-${index}`} foto={cell.fotoCelula ?? null} />
                ))}
            </motion.div>


            {/* COLUNA 3 */}
            <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            }}
            className="w-1/3 flex flex-col gap-4">
                {[...column3, ...column3].map((cell, index) => (
                <CardsCell key={`${cell.id}-${index}`} foto={cell.fotoCelula ?? null} />
                ))}
            </motion.div>
        </div>

        <div className="w-full mt-12 flex items-center justify-center">
            <ButtonLink nome="Visitar uma célula" href="/celulas" />
        </div>
    </section>
  );
}