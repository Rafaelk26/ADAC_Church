"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import styles from "./styles.module.css";
import banner from "../../../../../public/assets/BANNER 3.png"
import { Select } from "@/components/all/Select";

export function TableInformationCell({ celulas }: { celulas: any[] }) {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [previewEdit, setPreviewEdit] = useState<string | null>(null);
    const [selectedCell, setSelectedCell] = useState<any>(null);


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

        
        <>  
            <div className={`${styles.customScroll} max-w-sm w-full max-h-[420px] overflow-y-auto overflow-x-auto pr-2
            md:max-w-full`}>
                <table className="w-7xl mt-5 md:w-full">
                    <thead>
                        <tr className="bg-[#090909] text-left">
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tl-2xl">
                            NOME
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            LÍDER
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            BAIRRO
                        </th>

                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            DIA
                        </th>

                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            HORA
                        </th>

                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            GÊNERO
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300">
                            FAIXA
                        </th>
                        <th className="py-4 px-4 text-base font-light font-montserrat text-gray-300 rounded-tr-xl">
                            AÇÃO
                        </th>
                        </tr>
                    </thead>

                    <tbody  className={`${styles.customScroll}`}>
                        {celulas.length === 0 ? ( 
                        <>
                            <tr className="bg-[#1a1a1a]">
                                <td colSpan={8} className="text-center py-16 font-manrope text-gray-400">
                                Não foi encontrado nenhuma célula
                                </td>
                            </tr>
                        </>
                        ) : (
                        <>
                            {celulas.map((c)=> (
                                <tr key={c.id} className="odd:bg-[#1a1a1a]/60 even:bg-[#121212]/60">
                                    <td className="py-4 px-4">
                                        {c?.nomeCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.liderCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.bairroCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.diaCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.horaCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.generoCelula}
                                    </td>

                                    <td className="py-4 px-4">
                                        {c?.faixaCelula}
                                    </td>


                                    <td className="py-4 px-4">
                                        <div className="flex justify-end mt-4">
                                            <button
                                            onClick={() => {
                                            setSelectedCell(c);
                                            setIsEditOpen(true);
                                            setPreviewEdit(null);
                                            }}
                                            className="
                                            bg-yellow-600 text-white text-sm flex items-center justify-center
                                            font-medium font-manrope py-2 px-3 rounded-md whitespace-nowrap mr-2
                                            hover:bg-yellow-700 hover:scale-105 transition-all hover:cursor-pointer">
                                                <MdOutlineModeEdit className="mr-2" />
                                                Editar
                                            </button>
                    
                    
                                            <button
                                            onClick={() => setIsDeleteOpen(true)}
                                            className="
                                            bg-red-600 text-white text-sm flex items-center justify-center
                                            font-medium font-manrope px-3 py-2 rounded-md whitespace-nowrap
                                            hover:bg-red-700 hover:scale-105 transition-all hover:cursor-pointer">
                                                <IoMdTrash className="mr-2" />
                                                Deletar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </>
                    )}
                    </tbody>
                </table>

                {/* MODAL EDIT */}
                {isEditOpen && (
                    <div className="fixed inset-0 bg-black/70 z-50 h-screen flex items-center justify-center">
                        <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                            <h2 className="text-white text-xl mb-4">Editar Célula</h2>

                            <label className="cursor-pointer group relative block">

                            <Image
                                src={previewEdit || selectedCell?.fotoCelula || banner}
                                alt="Foto da célula"
                                className="w-full h-40 object-cover rounded mb-4"
                                width={1000}
                                height={1000}
                            />

                            {/* BOTÃO DE REMOVER */}
                            {(previewEdit || selectedCell?.fotoCelula) && (
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


                            <div className="flex gap-2">
                                <input
                                    className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                    placeholder="Nome da célula"
                                    defaultValue={selectedCell?.nomeCelula}
                                />


                                <input
                                    className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white"
                                    placeholder="Líder da célula"
                                    defaultValue={selectedCell?.liderCelula}
                                />
                            </div>

                            

                            <div className="flex gap-2">
                                <Select defaultValue={selectedCell?.diaCelula}>
                                    <option value="">Selecione o dia</option>
                                    <option value="Segunda-feira">Segunda-feira</option>
                                    <option value="Terça-feira">Terça-feira</option>
                                    <option value="Quinta-feira">Quinta-feira</option>
                                    <option value="Sexta-feira">Sexta-feira</option>
                                    <option value="Sábado">Sábado</option>
                                </Select>

                                <Select defaultValue={selectedCell?.bairroCelula}>
                                    <option value="">Selecione o bairro</option>
                                    <option value="Barranco Alto">Barranco Alto</option>
                                    <option value="Benfica">Benfica</option>
                                    <option value="Cantagalo">Cantagalo</option>
                                    <option value="Capricórnio I">Capricórnio I</option>
                                    <option value="Capricórnio II">Capricórnio II</option>
                                    <option value="Capricórnio III">Capricórnio III</option>
                                    <option value="Caputera">Caputera</option>
                                    <option value="Centro">Centro</option>
                                    <option value="Cidade Jardim">Cidade Jardim</option>
                                    <option value="Estrela D' Alva">Estrela D' Alva</option>
                                    <option value="Getuba">Getuba</option>
                                    <option value="Golfinho">Golfinho</option>
                                    <option value="Indaiá">Indaiá</option>
                                    <option value="Ipiranga">Ipiranga</option>
                                    <option value="Jaraguá">Jaraguá</option>
                                    <option value="Jaraguazinho">Jaraguazinho</option>
                                    <option value="Jardim Aruan">Jardim Aruan</option>
                                    <option value="Jardim Britânia">Jardim Britânia</option>
                                    <option value="Jardim Califórnia">Jardim Califórnia</option>
                                    <option value="Jardim Casa Branca">Jardim Casa Branca</option>
                                    <option value="Jardim Flecheiras">Jardim Flecheiras</option>
                                    <option value="Jardim Gaivotas">Jardim Gaivotas</option>
                                    <option value="Jardim Jaqueira">Jardim Jaqueira</option>
                                    <option value="Jardim Mariella">Jardim Mariella</option>
                                    <option value="Jardim Olaria">Jardim Olaria</option>
                                    <option value="Jardim Primavera">Jardim Primavera</option>
                                    <option value="Jardim Rio Claro">Jardim Rio Claro</option>
                                    <option value="Jardim Rio Santos">Jardim Rio Santos</option>
                                    <option value="Jardim Tarumãs">Jardim Tarumãs</option>
                                    <option value="Jardim Terralão">Jardim Terralão</option>
                                    <option value="Martim de Sá">Martim de Sá</option>
                                    <option value="Massaguaçu">Massaguaçu</option>
                                    <option value="Morro do Algodão">Morro do Algodão</option>
                                    <option value="Nova Caraguá I">Nova Caraguá I</option>
                                    <option value="Nova Caraguá II">Nova Caraguá II</option>
                                    <option value="Pegorelli">Pegorelli</option>
                                    <option value="Perequê Mirim">Perequê Mirim</option>
                                    <option value="Poiares">Poiares</option>
                                    <option value="Pontal Santa Marina">Pontal Santa Marina</option>
                                    <option value="Porto Novo">Porto Novo</option>
                                    <option value="Praia da Cocanha">Praia da Cocanha</option>
                                    <option value="Praia da Mococa">Praia da Mococa</option>
                                    <option value="Praia das Palmeiras">Praia das Palmeiras</option>
                                    <option value="Prainha">Prainha</option>
                                    <option value="Rio do Ouro">Rio do Ouro</option>
                                    <option value="Sumaré">Sumaré</option>
                                    <option value="Tabatinga">Tabatinga</option>
                                    <option value="Tinga">Tinga</option>
                                    <option value="Travessão">Travessão</option>
                                    <option value="Vila Ponte Seca">Vila Ponte Seca</option>
                                </Select>
                            </div>


                            <div className="flex gap-2 mt-4">
                                <Select defaultValue={selectedCell?.generoCelula}>
                                    <option value="">Gênero da célula</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminina">Feminina</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Adolescente">Adolescente</option>
                                    <option value="Casal">Casal</option>
                                    <option value="Mista">Mista</option>
                                    <option value="Par">Par</option>
                                </Select>

                                <Select defaultValue={selectedCell?.faixaCelula}>
                                    <option value="">Faixa etária da célula</option>
                                    <option value="05-10">05-10 Anos</option>
                                    <option value="11-17">11-17 Anos</option>
                                    <option value="18-40">18-40 Anos</option>
                                    <option value="+40">+40 Anos</option>
                                </Select>
                            </div>

                            <input
                                defaultValue={selectedCell?.horaCelula}
                                type="time"
                                required
                                className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark mt-4"
                                placeholder="Hora"
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
                                Salvar Célula
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
                            Tem certeza que deseja excluir essa célula?
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
        </>
    )
}