"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { Input } from "@/components/all/Input";
import { Select } from "@/components/all/Select";
import { Wrapper } from "@/components/all/Wrapper";
import { CellCard } from "@/components/celulas/CellCard";
import { Main } from "@/components/celulas/Main";

import { Celula } from "@/types/types";

import { fetchAllCelulas } from "@/functions/GET/fetchAllCelulas";

import styles from "./styles.module.css";

import foto from "../../../public/assets/Celulas.webp";

export default function Celulas() {
  
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [cells, setCells] = useState<Celula[]>([]);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [bairro, setBairro] = useState("");
  const [genero, setGenero] = useState("");
  
  const celulasFiltradas = cells.filter((c) => {
      if (!c) return false;

      const nome = c.nomeCelula || "";
      const bairroC = c.bairroCelula || "";
      const generoC = c.generoCelula || "";

      const searchNormalized = search.trim().toLowerCase();

      const matchNome = nome.toLowerCase().includes(searchNormalized);
      const matchBairro = bairro ? bairroC === bairro : true;
      const matchGenero = genero ? generoC === genero : true;

      return matchNome && matchBairro && matchGenero;
  });

  const totalPages = Math.ceil(celulasFiltradas.length / itemsPerPage);

  const currentItems = celulasFiltradas.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

  // Buscando células da API

  useEffect(() => {
    setMounted(true);

    fetchAllCelulas().then((data) => {
      setCells(data || []);
    });
  }, []);

  if (!mounted) return null;

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
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#050505] z-[2]" />

        <Main />
      </section>

      <Wrapper>
        <section className="w-full mt-10">

          {/* FILTERS */}
          <div className="max-w-11/12 flex-col flex justify-between mx-auto gap-2
          md:flex-row md:w-full md:max-w-full md:mx-0 md:gap-0">
            <div className="w-full md:max-w-1/3">
              <Input placeholder="Nome da célula" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
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
                  <option value="Canto do Mar">Canto do Mar</option>
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

            {/* GRID */}
            <main
            className="w-11/12 grid grid-cols-1 mt-16 md:mt-32 gap-8 mx-auto
            md:grid-cols-3 md:gap-10 md:w-full md:mx-0"
            >
            {currentItems.map((cell) => (
                <div className={`${styles.animateFadeUp}`} key={cell.id}>
                  <CellCard {...cell} liderWhatsapp={cell?.liderWhatsapp} />
                </div>
            ))}
            </main>

          {/* PAGINAÇÃO */}
          <div className="flex justify-center mt-10 mb-20 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition
                    ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }
                  `}
                >
                  {page}
                </button>
              );
            })}
          </div>

        </section>
        <Footer />
      </Wrapper>
    </>
  );
}