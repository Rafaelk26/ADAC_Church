"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/all/Header";
import { Input } from "@/components/all/Input";
import { Select } from "@/components/all/Select";
import { Wrapper } from "@/components/all/Wrapper";
import { CellCard } from "@/components/celulas/CellCard";
import { Main } from "@/components/celulas/Main";
import foto from "../../../public/assets/BANNER 2.png";

export default function Celulas() {
    const itemsPerPage = 9; // 3x3 grid
    const [currentPage, setCurrentPage] = useState(1);

    // simulação dos dados
    const cells = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        nomeCelula: "Célula X",
        bairroCelula: "Gaviotas",
        faixaCelula: "18-40 Anos",
        generoCelula: "Masculino",
        nomeLider: "Líder X",
        fotoCelula: foto,
    }));

    const totalPages = Math.ceil(cells.length / itemsPerPage);

    const currentItems = cells.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const container = {
        hidden: {},
        show: {
            transition: {
            staggerChildren: 0.08,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.5,
            ease: "easeOut" as const,
            },
        },
    };

  return (
    <>
      <section className="relative h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 z-50 w-full">
          <Header />
        </div>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#050505]/40 z-1" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#050505] z-2" />

        <Main />
      </section>

      <Wrapper>
        <section className="w-full mt-10">

          {/* FILTERS */}
          <div className="w-full flex justify-between">
            <div className="max-w-1/3 w-full">
              <Input placeholder="Nome da célula" type="text" />
            </div>

            <div className="max-w-1/3 w-full flex gap-4 justify-end">
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
            <motion.main
            key={currentPage} // importante pra animar ao trocar página
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full grid grid-cols-3 mt-32 gap-10"
            >
            {currentItems.map((cell) => (
                <motion.div key={cell.id} variants={item}>
                <CellCard {...cell} />
                </motion.div>
            ))}
            </motion.main>

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
      </Wrapper>
    </>
  );
}