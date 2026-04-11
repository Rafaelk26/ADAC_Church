import Image from "next/image";
import { ButtonLink } from "@/components/home/ButtonLink";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";

export function Visit({ link }: { link: string }) {
    return (
        <>
           <section className="max-w-5xl w-full mx-auto mt-16">
                 {/* Google Maps */}
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                    {/* Maps */}
                    <iframe
                    src={link}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    className="border-0"
                    />
                </div>

                <div className="w-full flex justify-between items-center mt-2">
                    {/* Logo */}
                    <Image src={ADACLogo} className="w-40" alt="ADAC Church" width={200} height={200} />
                    <span className="font-semibold font-manrope">R. Eng. João Fonseca, 170 - Centro, Caraguatatuba - SP, 11660-200</span>
                </div>

                <div className="w-full mt-10 flex justify-center">
                    <ButtonLink
                    href="#visit" 
                    nome="Confirmar visita"
                    />
                </div>
           </section>
        </>
    )
}