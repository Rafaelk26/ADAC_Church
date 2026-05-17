import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import IconCard from "../../../../public/assets/IconCard.svg";
import { CardProgramation } from "./CardProgramation";


export function Programation() {
    return (
        <>
            <section className="max-w-full w-full flex">
                <div className="flex flex-col md:flex-row gap-10">

                    <div className="max-w-sm md:max-w-lg w-full flex flex-col justify-center gap-10
                    md:w-full">
                        <div className="w-full flex flex-col items-start gap-2">
                            {/* Logo */}
                            <Image src={ADACLogo} className="w-50" alt="ADAC Church" width={200} height={200} />
                            
                            <h1 className="text-5xl font-normal font-montserrat leading-[1.1]
                            md:text-6xl">Conheça a programação</h1>
                        </div>

                        <p className="text-left text-base font-montserrat font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="max-w-sm md:max-w-lg w-full flex flex-col gap-3 items-center
                    md:w-1/2">
                        <CardProgramation 
                        foto={IconCard} 
                        titulo="Células" 
                        dias="Seg. Ter. Qui. Sex. Sáb." 
                        hora="19h ● 19h30 ● 20h" />

                        <CardProgramation 
                        foto={IconCard} 
                        titulo="Culto de Líderes" 
                        dias="Quarta-feira" 
                        hora="19h30" />

                        <CardProgramation 
                        foto={IconCard} 
                        titulo="Oração" 
                        dias="Domingo" 
                        hora="09h" />

                        <CardProgramation 
                        foto={IconCard} 
                        titulo="Culto" 
                        dias="Domingo" 
                        hora="18h50" />
                    </div>
                </div>
            </section>
        </>
    )
}