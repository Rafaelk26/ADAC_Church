"use client";

import Image from "next/image";
import { useState } from "react";

import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { Input } from "@/components/all/Input";
import { Select } from "@/components/all/Select";
import { Wrapper } from "@/components/all/Wrapper";
import { CellCard } from "@/components/celulas/CellCard";
import { Main } from "@/components/celulas/Main";

import styles from "./styles.module.css";

import foto from "../../../public/assets/BANNER 2.png";

export default function Celulas() {

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // simulação dos dados
    const cells = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        nomeCelula: "Célula X",
        bairroCelula: "Gaviotas",
        faixaCelula: "18-40 Anos",
        generoCelula: "Masculino",
        liderCelula: "Líder X",
        fotoCelula: foto,
    }));

    const totalPages = Math.ceil(cells.length / itemsPerPage);

    const currentItems = cells.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
              <Input placeholder="Nome da célula" type="text" />
            </div>

            <div className="w-full flex max-w-full gap-2
            md:justify-end md:max-w-1/3 md:gap-4">
              <Select>
                <option className="bg-[#131415]" value="">Todas as regiões</option>
                <option className="bg-[#131415]" value="norte">Norte</option>
                <option className="bg-[#131415]" value="sul">Sul</option>
              </Select>

              <Select>
                <option className="bg-[#131415]" value="">Todos os tipos</option>
                <option className="bg-[#131415]" value="masculino">Masculino</option>
                <option className="bg-[#131415]" value="feminino">Feminino</option>
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
                  <CellCard {...cell} />
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