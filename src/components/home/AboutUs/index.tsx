import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import NatureIMG from "../../../../public/assets/cardsImage.jpg";
import { CardLinkHistory } from "./CardLinkHistory";


export function AboutUs() {
    return (
        <>
            <section className="max-w-5xl mt-16 m-auto mb-10">
                <div className="flex">
                    <div className="w-7/12 flex flex-col justify-between">
                        <div className="w-full flex flex-col items-start gap-0">
                            <h4 className="font-manrope text-xl text-white font-normal">Somos a</h4>
                            {/* Logo */}
                            <Image src={ADACLogo} className="w-full" alt="ADAC Church" width={200} height={200} />
                        </div>

                        <p className="text-left text-base font-montserrat font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br/><br/>
                            Took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="w-4/5 flex flex-col gap-8 items-center">
                        <CardLinkHistory
                        foto={NatureIMG}
                        link="#"
                        titulo="Surgimento"
                        ano="2006"
                        />

                        <CardLinkHistory
                        foto={NatureIMG}
                        link="#"
                        titulo="Transformação"
                        ano="2016"
                        />

                        <CardLinkHistory
                        foto={NatureIMG}
                        link="#"
                        titulo="Diferença"
                        ano="2026"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}