import Image from "next/image"
import { Header } from "@/components/all/Header"
import { Footer } from "@/components/all/Footer"
import { MinistersCard } from '@/components/ministerios/MinistersCard'
import foto from "../../../../public/assets/backgroundAdmin.png"

export default function AdminHome(){
    return(
        <>
            <section className="relative h-full w-full overflow-visible">
                <div className="relative z-20">
                    <Header />
                </div>

                <Image
                    alt="Foto de fundo"
                    src={foto}
                    className="absolute inset-0 w-full h-screen object-cover opacity-65 z-10 md:opacity-85"
                />

                <div className="relative z-20 flex h-full w-full items-start justify-center px-6 pt-32">
                    <div className="max-w-7xl w-full">
                    <h1 className="text-[2.7rem] md:text-4xl font-manrope font-bold text-white leading-[1.1]">
                        Administrador
                    </h1>
                    </div>
                </div>



                {/* INFO CARDS */}

                <div className="flex flex-col items-center w-full bg-[#282828]/30">
                    
                    {/* CARDS */}
                    <div className="max-w-7xl w-full flex gap-4">
                        <div className="w-full bg-[#0e0e0e] rounded-xl h-48 relative overflow-hidden">
                            <h1 className="text-[2.7rem] md:text-4xl font-manrope font-bold text-white leading-[1.1]">
                                Administrador
                            </h1>
                        </div>

                        <div className="w-full rounded-xl h-56 relative overflow-hidden">
                            <h1 className="text-[2.7rem] md:text-4xl font-manrope font-bold text-white leading-[1.1]">
                                Administrador
                            </h1>
                        </div>

                        <div className="w-full rounded-xl h-56 relative overflow-hidden">
                            <h1 className="text-[2.7rem] md:text-4xl font-manrope font-bold text-white leading-[1.1]">
                                Administrador
                            </h1>
                        </div>

                        <div className="w-full border-2 border-gray-500/80 rounded-xl h-56 relative overflow-hidden">
                            <h1 className="text-[2.7rem] md:text-4xl font-manrope font-bold text-white leading-[1.1]">
                                Administrador
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}