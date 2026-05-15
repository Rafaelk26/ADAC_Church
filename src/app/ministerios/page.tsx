"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/all/Header";
import { Wrapper } from "@/components/all/Wrapper";
import { MinistersCard } from "@/components/ministerios/MinistersCard";
import { Main } from "@/components/ministerios/Main";
import { Footer } from "@/components/all/Footer";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";
import { fetchAllTrabalhadores } from "@/functions/GET/fetchAllTrabalhadores";
import { handleNewWorker } from "@/functions/POST/handleNewWorker";
import { formatNumberForWhatsApp } from "@/functions/ALL/formatNumberForWhatsapp";
import { Ministerio, Trabalhador } from "@/types/types";

import styles from './styles.module.css'
import foto from "../../../public/assets/BANNER 2.png";

export default function Ministerios() {

    const [selectedMinisterio, setSelectedMinisterio] = useState<Ministerio | null>(null);
    const [ ministerios, setMinisterios ] = useState<Ministerio[]>([]);
    const [ ministersWork, setMinistersWork ] = useState<Trabalhador[]>([]);
    const [ form, setForm ] = useState({
        nomeTrabalhador: "",
        whatsappTrabalhador: "",
        ministerioTrabalhador: "",
    })
    

    // Carrega e insere no state "setMinisterios" os ministerios do banco resgatados
    useEffect(() => {
        fetchAllTrabalhadores().then((data) => {
        setMinistersWork(Array.isArray(data) ? data : []);
      })

        fetchAllMinisters().then((data) => {
        setMinisterios(Array.isArray(data) ? data : []);
      })
    }, []);


  return (
    <>
      <section className="relative h-full w-full overflow-visible">
        <Header />

        <Image 
        alt="Foto de fundo"
        src={foto}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65
        md:opacity-85"
        />

        <div className="absolute inset-0 bg-[#050505]/40 z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#050505] z-[2]" />

        <Main />
      </section>

      <Wrapper>
        <section className="w-full">

            {/* GRID */}
            <main
            className="w-11/12 grid grid-cols-1 mt-16 mb-20 md:mt-32 gap-8 mx-auto
            md:grid-cols-3 md:gap-10 md:w-full md:mx-0"
            >
                {ministerios.map((minister) => (
                    <div className={`${styles.animateFadeUp}`} key={minister.id}>
                        <MinistersCard
                          {...minister}
                          onOpenModal={() => {
                            setSelectedMinisterio(minister);
                            setForm((prev) => ({
                              ...prev,
                              ministerioTrabalhador: minister.nomeMinisterio,
                            }));
                          }}
                        />
                    </div>
                ))}
            </main>
        </section>

        {selectedMinisterio && (
          <div className="w-full h-svh fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
              <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
              
                  <h2 className="text-white text-xl font-manrope">Cadastre-se</h2>
                  <span className="text-gray-400 text-sm mb-4 font-montserrat">Insira seus dados para servir no ministério!</span>

                  <p className="text-white mb-2">
                      Ministério selecionado: <strong>{selectedMinisterio?.nomeMinisterio}</strong>
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
                      onClick={() => setSelectedMinisterio(null)}
                      className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                      >
                      Cancelar
                      </button>

                      <button
                      type="submit"
                      onClick={
                          async () => {
                              const res = await handleNewWorker({
                                ...form,
                                ministerioTrabalhador: selectedMinisterio?.id
                              });

                              if(res?.data){
                                  setSelectedMinisterio(null);
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

        <Footer />
      </Wrapper>
    </>
  );
}