import Image from "next/image";
import { Header } from "@/components/all/Header";
import { Footer } from "@/components/all/Footer";
import { TableInformation } from "@/components/admin/home/TableInformation";

import foto from "../../../../public/assets/backgroundAdmin.png"

export default function Trabalhadores(){
    return(
        <section className="relative h-full w-full overflow-visible">
            <div className="relative z-50">
                <Header />
            </div>

            <Image
                alt="Foto de fundo"
                src={foto}
                className="absolute inset-0 w-full h-max object-cover opacity-65 z-10 md:opacity-85"
            />

            <div className="relative z-20 flex h-full w-full items-start justify-center px-6 pt-20">
                <div className="max-w-7xl w-full">
                    <h1 className="text-3xl md:text-4xl font-manrope font-bold text-white">
                        Trabalhadores
                    </h1>
                </div>
            </div>


            <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-10 p-7 rounded-tr-4xl rounded-tl-4xl">
                <div className="max-w-7xl w-full flex gap-4 justify-between items-center">
                    <h4 className="text-2xl font-montserrat font-normal text-white">Total de Resultados</h4>
                    <h1 className="text-5xl md:text-4xl font-montserrat font-semibold text-white">8</h1>
                </div>    

                {/* TABLE INFORMATION OF WORK */}
                <div className="max-w-7xl w-full flex mt-4">
                    <TableInformation />
                </div>            
            </div>

            <Footer />
        </section>
    )
}