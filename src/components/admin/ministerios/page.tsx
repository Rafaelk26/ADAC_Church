"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { CardMinisters } from "@/components/admin/ministerios/CardMinisters";
import { fetchAllMinisters } from "@/functions/GET/fetchAllMinisters";
import { handleNewMinisterio } from "@/functions/POST/handleNewMinisterio";
import { Ministerio, MinisterioForm } from "@/types/types";

import styles from "./styles.module.css";
import foto from "../../../../public/assets/backgroundAdmin.png";
import uploadImage from "../../../../public/assets/uploadImage.png";

export function MinisteriosClient() {
  const [isNewEventOpen, setIsNewEventOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setForm] = useState<MinisterioForm>({
    nomeMinisterio: "",
    liderMinisterio: "",
    descricaoMinisterio: "",
    statusMinisterio: false,
    fotoMinisterio: "",
  });

  const [ ministerios, setMinisterios ] = useState<Ministerio[]>([]);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));

            setForm((prev) => ({
                ...prev,
                fotoMinisterio: file,
            }));
        }
    }
    
    function handleRemoveImage() {
    setPreview(null);

    setForm((prev) => ({
        ...prev,
        fotoMinisterio: null
    }));
    }

    // Carrega e insere no state "setMinisterios" os ministerios do banco resgatados
    useEffect(() => {
        fetchAllMinisters().then((data) => {
        setMinisterios(Array.isArray(data) ? data : []);
    });
    }, []);

    return (
        <section className="relative h-full w-full overflow-visible flex flex-col flex-1">
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
                        Ministérios Ativos
                    </h1>

                    <button
                        onClick={() => setIsNewEventOpen(true)}
                        className="
                        bg-blue-600 text-white text-sm flex items-center
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-blue-700 hover:scale-105 hover:cursor-pointer
                        ">
                        <FaPlus className="mr-2" />
                        Novo Ministério
                    </button>
                </div>
            </div>


            <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-20 p-7 rounded-tr-4xl rounded-tl-4xl">
                <div className="max-w-7xl w-full flex gap-4 justify-between items-center">
                    <h4 className="text-2xl font-montserrat font-normal text-white">Total de Resultados</h4>
                    <h1 className="text-5xl md:text-4xl font-montserrat font-semibold text-white">{ministerios.length}</h1>
                </div>    

                {/* EVENT CARD'S */}
                <div className={`${styles.customScroll} max-w-7xl max-h-[620px] overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6`}>
                    {ministerios.map((ministerio) => (
                        <CardMinisters
                            key={ministerio.id}
                            {...ministerio}
                            setMinisterios={setMinisterios}
                        />
                    ))}
                </div> 

                {ministerios.length === 0 && (
                    <>
                        <div className={`${styles.customScroll} max-w-full max-h-[200px] h-[200px] w-full grid grid-cols-1 mt-6 justify-center items-center`}>
                            <span className="text-normal text-center font-montserrat md:text-xl">Não há ministério</span>
                        </div>
                    </>
                )}           
            </div>

            <Footer />

            {/* MODAL NEW MINISTER */}

            {isNewEventOpen && (
                <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                    <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                    
                        <h2 className="text-white text-xl mb-4">Novo Ministério</h2>

                        <label className="cursor-pointer group relative block">
                            <Image
                                src={preview || uploadImage}
                                alt="Foto do ministério"
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
                                name="fotoMinisterio"
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            </label>


                        <input
                            name="nomeMinisterio"
                            value={form.nomeMinisterio}
                            onChange={(e) => setForm({ ...form, nomeMinisterio: e.target.value })}
                            type="text"
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                            placeholder:text-white"
                            placeholder="Nome do ministério"
                        />

                        <input
                            name="liderMinisterio"
                            value={form.liderMinisterio}
                            onChange={(e) => setForm({ ...form, liderMinisterio: e.target.value })}
                            type="text"
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white
                            placeholder:text-white"
                            placeholder="Líder do ministério"
                        />


                        <textarea
                            name="descricaoMinisterio"
                            value={form.descricaoMinisterio}
                            onChange={(e) => setForm({ ...form, descricaoMinisterio: e.target.value })}
                            className="w-full mb-4 p-2 rounded bg-[#1a1a1a] text-white
                            placeholder:text-white"
                            placeholder="Descrição do ministério"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                            onClick={() => setIsNewEventOpen(false)}
                            className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                            >
                            Cancelar
                            </button>

                            <button
                            onClick={
                                async () => {
                                const res = await handleNewMinisterio(form);

                                if (res?.data) {
                                setMinisterios((prev) => [res.data, ...prev]);
                                setIsNewEventOpen(false);
                                setForm({
                                    nomeMinisterio: "",
                                    liderMinisterio: "",
                                    descricaoMinisterio: "",
                                    statusMinisterio: false,
                                    fotoMinisterio: null
                                });
                                setPreview(null);
                                }
                            }}
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                            >
                            Criar Ministério
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}