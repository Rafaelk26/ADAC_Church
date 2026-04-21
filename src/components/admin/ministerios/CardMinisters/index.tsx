"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

import fotoBannerEvent from "../../../../../public/assets/BANNER 3.png"

export function CardMinisters({id, nomeMinisterio, liderMinisterio, descricaoMinisterio, fotoMinisterio}: 
    { 
        id: string,
        nomeMinisterio: string,
        liderMinisterio: string,
        descricaoMinisterio?: string,
        fotoMinisterio?: StaticImageData
    }){

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [previewEdit, setPreviewEdit] = useState<string | null>(null);

    function handleEditImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewEdit(url);
        }
    }

    function handleRemoveEditImage() {
        setPreviewEdit(null);
    }
    
    
    return(
        <div key={id} className="w-full rounded-lg py-8 px-6 bg-[#0a0a0a]/80">
            <h1 className="text-white font-montserrat text-2xl font-light">
                Informações do Ministério
            </h1>

            <div className="w-full flex mt-4 gap-8">

                {/* INFO */}
                <div className="w-full max-w-8/12 flex flex-col gap-4">
                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">NOME</span>
                        <h1 className="font-manrope font-semibold text-lg">{nomeMinisterio}</h1>
                    </div>

                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">LÍDER</span>
                        <h1 className="font-manrope font-semibold text-lg">{liderMinisterio}</h1>
                    </div>

                    <div className="w-full">
                        <span className="text-white font-montserrat text-sm font-light">DESCRIÇÃO</span>
                        <p className="font-manrope font-light text-lg">{descricaoMinisterio}</p>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                        onClick={() => setIsEditOpen(true)}
                        className="
                        bg-yellow-600 text-white text-sm flex items-center justify-center w-30
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-yellow-700 hover:scale-105 hover:cursor-pointer
                        ">
                            <MdOutlineModeEdit className="mr-2" />
                            Editar
                        </button>


                        <button
                        onClick={() => setIsDeleteOpen(true)}
                        className="
                        bg-red-600 text-white text-sm flex items-center justify-center w-30
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-red-700 hover:scale-105 hover:cursor-pointer
                        ">
                            <IoMdTrash className="mr-2" />
                            Deletar
                        </button>
                    </div>
                </div>

                {/* CAPA/BUTTON */}
                <div className="w-full max-w-4/12 flex flex-col justify-between gap-7">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-montserrat text-sm font-light">CAPA</span>
                        
                        <Image 
                        className="rounded-xl h-56 w-full object-cover"
                        alt={`${nomeMinisterio}`}
                        src={fotoMinisterio || fotoBannerEvent}
                        />
                    </div>


                    {/* MODAL EDIT */}

                    {isEditOpen && (
                        <div className="fixed inset-0 bg-black/70 z-50 h-screen flex items-center justify-center">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                                <h2 className="text-white text-xl mb-4">Editar Ministério</h2>

                                <label className="cursor-pointer group relative block">

                                <Image
                                    src={previewEdit || fotoMinisterio || fotoBannerEvent}
                                    alt="Foto do ministério"
                                    className="w-full h-40 object-cover rounded mb-4"
                                    width={1000}
                                    height={1000}
                                />

                                {/* BOTÃO DE REMOVER */}
                                {(previewEdit || fotoMinisterio) && (
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
                                    type="file"
                                    className="hidden"
                                    onChange={handleEditImageChange}
                                />
                                </label>

                                <input
                                    className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                    placeholder="Nome do ministerio"
                                    defaultValue={nomeMinisterio}
                                />


                                <input
                                    className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                    placeholder="Líder do ministerio"
                                    defaultValue={liderMinisterio}
                                />


                                <textarea
                                    className="w-full mb-4 p-2 rounded bg-[#1a1a1a] text-white"
                                    defaultValue={descricaoMinisterio}
                                />

                                <div className="flex justify-end gap-3">
                                    <button
                                    onClick={() => setIsEditOpen(false)}
                                    className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                                    >
                                    Cancelar
                                    </button>

                                    <button
                                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                                    >
                                    Salvar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* MODAL DELETE */}
                    {isDeleteOpen && (
                        <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                            <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm text-center
                            md:max-w-lg">

                            <h2 className="text-white text-xl mb-4">
                                Tem certeza que deseja excluir esse ministério?
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



        