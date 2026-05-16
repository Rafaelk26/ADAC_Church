import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import NatureIMG from "../../../../public/assets/cardsImage.jpg";
import { CardLinkHistory } from "./CardLinkHistory";


export function AboutUs() {
    return (
        <>
            <section className="max-w-4xl mt-16 m-auto mb-10">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                    {/* TEXTO */}
                    <div className="w-full max-w-96 md:w-1/2 md:max-w-1/2 flex flex-col justify-center gap-8 md:text-start">
                        <div className="w-full flex flex-col items-start">
                            <h4 className="font-manrope text-xl text-white font-normal">Somos a</h4>

                            <Image
                            src={ADACLogo}
                            className="w-full max-w-xs md:max-w-full"
                            alt="ADAC Church"
                            width={200}
                            height={200}
                            />
                        </div>

                        <p className="text-base font-montserrat font-light">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br/><br/>
                            Took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br/><br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="w-96 md:w-1/2 flex flex-col gap-8 items-center">
                        <CardLinkHistory foto={NatureIMG} link="#" titulo="Surgimento" ano="2006" />
                        <CardLinkHistory foto={NatureIMG} link="#" titulo="Transformação" ano="2016" />
                        <CardLinkHistory foto={NatureIMG} link="#" titulo="Diferença" ano="2026" />
                    </div>

                </div>
            </section>
        </>
    )
}