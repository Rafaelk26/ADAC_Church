import { ButtonLink } from "../ButtonLink";
import { Card } from "./Cards";
import foto from "../../../../public/assets/cardsImage.jpg";
import styles from "./style.module.css";

export function Ministries() {
    return(
        <main className="w-full mb-56
        md:max-w-7xl md:mx-auto md:mt-8 md:mb-10 flex flex-col items-center">
            <div className='w-full overflow-hidden'>
                <div id="card-slider" className={`w-full flex ${styles.animateSlide} gap-5`}>
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                    <Card foto={foto} nameAlt={"Fotos"} />
                </div>
            </div>

            <div className="w-full mt-12 mx-auto flex justify-center">
              <ButtonLink nome="Conhecer os ministérios" href="#" />
            </div>
        </main>
    )
}