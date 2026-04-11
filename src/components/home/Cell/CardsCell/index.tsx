import Image, { StaticImageData } from "next/image";
import logoADACRedonda from "../../../../../public/assets/ADACLogoRedonda.svg";

export function CardsCell({ foto }: { foto: StaticImageData; }) {
  return (
    <div className="max-w-full w-full h-40 border rounded-xl transition relative overflow-hidden shrink-0">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#090909]/100 via-[#090909]/50 to-transparent z-1" />

        {/* Logo Adac Church */}
        <Image 
        className="absolute bottom-4 left-4 w-10 h-10 z-10"
        alt="Logo Adac Church"
        src={logoADACRedonda}
        />

        {/* Foto da Célula */}
        <Image
        className="w-full h-full object-cover rounded-xl"
        alt="Foto da Célula"
        src={foto}
        width={500}
        height={500}
        />
    </div>
  );
}