import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export function CardInformation({nome, numeros, legenda, link}: {nome: string; numeros: number | string; legenda: string; link: string}){
    return(
        <>
            <div className="shrink-0 w-80 bg-[#1b1b1b] bg-gradient-to-l from-transparent to-[#0e0e0e] from-25% rounded-xl relative overflow-hidden p-4
            drop-shadow-md drop-shadow-white/15 md:w-[310px]">
                <h4 className="text-xs font-montserrat font-light text-white">
                    TOTAL COMPLETO DE
                </h4>

                <h1 className="text-2xl font-manrope font-bold text-white">
                    {nome}
                </h1>

                <div className="w-full flex mt-4">
                    <div className="max-w-9/12 w-full flex flex-col gap-2">
                        <h1 className="text-5xl font-montserrat font-semibold text-white">{numeros}</h1>
                        <span className="text-sm font-manrope font-light text-white">{legenda}</span>
                    </div>
                    <div className="max-w-3/12 w-full flex flex-col justify-center items-end">
                        <Link href={link} className="hover:scale-105 transition-all">
                            <BsArrowUpRightCircleFill size={60} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}