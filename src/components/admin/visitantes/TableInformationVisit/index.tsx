"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { fetchAllVisitantes } from "@/functions/GET/fetchAllVisitantes";
import { formatNumberForVisit } from "@/functions/ALL/formatNumberForVisit";
import { Visitante } from "@/types/types";
import { handleDeleteVisit } from "@/functions/DELETE/handleDeleteVisit";

export function TableInformationVisit(){

    const [interesses, setInteresses] = useState<Visitante[]>([])

    // Carrega e insere no state "setInteresses" os visitantes do banco resgatados
    useEffect(() => {
        fetchAllVisitantes().then((data) => {
        setInteresses(Array.isArray(data) ? data : []);
    });
    }, []);

    return(

        
        <>  
            <div className={`${styles.customScroll}  max-w-sm w-full overflow-x-auto pr-2 md:max-w-full`}>
                <table className="w-4xl mt-5 md:w-full">
                    <thead>
                        <tr className="bg-[#090909] text-left">
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tl-2xl">
                            NOME
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            TELEFONE
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tr-xl">
                            AÇÃO
                        </th>
                        </tr>
                    </thead>

                    <tbody  className={`${styles.customScroll}`}>
                        {interesses.length === 0 ? ( 
                        <>
                            <tr className="bg-[#1a1a1a]">
                                <td colSpan={4} className="text-center py-16 font-manrope text-gray-400">
                                    Não foi encontrado nenhum interesse
                                </td>
                            </tr>
                        </>
                        ) : (
                        <>
                            {interesses.map((i, index)=> (
                                <tr key={index} className="odd:bg-[#1a1a1a]/60 even:bg-[#121212]/60">
                                    <td className="py-4 px-4">
                                        {i.nomeVisitante}
                                    </td>

                                    <td className="py-4 px-4">
                                        {i.whatsappVisitante}
                                    </td>

                                    <td className="py-4 px-4 flex gap-2">
                                        <button
                                        onClick={()=> formatNumberForVisit(i.whatsappVisitante, `Olá ${i.nomeVisitante}! Gostaria de agradecer por você se interessar em nos fazer uma visita! \n Você é amado(a) por Deus, mais do que imagina!`)}
                                        className="
                                        bg-blue-600 text-white text-sm
                                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                                        hover:bg-blue-700 hover:scale-105 hover:cursor-pointer
                                        ">
                                            Entrar em contato
                                        </button>

                                        <button
                                        onClick={async () => {
                                            const res = await handleDeleteVisit(i.id);

                                            if (res?.success) {
                                                setInteresses((prev) => prev.filter((item) => item.id !== i.id));
                                            }
                                        }}
                                        className="
                                        bg-red-600 text-white text-sm
                                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                                        hover:bg-red-700 hover:scale-105 hover:cursor-pointer
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