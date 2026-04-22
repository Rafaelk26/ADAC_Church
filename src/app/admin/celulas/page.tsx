"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { Input } from "@/components/all/Input";
import { Select } from "@/components/all/Select";
import { TableInformationCell } from "@/components/admin/celulas/TableInformationCell";

import styles from "./styles.module.css";

import foto from "../../../../public/assets/backgroundAdmin.png";
import fotoBannerEventData from "../../../../public/assets/BANNER 2.png";
import uploadImage from "../../../../public/assets/uploadImage.png";

export default function Celulas(){
    
    const [isNewEventOpen, setIsNewEventOpen] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [bairro, setBairro] = useState("");
    const [genero, setGenero] = useState("");

    const celulas = [
        {
            id: "1",
            nomeCelula: "Célula X",
            liderCelula: "Líder X",
            bairroCelula: "Barranco Alto",
            diaCelula: "Segunda-feira",
            horaCelula: "19:00",
            generoCelula: "Feminina",
            faixaCelula: "05-10",
            fotoCelula: fotoBannerEventData,
        },
        {
            id: "2",
            nomeCelula: "Célula Y",
            liderCelula: "Líder Y",
            bairroCelula: "Benfica",
            diaCelula: "Quinta-feira",
            horaCelula: "20:00",
            generoCelula: "Masculino",
            faixaCelula: "11-17",
            fotoCelula: fotoBannerEventData,
        },
        {
            id: "3",
            nomeCelula: "Célula Z",
            liderCelula: "Líder Z",
            bairroCelula: "Morro do Algodão",
            diaCelula: "Sexta-feira",
            horaCelula: "18:30",
            generoCelula: "Feminina",
            faixaCelula: "18-40",
            fotoCelula: fotoBannerEventData,
        },
        {
            id: "4",
            nomeCelula: "Célula A",
            liderCelula: "Líder A",
            bairroCelula: "Rio do Ouro",
            diaCelula: "Terça-feira",
            horaCelula: "19:30",
            generoCelula: "Kids",
            faixaCelula: "05-10",
            fotoCelula: fotoBannerEventData,
        },
        {
            id: "5",
            nomeCelula: "Célula B",
            liderCelula: "Líder B",
            bairroCelula: "Centro",
            diaCelula: "Sábado",
            horaCelula: "10:00",
            generoCelula: "Feminina",
            faixaCelula: "18-40",
            fotoCelula: fotoBannerEventData,
        }
    ];

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    }

    function handleRemoveImage() {
        setPreview(null);
    }

    const celulasFiltradas = celulas.filter((c) => {
        const matchNome = c.nomeCelula.toLowerCase().includes(search.toLowerCase());
        const matchBairro = bairro ? c.bairroCelula === bairro : true;
        const matchGenero = genero ? c.generoCelula === genero : true;

        return matchNome && matchBairro && matchGenero;
    });
    
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
                        Células Ativas
                    </h1>

                    <button
                        onClick={() => setIsNewEventOpen(true)}
                        className="
                        bg-blue-600 text-white text-sm flex items-center
                        font-medium font-manrope py-2 px-4 rounded-md transition-all
                        hover:bg-blue-700 hover:scale-105 hover:cursor-pointer
                        ">
                        <FaPlus className="mr-2" />
                        Nova Célula
                    </button>
                </div>
            </div>


            <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-20 p-7 rounded-tr-4xl rounded-tl-4xl">
                <div className="max-w-7xl w-full flex gap-4 justify-between items-center">
                    <h4 className="text-2xl font-montserrat font-normal text-white">Total de Resultados</h4>
                    <h1 className="text-5xl md:text-4xl font-montserrat font-semibold text-white">{celulasFiltradas.length}</h1>
                </div>  

                {/* FILTERS */}
                <div className="max-w-full w-full flex-col flex justify-between mx-auto gap-2 mt-3
                md:flex-row md:mx-0 md:gap-0">
                <div className="w-full md:max-w-1/3">
                    <Input placeholder="Nome da célula" type="text" onChange={(e) => setSearch(e.target.value)} />
                </div>
                    <div className="w-full flex max-w-full gap-2
                    md:justify-end md:max-w-1/3 md:gap-4">
                        <Select value={bairro} onChange={(e) => setBairro(e.target.value)}>
                            <option className="bg-[#131415]" value="">Bairro da célula</option>
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
        
                        <Select value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option className="bg-[#131415]" value="">Gênero da célula</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminina">Feminina</option>
                            <option value="Kids">Kids</option>
                            <option value="Adolescente">Adolescente</option>
                            <option value="Casal">Casal</option>
                            <option value="Mista">Mista</option>
                            <option value="Par">Par</option>
                        </Select>
                    </div>
                </div>  

                {/* EVENT CARD'S */}
                <div className={`${styles.customScroll} max-w-7xl max-h-[620px] overflow-y-auto w-full mt-6`}>
                    <TableInformationCell celulas={celulasFiltradas} />
                </div>            
            </div>

            <Footer />

            {/* MODAL NEW EVENT */}

            {isNewEventOpen && (
                <div className="fixed inset-0 bg-black/70 h-screen z-50 flex items-center justify-center">
                    <div className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-sm md:max-w-lg">
                    
                        <h2 className="text-white text-xl mb-4">Nova Célula</h2>

                        <label className="cursor-pointer group relative block">
                            <Image
                                src={preview || uploadImage}
                                alt="Foto da célula"
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
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            </label>


                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                                placeholder:text-white"
                                placeholder="Nome da célula"
                            />
                            <input
                                type="text"
                                className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white mt-4
                                placeholder:text-white"
                                placeholder="Líder da célula"
                            />
                        </div>


                        <div className="flex gap-2">
                            <Select>
                                <option value="">Selecione o dia</option>
                                <option value="segunda">Segunda-feira</option>
                                <option value="terca">Terça-feira</option>
                                <option value="quinta">Quinta-feira</option>
                                <option value="sexta">Sexta-feira</option>
                                <option value="sabado">Sábado</option>
                            </Select>

                            <Select>
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
                            <Select>
                                <option value="">Gênero da célula</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminina">Feminina</option>
                                <option value="Kids">Kids</option>
                                <option value="Adolescente">Adolescente</option>
                                <option value="Casal">Casal</option>
                                <option value="Mista">Mista</option>
                                <option value="Par">Par</option>
                            </Select>

                            <Select>
                                <option value="">Faixa etária da célula</option>
                                <option value="05-10">05-10 Anos</option>
                                <option value="11-17">11-17 Anos</option>
                                <option value="18-40">18-40 Anos</option>
                                <option value="+40">+40 Anos</option>
                            </Select>
                        </div>

                        <input
                            type="time"
                            required
                            className="w-full mb-3 p-2 rounded bg-[#1a1a1a] text-white scheme-dark mt-4"
                            placeholder="Hora"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                            onClick={() => setIsNewEventOpen(false)}
                            className="px-4 py-2 bg-gray-600 rounded hover:cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
                            >
                            Cancelar
                            </button>

                            <button
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                            >
                            Criar Célula
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}