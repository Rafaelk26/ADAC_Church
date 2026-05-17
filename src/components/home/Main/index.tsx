"use client";

import { ButtonLink } from "../ButtonLink";

import styles from "./style.module.css"

export function Main(){
    return(
        <div className={`relative z-10 flex h-full w-full items-center justify-center px-6 ${styles.animateFadeUp}`}>
            <div className={`flex flex-col items-center gap-4 max-w-4xl text-center`}>
                <h1
                className={`text-5xl md:text-7xl mt-30 font-manrope font-bold text-white leading-[1.1]`}>
                Um lugar para você chamar de <span className="text-blue-400">casa</span>
                </h1>

                <p
                className={`text-lg text-gray-200 font-montserrat font-light max-w-2xl`}
                >
                Venha participar de nossos encontros e veja como a fé em Cristo pode trazer renovação e propósito para sua vida.
                Junte-se a nós e sinta o poder do amor de Deus agindo em sua vida e na vida de outras pessoas, pois Nossa Missão
                é Ganhar essa Cidade!
                </p>

                <div
                className={`w-full mt-12`}
                >
                <ButtonLink nome="Conhecer mais" href="#about" />
                </div>
            </div>
        </div>
    )
}