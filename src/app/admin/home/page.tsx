import Image from "next/image"
import { Header } from "@/components/all/Header"
import { Footer } from "@/components/all/Footer"
import { CardInformation } from "@/components/admin/home/CardInformation"
import { TableInformation } from "@/components/admin/home/TableInformation"

import styles from "./styles.module.css";

import foto from "../../../../public/assets/backgroundAdmin.png"

export default function AdminHome(){

    return(
        <>
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
                            Administrador
                        </h1>
                    </div>
                </div>



                {/* INFO CARDS */}

                <div className="relative flex flex-col items-center w-full bg-[#282828]/70 z-20 mt-6 mb-10 p-7 rounded-tr-4xl rounded-tl-4xl">
                    
                    {/* CARDS */}
                    <div className={`${styles.customScroll} w-full flex gap-4 overflow-x-auto p-1`}>
                       <CardInformation
                       nome="Trabalhadores" 
                       numeros={2}
                       legenda="Pessoas interessadas em trabalhar em ministério da igreja."
                       link="/admin/trabalhadores" />

                       <CardInformation
                       nome="Eventos Ativos" 
                       numeros={3}
                       legenda="Eventos que estão aberto ao público para ser frequentado."
                       link="/admin/eventos" />

                       <CardInformation
                       nome="Células Ativas"
                       numeros={218}
                       legenda="Células abertas para novos membros participarem."
                       link="/admin/celulas" />

                       <CardInformation
                       nome="Visitantes Interessados" 
                       numeros={12}
                       legenda="Pessoas interessadas em fazer uma visita na igreja."
                       link="/admin/visitantes" />

                       <CardInformation
                       nome="Ministérios Abertos" 
                       numeros={12}
                       legenda="Ministérios abertos para servir ao Senhor com excelência."
                       link="/admin/ministerios" />
                    </div>


                    {/* TABLE */}

                    <div className="max-w-7xl w-full mt-16">
                        <h1 className="text-2xl md:text-3xl font-montserrat font-light text-white">Trabalhadores disponíveis</h1>
                        <TableInformation />
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}