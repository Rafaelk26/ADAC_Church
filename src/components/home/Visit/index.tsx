"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/home/ButtonLink";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import { handleNewVisit } from "@/functions/POST/handleNewVisit";
import { formatNumberForWhatsApp } from "@/functions/ALL/formatNumberForWhatsapp";

export function Visit({ link }: { link: string }) {

    const [isNewVisitOpen, setIsNewVisitOpen] = useState(false);
    const [ form, setForm ] = useState({
        nomeVisitante: "",
        whatsappVisitante: ""
    })

    return (
        <>
           <section className="max-w-5xl w-full mx-auto mt-16">
                 {/* Google Maps */}
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                    {/* Maps */}
                    <iframe
                    src={link}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    className="border-0"
                    />
                </div>

                <div className="w-full flex justify-between items-center mt-2">
                    {/* Logo */}
                    <Image src={ADACLogo} className="w-40" alt="ADAC Church" width={200} height={200} />
                    <span className="font-semibold font-manrope">R. Eng. João Fonseca, 170 - Centro, Caraguatatuba - SP, 11660-200</span>
                </div>

                <div className="w-full mt-10 flex justify-center">
                    <ButtonLink
                    onClick={()=> setIsNewVisitOpen(true)}
                    nome="Confirmar visita"
                    />
                </div>
           </section>



           {/* MODAL NEW VISIT */}

            {isNewVisitOpen && (
                <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                    <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                    
                        <h2 className="text-white text-xl font-manrope">Agendar visita</h2>
                        <span className="text-gray-400 text-sm mb-4 font-montserrat">Insira seus dados para marcar uma visita em nossa igreja!</span>

                        <input
                            name="nomeVisitante"
                            value={form.nomeVisitante}
                            onChange={(e) => setForm({ ...form, nomeVisitante: e.target.value })}
                            type="text"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                            placeholder:text-white"
                            placeholder="Seu Nome"
                        />

                        <input
                            name="whatsappVisitante"
                            value={form.whatsappVisitante}
                            onChange={(e) => setForm({ ...form, whatsappVisitante: formatNumberForWhatsApp(e.target.value) })}
                            type="text"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white
                            placeholder:text-white"
                            placeholder="Seu WhatsApp"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                            onClick={() => setIsNewVisitOpen(false)}
                            className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                            >
                            Cancelar
                            </button>

                            <button
                            type="submit"
                            onClick={
                                async () => {
                                    console.log(form)
                                    const res = await handleNewVisit(form);

                                    if(res?.data){
                                        setIsNewVisitOpen(false);
                                        setForm({
                                            nomeVisitante: "",
                                            whatsappVisitante: "",
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
        </>
    )
}