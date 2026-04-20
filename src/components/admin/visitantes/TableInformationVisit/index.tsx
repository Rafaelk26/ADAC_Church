"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export function TableInformationVisit(){

    const [interesses, setInteresses] = useState<any[]>([])

    useEffect(()=> {
        const data = [
            {
                id: 1,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            }, 
            {
                id: 2,
                nomeCadastrado: "Robert Nadson",
                whatsappCadastrado: "(12) 90000-0000",
            }, 
            {
                id: 3,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            }, 
            {
                id: 4,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            },
            {
                id: 5,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            },
            {
                id: 6,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            },
            {
                id: 7,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            },
            {
                id: 8,
                nomeCadastrado: "John Doe",
                whatsappCadastrado: "(12) 90000-0000",
            }
        ]

        setInteresses(data)
    }, [])

    return(

        
        <>  
            <div className={`${styles.customScroll} w-full max-h-[320px] overflow-y-auto pr-2`}>
                <table className="w-full mt-5">
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
                                        {i?.nomeCadastrado}
                                    </td>

                                    <td className="py-4 px-4">
                                        {i?.whatsappCadastrado}
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