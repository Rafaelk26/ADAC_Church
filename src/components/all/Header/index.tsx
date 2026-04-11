import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";

export function Header() {
    return(
        <header className="w-full h-16 bg-transparent text-white flex items-center justify-center">
            <div className="w-full max-w-7xl flex items-center justify-between px-4">
                {/* Logo */}
                <Image src={ADACLogo} alt="ADAC Church" width={200} height={200} />

                {/* Links */}
                <div className="flex gap-6">
                    <a href="/ministerios" className="text-sm font-montserrat hover:text-blue-400 transition-colors">MINISTÉRIOS</a>
                    <a href="/celulas" className="text-sm font-montserrat hover:text-blue-400 transition-colors">CÉLULAS</a>
                    <a href="/#visit" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PLANEJAR VISITA</a>
                    <a href="/#programation" className="text-sm font-montserrat hover:text-blue-400 transition-colors">PROGRAMAÇÃO</a>
                    <a href="/about" className="text-sm font-montserrat hover:text-blue-400 transition-colors">QUEM SOMOS</a>
                    <a href="/events" className="text-sm font-montserrat hover:text-blue-400 transition-colors">EVENTOS</a>
                </div>
            </div>
        </header>
    )

}