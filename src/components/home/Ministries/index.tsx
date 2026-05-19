"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "../ButtonLink";
import { Card } from "./Cards";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";
import { Ministerio } from "@/types/types";

import styles from "./style.module.css";
import fotoPlaceholder from "../../../../public/assets/cardsImage.jpg";

export function Ministries() {
    
    const [ ministerios, setMinisterios ] = useState<Ministerio[]>([]);

    function getImageSrc(
    foto: string | File | StaticImageData | null | undefined
    ): string | StaticImageData {
        if (!foto) return fotoPlaceholder;

        if (foto instanceof File) {
            return URL.createObjectURL(foto);
        }

        return foto;
    }
    
    // Carrega e insere no state "setMinisterios" os ministerios do banco resgatados
    useEffect(() => {
        fetchAllMinisters().then((data) => {
        setMinisterios(Array.isArray(data) ? data : []);
    });
    }, []);

    return(
        <main className="w-full mb-56
        md:max-w-7xl md:mx-auto md:mt-8 md:mb-10 flex flex-col items-center">
            <div className='w-full overflow-hidden'>
                <div id="card-slider" className={`w-max flex ${styles.animateSlide} gap-5`}>
                    {[...ministerios, ...ministerios].map((ministerio, index) => (
                        <Card
                        key={index}
                        foto={getImageSrc(ministerio.fotoMinisterio)}
                        nameAlt={ministerio.nomeMinisterio}
                        />
                    ))}
                    </div>
                </div>

            <div className="w-full mt-12 mx-auto flex justify-center">
              <ButtonLink nome="Conhecer os ministérios" href="/ministerios" />
            </div>
        </main>
    )
}