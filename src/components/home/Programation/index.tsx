import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import IconCard from "../../../../public/assets/IconCard.svg";
import { CardProgramation } from "./CardProgramation";


export function Programation() {
    return (
        <>
            <section className="max-w-6xl w-full mx-auto mt-16">
                <div className="flex">

                    {/* Cards */}
                    <div className="w-4/5 flex flex-col gap-3 items-center">
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


                    <div className="w-7/12 flex flex-col justify-center gap-10">
                        <div className="w-full flex flex-col items-start gap-2">
                            {/* Logo */}
                            <Image src={ADACLogo} className="w-50" alt="ADAC Church" width={200} height={200} />
                            
                            <h1 className="text-6xl font-normal font-montserrat leading-[1.1]">Conheça a programação</h1>
                        </div>

                        <p className="text-left text-base font-montserrat font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}