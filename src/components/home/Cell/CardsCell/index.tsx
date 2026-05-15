import Image, { StaticImageData } from "next/image";
import logoADACRedonda from "../../../../../public/assets/ADACLogoRedonda.svg";

export function CardsCell({ foto }: { foto: string | null }) {

  function getImageSrc(src: StaticImageData | File | string | null) {
    if (!src) return logoADACRedonda;

    if (src instanceof File) {
      return URL.createObjectURL(src);
    }

    return src;
  }

  return (
    <div className="max-w-full w-full h-40 border rounded-xl relative overflow-hidden shrink-0">

      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#090909]/100 via-[#090909]/50 to-transparent z-1" />

      <Image
        className="absolute bottom-4 left-4 w-10 h-10 z-10"
        alt="Logo Adac Church"
        src={logoADACRedonda}
      />

      <Image
        className="w-full h-full object-cover rounded-xl"
        alt="Foto da Célula"
        src={getImageSrc(foto)}
        width={500}
        height={500}
      />
    </div>
  );
}