"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ButtonLink";

export function Main(){
    return(
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                duration: 1,
                ease: "easeOut",
                }}
                className="flex flex-col items-center gap-4 max-w-4xl text-center"
            >
                <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-7xl mt-30 font-manrope font-bold text-white leading-[1.1]"
                >
                Um lugar para você <br />
                chamar de <span className="text-blue-400">casa</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg text-gray-200 font-montserrat font-light max-w-2xl"
                >
                Venha participar de nossos encontros e veja como a fé em Cristo pode trazer renovação e propósito para sua vida.
                Junte-se a nós e sinta o poder do amor de Deus agindo em sua vida e na vida de outras pessoas, pois Nossa Missão
                é Ganhar essa Cidade!
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-full mt-12"
                >
                <ButtonLink nome="Conhecer mais" href="#about" />
                </motion.div>
            </motion.div>
        </div>
    )
}