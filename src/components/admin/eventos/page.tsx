"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { CardEventos } from "@/components/admin/eventos/CardEvent";
import { fetchAllEventos } from "@/functions/GET/fetchAllEventos";
import { handleNewEvento } from "@/functions/POST/handleNewEvent";

import { Eventos } from "@/types/types";

import styles from "./styles.module.css";
import foto from "../../../../public/assets/backgroundAdmin.png";
import uploadImage from "../../../../public/assets/uploadImage.png";

export function EventosClient(){
    
    const [ eventos, setEventos ] = useState<Eventos[]>([]);
    const [isNewEventOpen, setIsNewEventOpen] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [form, setForm] = useState({
        nomeEvento: "",
        localEvento: "",
        dataEvento: "",
        horaEvento: "",
        descricaoEvento: "",
        fotoEvento: null as File | null
    });

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));

            setForm((prev) => ({
            ...prev,
            fotoEvento: file
            }));
        }
    }

    function handleRemoveImage() {
        setPreview(null);

        setForm((prev) => ({
            ...prev,
            fotoEvento: null
        }));
    }

    // Carrega e insere no state "setEventos" os ministerios do banco resgatados
    useEffect(() => {
        fetchAllEventos().then((data) => {
        setEventos(Array.isArray(data) ? data : []);
    });
    }, []);
    
    return(


        <section className="relative h-full w-full overflow-visible">
            <div className="relative z-50">
                <Header />
            </div>

            <Image
                alt="Foto de fundo"
                src={foto}
                className="absolute inset-0 w-full h-screen object-cover opacity-65 z-10 md:opacity-85"
            />

            <div className="relative z-20 flex h-full w-full items-start justify-center px-6 pt-20">
                <div className="max-w-7xl w-full flex justify-between items-center">
                    <h1 className="text-3xl md:text-4xl font-manrope font-bold text-white">
                        Eventos Ativos
                    </h1>

                    <button
                        onClick={() => setIsNewEventOpen(true)}
                        className="
                        bg-blue-600 text-white text-sm flex items-center
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-blue-700 hover:scale-105 hover:cursor-pointer
                        ">
                        <FaPlus className="mr-2" />
                        Novo Evento
                    </button>
                </div>
            </div>


            <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-20 p-7 rounded-tr-4xl rounded-tl-4xl">
                <div className="max-w-7xl w-full flex gap-4 justify-between items-center">
                    <h4 className="text-2xl font-montserrat font-normal text-white">Total de Resultados</h4>
                    <h1 className="text-5xl md:text-4xl font-montserrat font-semibold text-white">{eventos.length}</h1>
                </div>    

                {/* EVENT CARD'S */}

                <div className={`${styles.customScroll} max-w-7xl max-h-[620px] overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6`}>
                    {eventos.map((evento) => (
                        <CardEventos
                            key={evento.id}
                            {...evento}
                            setEventos={setEventos}
                        />
                    ))}
                </div> 

                {eventos.length === 0 && (
                    <>
                        <div className={`${styles.customScroll} max-w-full max-h-[200px] h-[200px] w-full grid grid-cols-1 mt-6 justify-center items-center`}>
                            <span className="text-normal text-center font-montserrat md:text-xl">Não há eventos</span>
                        </div>
                    </>
                )}         
            </div>

            <Footer />

            {/* MODAL NEW EVENT */}

            {isNewEventOpen && (
                <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                    <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                    
                        <h2 className="text-white text-xl mb-4">Novo Evento</h2>

                        <label className="cursor-pointer group relative block">
                            <Image
                                src={preview || uploadImage}
                                alt="Foto do evento"
                                className="w-full h-40 object-cover rounded mb-4"
                                width={1000}
                                height={1000}
                            />

                            {preview && (
                                <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRemoveImage();
                                }}
                                className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700 transition"
                                >
                                Remover
                                </button>
                            )}

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                <span className="text-white text-sm">Alterar imagem</span>
                            </div>

                            <input
                                name="fotoEvento"
                                type="file"
                                required
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            </label>


                        <input
                            name="nomeEvento"
                            value={form.nomeEvento}
                            onChange={(e) => setForm({ ...form, nomeEvento: e.target.value })}
                            type="text"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                            placeholder:text-white"
                            placeholder="Nome do evento"
                        />

                        <input
                            name="localEvento"
                            value={form.localEvento}
                            onChange={(e) => setForm({ ...form, localEvento: e.target.value })}
                            type="text"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white
                            placeholder:text-white"
                            placeholder="Local"
                        />

                        <div className="flex gap-2">
                            <input
                            name="dataEvento"
                            value={form.dataEvento}
                            onChange={(e) => setForm({ ...form, dataEvento: e.target.value })}
                            type="date"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark"
                            placeholder="Data"
                            />
                            <input
                            name="horaEvento"
                            value={form.horaEvento}
                            onChange={(e) => setForm({ ...form, horaEvento: e.target.value })}
                            type="time"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark"
                            placeholder="Hora"
                            />
                        </div>

                        <textarea
                            name="descricaoEvento"
                            value={form.descricaoEvento}
                            onChange={(e) => setForm({ ...form, descricaoEvento: e.target.value })}
                            required
                            className="w-full mb-4 p-2 rounded bg-[#1a1a1a] text-white
                            placeholder:text-white"
                            placeholder="Descrição"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                            onClick={() => setIsNewEventOpen(false)}
                            className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                            >
                            Cancelar
                            </button>

                            <button
                            type="submit"
                            onClick={
                                async () => {
                                    const res = await handleNewEvento(form);

                                    if(res?.data){
                                        setEventos((prev) => [res.data, ...prev]);
                                        setIsNewEventOpen(false);
                                        setForm({
                                            nomeEvento: "",
                                            localEvento: "",
                                            dataEvento: "",
                                            horaEvento: "",
                                            descricaoEvento: "",
                                            fotoEvento: null
                                        });
                                        setPreview(null);
                                    }
                                }
                            }
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                            >
                            Criar Evento
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}