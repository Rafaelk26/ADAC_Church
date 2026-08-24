import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";

export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full flex flex-col justify-between items-center px-8 pb-3 mt-2 gap-4 mb-2
            md:px-4 md:flex-row md:mb-0">
                {/* Logo */}
                <Image src={ADACLogo} className="w-40" alt="ADAC Church" width={200} height={200} />
                <span className="text-sm text-center font-manrope md:text-base">
                    <span className="font-extrabold">ADAC Church</span> © Copyright {currentYear} - Todos os Direitos Reservados.</span>
            </footer>
        </>
    )
}