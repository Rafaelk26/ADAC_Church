"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { formatNumberForWhatsApp } from "@/functions/ALL/formatNumberForWhatsapp";
import { handleNewWorker } from "@/functions/POST/handleNewWorker";
import { Ministerio } from "@/types/types";

import styles from './styles.module.css'
import foto from "../../../../public/assets/BANNER 1.png";

export function MinistersCard({
    id,
    fotoMinisterio,
    nomeMinisterio,
    statusMinisterio,
    liderMinisterio,
    link
    }: {
    id: string | undefined;
    fotoMinisterio?: string | File | StaticImageData | null;
    nomeMinisterio: string;
    statusMinisterio: boolean;
    liderMinisterio: string;
    link: string;
    }) {

    const [isNewWorkOpen, setIsNewWorkOpen] = useState(false);
    const [ form, setForm ] = useState({
        nomeTrabalhador: "",
        whatsappTrabalhador: "",
        ministerioTrabalhador: "",
    })

    function getImageSrc(src: any) {
        if (!src) return foto;
        if (typeof src === "string") return src;
        return src;
    }

    return (
        <>
            <div className="w-full border-2 border-gray-500/80 rounded-xl h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090909] to-65% z-1" />

                <Image
                    className="w-full h-full object-cover"
                    alt={"Nome do ministério"}
                    src={getImageSrc(fotoMinisterio)}
                    width={500}
                    height={500}
                />
        
                <div className="absolute flex top-3/5 px-4 w-full -mt-12 z-50">
                    <div className="relative flex justify-center items-center max-w-1/6 w-full">
                        <Image
                            className="w-12 h-12 object-cover rounded-full"
                            alt={"Nome do ministério"}
                            src={getImageSrc(fotoMinisterio)}
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="relative max-w-5/6 w-full flex flex-col gap-0.5">
                        <h1 className="text-white font-manrope font-semibold text-3xl z-2">
                            {nomeMinisterio}
                        </h1>
                
                        {/* Status do ministério */}
                        <div className="w-full flex gap-2 items-center">
                            
                            {statusMinisterio === true ? (
                                <>
                                    <div className="flex items-center gap-1">
                                        <FaCircleCheck className="text-green-500" />
                                        <span className="font-manrope text-white text-sm">Disponível para novos membros</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-1">
                                        <FaCircleXmark className="text-red-500" />
                                        <span className="font-manrope text-white text-sm">Não disponível para novos membros</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Nome do líder do ministério */}
                        <div className="w-full">
                            <div className="w-full">
                                <h1 className="w-full text-white font-manrope font-light text-md">
                                    {liderMinisterio}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Botões */}

                <div className="absolute flex gap-2 top-3/5 mt-11 px-4 w-full z-50">
                    <a href={link} className="
                        w-max bg-gray-600 text-white text-sm 
                        font-medium font-manrope py-2 px-2 rounded-md transition-all
                        hover:bg-gray-700 hover:scale-105 hover:cursor-pointer">
                        Ver ministério
                    </a>

                    {statusMinisterio && (
                        <>
                            <button 
                            onClick={() => {
                                setIsNewWorkOpen(true);

                                setForm((prev) => ({
                                    ...prev,
                                    ministerioTrabalhador: nomeMinisterio,
                                }));
                            }}
                            className="
                            w-max bg-green-600 text-white text-sm 
                            font-medium font-manrope py-2 px-2 rounded-md transition-all
                            hover:bg-green-700 hover:scale-105 hover:cursor-pointer">
                                Entrar na equipe
                            </button>
                        </>
                    )}
                </div>

                {/* MODAL NEW WORKER */}
        
                {isNewWorkOpen && (
                    <div className="w-full h-svh fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                        <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                        
                            <h2 className="text-white text-xl font-manrope">Cadastre-se</h2>
                            <span className="text-gray-400 text-sm mb-4 font-montserrat">Insira seus dados para servir no ministério!</span>

                            <p className="text-white mb-2">
                                Ministério selecionado: <strong>{form.ministerioTrabalhador}</strong>
                            </p>
                            <input
                                name="nomeTrabalhador"
                                value={form.nomeTrabalhador}
                                onChange={(e) => setForm({ ...form, nomeTrabalhador: e.target.value })}
                                type="text"
                                required
                                className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                                placeholder:text-white"
                                placeholder="Seu Nome"
                            />

                            <input
                                name="whatsappTrabalhador"
                                value={form.whatsappTrabalhador}
                                onChange={(e) => setForm({ ...form, whatsappTrabalhador: formatNumberForWhatsApp(e.target.value) })}
                                type="text"
                                required
                                className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white
                                placeholder:text-white"
                                placeholder="Seu WhatsApp"
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                onClick={() => setIsNewWorkOpen(false)}
                                className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                                >
                                Cancelar
                                </button>

                                <button
                                type="submit"
                                onClick={
                                    async () => {
                                        console.log(form)
                                        const res = await handleNewWorker(form);

                                        if(res?.data){
                                            setIsNewWorkOpen(false);
                                            setForm({
                                                nomeTrabalhador: "",
                                                whatsappTrabalhador: "",
                                                ministerioTrabalhador: ""
                                            });
                                        }
                                    }
                                }
                                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                                >
                                Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}