"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Trabalhador } from "@/types/types";
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores";
import { handleDeleteTrabalhador } from "@/functions/DELETE/handleDeleteTrabalhador";

import styles from "./styles.module.css";
import banner from "../../../../../public/assets/BANNER 3.png"
import { formatNumberForVisit } from "@/functions/ALL/formatNumberForVisit";

export function TableInformation(){

    const [interesses, setInteresses] = useState<Trabalhador[]>([])


    function getImageSrc(foto: string | File | StaticImageData | null | undefined): string | StaticImageData {
        if (!foto) return banner;

        if (typeof foto === "string") return foto;

        if (foto instanceof File) {
            return URL.createObjectURL(foto);
        }

        return foto;
    }

    // Carrega e insere no state "setInteresses" os trabalhadores do banco resgatados
    useEffect(() => {
        fetchAllTrabalhadores().then((data) => {
            setInteresses(Array.isArray(data) ? data : []);
        });
    }, []);

    return(

        
        <>  
            <div className={`${styles.customScroll} max-w-md w-full max-h-[320px] overflow-y-auto overflow-x-auto pr-2 md:max-w-full`}>
                <table className="w-7xl mt-5 md:w-full">
                    <thead>
                        <tr className="bg-[#090909] text-left">
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tl-2xl">
                            NOME
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            TELEFONE
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            MINISTÉRIO
                        </th>
                        <th 
                        className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tr-xl">
                            AÇÃO
                        </th>
                        </tr>
                    </thead>

                    <tbody className={`${styles.customScroll} table-row-group w-full`}>
                        {interesses.length === 0 ? ( 
                        <>
                            <tr className="bg-[#1a1a1a] w-full">
                                <td colSpan={4} className="text-center py-16 font-manrope text-gray-400">
                                Não foi encontrado nenhum interesse
                                </td>
                            </tr>
                        </>
                        ) : (
                        <>
                            {interesses.map((i, index)=> (
                                <tr key={index} className="w-full odd:bg-[#1a1a1a]/60 even:bg-[#121212]/60">
                                    <td className="py-4 px-4">
                                        {i?.nomeTrabalhador}
                                    </td>

                                    <td className="py-4 px-4">
                                        {i?.whatsappTrabalhador}
                                    </td>

                                    <td className="py-4 px-4">
                                        <div className="flex gap-3 items-center">
                                        <Image
                                            alt="Foto do Ministério"
                                            src={getImageSrc(i?.fotoMinisterio)}
                                            className="w-10 h-10 rounded-full object-cover"
                                            width={1000}
                                            height={1000}
                                        />
                                        <span>{i?.nomeMinisterio}</span>
                                        </div>
                                    </td>

                                    <td className="py-4 px-4 flex gap-2">
                                        <button
                                        onClick={()=> formatNumberForVisit(i.whatsappTrabalhador, `Olá ${i.nomeTrabalhador}! Gostaria de agradecer por você se interessar em agregar no ministério *${i.nomeMinisterio}*!`)}
                                        className="
                                        bg-blue-600 text-white text-sm
                                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                                        hover:bg-blue-700 hover:scale-105
                                        ">
                                        Entrar em contato
                                        </button>
                                        
                                        <button
                                        onClick={async () => {
                                            const res = await handleDeleteTrabalhador(i.id);

                                            if (res?.success) {
                                                setInteresses((prev) => prev.filter((item) => item.id !== i.id));
                                            }
                                        }}
                                        className="
                                        bg-green-600 text-white text-sm
                                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                                        hover:bg-green-700 hover:scale-105
                                        ">
                                        Marcar como lido
                                        </button>
                    
                                    </td>
                                </tr>
                            ))}
                        </>
                    )}
                    </tbody>
                </table>
            </div>
            
        </>
    )
}