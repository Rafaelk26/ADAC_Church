"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { handleUpdateEvento } from "@/functions/PUT/handleUpdateEvento";
import { handleDeleteEvento } from "@/functions/DELETE/handleDeleteEvento";
import { formatDate } from "@/functions/ALL/formatDate";
import { formatHour } from "@/functions/ALL/formatHour";
import { Eventos } from "@/types/types";

import fotoBannerEvent from "../../../../../public/assets/BANNER 3.png"

export function CardEventos({
        id,
        nomeEvento,
        localEvento,
        dataEvento,
        horaEvento,
        descricaoEvento,
        fotoEvento,
        setEventos
    }: Eventos & {
        setEventos: React.Dispatch<React.SetStateAction<Eventos[]>>;
    }){

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [previewEdit, setPreviewEdit] = useState<string | null>(null);
    const [form, setForm] = useState({
        nomeEvento,
        localEvento,
        dataEvento,
        horaEvento,
        descricaoEvento,
        fotoEvento
    });


    function handleEditImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setPreviewEdit(URL.createObjectURL(file));

            setForm((prev) => ({
                ...prev,
                fotoEvento: file,
            }));
        }
    }

    function handleRemoveEditImage() {
        setPreviewEdit(null);

        setForm((prev) => ({
            ...prev,
            fotoEvento: null,
        }));
    }

    function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.currentTarget;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function getImageSrc() {
        if (previewEdit) return previewEdit;

        if (form.fotoEvento instanceof File) {
            return URL.createObjectURL(form.fotoEvento);
        }

        if (typeof form.fotoEvento === "string") {
            return form.fotoEvento;
        }

        return fotoBannerEvent;
    }

    const handleDelete = async () => {
        if (!id) return;

        const ok = await handleDeleteEvento(id);

        if (ok) {
            setEventos((prev: Eventos[]) =>
            prev.filter((m) => m.id !== id)
            );
            setIsDeleteOpen(false);
        }
    };
    
    
    return(
        <div key={id} className="w-full rounded-lg py-8 px-6 bg-[#0a0a0a]/80">
            <h1 className="text-white font-montserrat text-2xl font-light">
                Informações do Evento
            </h1>

            <div className="w-full flex mt-4 gap-8 flex-col md:flex-row">

                {/* INFO */}
                <div className="w-full flex flex-col gap-4 md:max-w-8/12">
                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">NOME</span>
                        <h1 className="font-manrope font-semibold text-lg">{nomeEvento}</h1>
                    </div>

                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">LOCALIZAÇÃO</span>
                        <h1 className="font-manrope font-semibold text-lg">{localEvento}</h1>
                    </div>

                    <div className="w-full flex gap-4">
                        <div className="w-full">
                                <span className="text-white font-montserrat text-sm font-light">DATA</span>
                                <h1 className="font-manrope font-semibold text-lg">{formatDate(dataEvento)}</h1>
                        </div>
                        <div className="w-full">
                            <span className="text-white font-montserrat text-sm font-light">HORA</span>
                            <h1 className="font-manrope font-semibold text-lg">{formatHour(horaEvento)}</h1>
                        </div>
                    </div>

                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">DESCRIÇÃO</span>
                        <p className="font-manrope font-light text-lg">{descricaoEvento}</p>
                    </div>
                </div>

                {/* CAPA/BUTTON */}
                <div className="w-full flex flex-col justify-between gap-7 md:max-w-4/12">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-montserrat text-sm font-light">CAPA</span>
                        
                        <Image 
                        width={1000}
                        height={1000}
                        className="w-full rounded-xl h-40 md:h-32"
                        alt={`${nomeEvento}`}
                        src={getImageSrc()}
                        />
                    </div>

                    <div className="flex flex-row justify-center items-end gap-4 md:flex-col">
                        <button
                        onClick={() => setIsEditOpen(true)}
                        className="
                        bg-yellow-600 text-white text-sm flex items-center justify-center w-32
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-yellow-700 hover:scale-105 hover:cursor-pointer
                        ">
                            <MdOutlineModeEdit className="mr-2" />
                            Editar
                        </button>


                        <button
                        onClick={() => setIsDeleteOpen(true)}
                        className="
                        bg-red-600 text-white text-sm flex items-center justify-center w-32
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-red-700 hover:scale-105 hover:cursor-pointer
                        ">
                            <IoMdTrash className="mr-2" />
                            Deletar
                        </button>
                    </div>


                    {/* MODAL EDIT */}

                    {isEditOpen && (
                        <div className="fixed inset-0 bg-black/70 z-50 h-screen flex items-center justify-center">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                                <h2 className="text-white text-xl mb-4">Editar Evento</h2>

                                <form
                                onSubmit={async (e) => {
                                    e.preventDefault();

                                    if (!id) return;

                                    const res = await handleUpdateEvento(id, form);

                                    if (res?.data) {
                                        setEventos((prev: Eventos[]) =>
                                            prev.map((e) => (e.id === id ? res.data : e))
                                        );
                                    }
                                    setIsEditOpen(false);
                                }}
                                    >
                                    <label htmlFor={`file-${id}`} className="cursor-pointer group relative block">

                                    <Image
                                        src={getImageSrc()}
                                        alt="Foto do evento"
                                        className="w-full h-40 object-cover rounded mb-4"
                                        width={1000}
                                        height={1000}
                                    />

                                    {/* BOTÃO DE REMOVER */}
                                    {(previewEdit || fotoEvento) && (
                                        <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleRemoveEditImage();
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
                                        id={`file-${id}`}
                                        type="file"
                                        className="hidden"
                                        onChange={handleEditImageChange}
                                    />
                                    </label>

                                    <input
                                        name="nomeEvento"
                                        className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                        placeholder="Nome do evento"
                                        value={form.nomeEvento}
                                        onChange={handleInputChange}
                                    />

                                    <input
                                        name="localEvento"
                                        className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                        placeholder="Local"
                                        value={form.localEvento}
                                        onChange={handleInputChange}
                                    />

                                    <div className="flex gap-2">
                                        <input
                                        type="date"
                                        name="dataEvento"
                                        className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark"
                                        value={form.dataEvento}
                                        onChange={handleInputChange}
                                        />
                                        <input
                                        type="time"
                                        name="horaEvento"
                                        className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark"
                                        value={form.horaEvento}
                                        onChange={handleInputChange}
                                        />
                                    </div>

                                    <textarea
                                        name="descricaoEvento"
                                        className="w-full mb-4 p-2 rounded bg-[#1a1a1a] text-white"
                                        value={form.descricaoEvento}
                                        onChange={handleInputChange}
                                    />

                                    <div className="flex justify-end gap-3">
                                        <button
                                        onClick={() => setIsEditOpen(false)}
                                        className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                                        >
                                        Cancelar
                                        </button>

                                        <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                                        >
                                        Salvar
                                        </button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    )}


                    {/* MODAL DELETE */}
                    {isDeleteOpen && (
                        <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm text-center
                            md:max-w-lg">

                            <h2 className="text-white text-xl mb-4">
                                Tem certeza que deseja excluir esse evento?
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Essa ação não poderá ser desfeita.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                onClick={() => setIsDeleteOpen(false)}
                                className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                                >
                                Cancelar
                                </button>

                                <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 hover:cursor-pointer hover:scale-105 transition-all"
                                >
                                Confirmar
                                </button>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}



        