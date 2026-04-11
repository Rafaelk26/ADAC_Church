"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CardsCell } from "./CardsCell";

import banner1 from "../../../../public/assets/BANNER 1.png";
import banner2 from "../../../../public/assets/BANNER 2.png";
import { ButtonLink } from "../ButtonLink";

export function Cell() {
  const [cells] = useState([
    { id: 1, foto: banner1 },
    { id: 2, foto: banner2 },
    { id: 3, foto: banner1 },
    { id: 4, foto: banner2 },
    { id: 5, foto: banner1 },
    { id: 6, foto: banner2 },
    { id: 7, foto: banner1 },
    { id: 8, foto: banner2 },
    { id: 9, foto: banner1 },
  ]);

  const column1 = cells.filter((_, index) => index % 3 === 0);
  const column2 = cells.filter((_, index) => index % 3 === 1);
  const column3 = cells.filter((_, index) => index % 3 === 2);

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
                <CardsCell key={`${cell.id}-${index}`} foto={cell.foto} />
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
                <CardsCell key={`${cell.id}-${index}`} foto={cell.foto} />
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
                <CardsCell key={`${cell.id}-${index}`} foto={cell.foto} />
                ))}
            </motion.div>
        </div>

        <div className="w-full mt-12 flex items-center justify-center">
            <ButtonLink nome="Visitar uma célula" href="#" />
        </div>
    </section>
  );
}