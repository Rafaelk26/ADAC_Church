import Image from "next/image";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";

export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full flex justify-between items-center px-4 pb-3 mt-2">
                {/* Logo */}
                <Image src={ADACLogo} className="w-40" alt="ADAC Church" width={200} height={200} />
                <span className="font-normal font-manrope">
                    <span className="font-extrabold">
                        ADAC Church © Copyright
                    </span> {currentYear} - Todos os Direitos Reservados.</span>
            </footer>
        </>
    )
}