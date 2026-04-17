"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import banner from "../../../../../public/assets/BANNER 3.png"

export function TableInformation(){

    const [interesses, setInteresses] = useState<any[]>([])

    useEffect(()=> {
        const data = [
            {
                id: 1,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
                ministerioNome: "Mídia - Mix House",
                ministerioFoto: banner,
            }, 
            {
                id: 2,
                nomeCadastrado: "Robert Nadson",
                whatsappCadastrado: "(12) 90000-0000",
                ministerioNome: "Rede Kids e Teens",
                ministerioFoto: banner,
            }, 
            {
                id: 3,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
                ministerioNome: "Rede Kids e Teens",
                ministerioFoto: banner,
            }, 
            {
                id: 4,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
                ministerioNome: "Mídia - Mix House",
                ministerioFoto: banner,
            }
        ]

        setInteresses(data)
    }, [])

    return(

        
        <>  
            <div className={`${styles.customScroll} max-h-[320px] overflow-y-auto pr-2 custom-scroll`}>
                <table className="w-full mt-5">
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
                                        {i?.nomeCadastrado}
                                    </td>

                                    <td className="py-4 px-4">
                                        {i?.whatsappCadastrado}
                                    </td>

                                    <td className="py-4 px-4">
                                        <div className="flex gap-3 items-center">
                                        <Image
                                            alt="Foto do Ministério"
                                            src={i?.ministerioFoto}
                                            className="w-10 h-10 rounded-full object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span>{i?.ministerioNome}</span>
                                        </div>
                                    </td>

                                    <td className="py-4 px-4">
                                        <button
                                        className="
                                        bg-blue-600 text-white text-sm
                                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                                        hover:bg-blue-700 hover:scale-105
                                        ">
                                        Entrar em contato
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