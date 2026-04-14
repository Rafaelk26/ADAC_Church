import Image, { StaticImageData } from "next/image";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import foto from "../../../../public/assets/BANNER 1.png";

export function MinistersCard({fotoMinisterio, nomeMinisterio, status, nomeLider, link}: 
    {
        fotoMinisterio?: StaticImageData; nomeMinisterio: string; 
        status: boolean; nomeLider: string; link: string;
    }
) {
    return (
        <>
            <div className="w-full border-2 border-gray-500/80 rounded-xl h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090909] to-65% z-1" />

                <Image
                    className="w-full h-full object-cover"
                    alt={"Nome do ministério"}
                    src={fotoMinisterio ? fotoMinisterio : foto}
                    width={500}
                    height={500}
                />
        
                <div className="absolute flex top-3/5 px-4 w-full -mt-12 z-50">
                    <div className="relative flex justify-center items-center max-w-1/6 w-full">
                        <Image
                            className="w-12 h-12 object-cover rounded-full"
                            alt={"Nome do ministério"}
                            src={fotoMinisterio ? fotoMinisterio : foto}
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="relative max-w-5/6 w-full flex flex-col gap-0.5">
                        <h1 className="text-white font-manrope font-semibold text-3xl z-2">
                            {nomeMinisterio}
                        </h1>
                
                        {/* Status do ministério */}
                        <div className="w-full flex gap-2 items-center">
                            
                            {status === true ? (
                                <>
                                    <div className="flex items-center gap-1">
                                        <FaCircleCheck className="text-green-500" />
                                        <span className="font-manrope text-white text-sm">Disponível para novos membros</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-1">
                                        <FaCircleXmark className="text-red-500" />
                                        <span className="font-manrope text-white text-sm">Não disponível para novos membros</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Nome do líder do ministério */}
                        <div className="w-full">
                            <div className="w-full">
                                <h1 className="w-full text-white font-manrope font-light text-md">
                                    {nomeLider}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Botões */}

                <div className="absolute flex gap-2 top-3/5 mt-11 px-4 w-full z-50">
                    <a href={link} className="
                        w-max bg-gray-600 text-white text-sm 
                        font-medium font-manrope py-2 px-2 rounded-md transition-all
                        hover:bg-gray-700 hover:scale-105 hover:cursor-pointer">
                        Ver ministério
                    </a>

                    {status && (
                        <>
                            <button 
                            onClick={()=> (console.log("clicou!"))}
                            className="
                            w-max bg-green-600 text-white text-sm 
                            font-medium font-manrope py-2 px-2 rounded-md transition-all
                            hover:bg-green-700 hover:scale-105 hover:cursor-pointer">
                                Entrar na equipe
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}