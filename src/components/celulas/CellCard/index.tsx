import Image, { StaticImageData } from "next/image";
import { ImManWoman } from "react-icons/im";
import { TbWomanFilled } from "react-icons/tb";
import { IoIosWoman } from "react-icons/io";
import { GiSwordwoman } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";

import foto from "../../../../public/assets/BANNER 1.png";





export function CellCard({fotoCelula, nomeCelula, faixaCelula, bairroCelula, liderCelula, generoCelula}: 
    {
        fotoCelula?: StaticImageData; nomeCelula: string; 
        faixaCelula: string; bairroCelula: string; 
        generoCelula: string; liderCelula: string;
    }
) {
    return (
        <>
            <div className="w-full border-2 border-gray-500/80 rounded-xl h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090909] to-90% z-1" />
                
                        <Image
                          className="w-full h-full object-cover"
                          alt={"Nome da célula"}
                          src={fotoCelula ? fotoCelula : foto}
                          width={500}
                          height={500}
                        />
                
                        <h1 className="absolute top-3/5 left-4 -mt-1 -translate-y-1/2 text-white font-manrope font-semibold text-3xl z-2">
                          {nomeCelula}
                        </h1>
                
                        {/* Faixa e Bairro */}
                        <div className="w-full flex gap-2 items-center absolute top-3/5 left-4 mt-7 -translate-y-1/2 z-2">
                            <div className="flex items-center gap-2">
                                {/* Masculino */}
                                {generoCelula === "Masculino" && (
                                    <IoMdMan className="bg-blue-500 p-0.5 rounded-full" size={20} />
                                )}
                                {/* Feminino */}
                                {generoCelula === "Feminino" && (
                                    <IoIosWoman className="bg-pink-500 p-0.5 rounded-full" size={20} />
                                )}
                                {/* Kids */}
                                {generoCelula === "Kids" && (
                                    <TbWomanFilled className="bg-yellow-600 p-0.5 rounded-full" size={20} />
                                )}
                                {/* Casal */}
                                {generoCelula === "Casal" && (
                                    <ImManWoman className="bg-red-600 p-0.5 rounded-full" size={18} />
                                )}
                                {/* Mista */}
                                {generoCelula === "Mista" && (
                                    <ImManWoman className="bg-purple-600 p-0.5 rounded-full" size={18} />
                                )}
                                 {/* Par */}
                                {generoCelula === "Par" && (
                                    <ImManWoman className="bg-orange-600 p-0.5 rounded-full" size={18} />
                                )}
                                 {/* Adolescente */}
                                {generoCelula === "Adolescente" && (
                                    <GiSwordwoman className="bg-green-600 p-0.5 rounded-full" size={20} />
                                )}


                                <span className="font-manrope text-white">
                                    {faixaCelula}
                                </span>
                            </div>

                            <span className="font-manrope text-white">
                            - {bairroCelula}
                            </span>
                        </div>

                        {/* Nome do líder */}
                        <div className="w-full absolute top-3/5 left-4 mt-6 -translate-y-1/2 z-2">
                            <div className="w-full">
                                <h1 className="w-full absolute top-3/5 mt-7 -translate-y-1/2 text-white font-manrope font-light text-md">
                                    {liderCelula}
                                </h1>
                            </div>
                        </div>
                
            </div>
        </>
    )
}