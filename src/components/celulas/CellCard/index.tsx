import Image from "next/image";
import { ImManWoman } from "react-icons/im";
import { TbWomanFilled } from "react-icons/tb";
import { IoIosWoman } from "react-icons/io";
import { GiSwordwoman } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";
import { formatNumberForVisit } from "@/functions/ALL/formatNumberForVisit";

import foto from "../../../../public/assets/LogoAdac.svg";
import { Celula } from "@/types/types";


export function CellCard({fotoCelula, nomeCelula, liderWhatsapp, faixaCelula, bairroCelula, liderCelula, generoCelula}: Celula
) {
    return (
        <>
            <div className="w-full border-2 border-gray-500/80 rounded-xl h-56 relative overflow-hidden">
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090909] to-90% z-10" />

            {/* Imagem */}
            {fotoCelula ? (
                <Image 
                src={fotoCelula}
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover"
                />
            ) : (
                <Image 
                src={foto}
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover"
                />
            )}

            {/* CONTEÚDO */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1">

                {/* Nome */}
                <h1 className="text-white font-manrope font-semibold text-2xl">
                    {nomeCelula}
                </h1>

                {/* Faixa + Bairro */}
                <div className="flex items-center gap-1 text-white text-sm">
                <div className="flex items-center gap-2">

                    {generoCelula === "Masculino" && <IoMdMan className="bg-blue-500 p-0.5 rounded-full" size={20} />}
                    {generoCelula === "Feminino" && <IoIosWoman className="bg-pink-500 p-0.5 rounded-full" size={20} />}
                    {generoCelula === "Kids" && <TbWomanFilled className="bg-yellow-600 p-0.5 rounded-full" size={20} />}
                    {generoCelula === "Casal" && <ImManWoman className="bg-red-600 p-0.5 rounded-full" size={18} />}
                    {generoCelula === "Mista" && <ImManWoman className="bg-purple-600 p-0.5 rounded-full" size={18} />}
                    {generoCelula === "Par" && <ImManWoman className="bg-orange-600 p-0.5 rounded-full" size={18} />}
                    {generoCelula === "Adolescente" && <GiSwordwoman className="bg-green-600 p-0.5 rounded-full" size={20} />}

                    <span className="text-white font-manrope font-normal text-base">{faixaCelula}</span>
                </div>

                <span className="text-white font-manrope font-normal text-base">- {bairroCelula}</span>
                </div>

                {/* Líder */}
                <span className="text-white font-manrope text-base">
                    {liderCelula}
                </span>

                {/* Botão */}
                <button 
                onClick={()=> liderWhatsapp ? formatNumberForVisit(liderWhatsapp, `Olá ${liderCelula}, venho do site e gostaria de fazer parte da célula ${nomeCelula}!`) : ""}
                className="w-max px-4 py-2 bg-blue-600 rounded 
                hover:bg-blue-700 hover:scale-105 hover:cursor-pointer transition-all">
                    Participar da célula
                </button>

            </div>
            </div>
        </>
    )
}