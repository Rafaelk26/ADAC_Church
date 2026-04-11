import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function CardLinkHistory(
    {foto, titulo, ano, link}: 
    { foto: StaticImageData; titulo: string; ano: string; link: string }
) {
  return (
    <Link href={link} className="max-w-md w-full">
      <div className="w-full h-40 border rounded-xl hover:scale-105 transition relative overflow-hidden">

        <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-transparent to-[#090909] z-1" />

        <Image
          className="w-full h-full object-cover rounded-xl"
          alt={titulo}
          src={foto}
          width={500}
          height={500}
        />

        <h1 className="absolute top-1/2 left-4 -mt-1 -translate-y-1/2 text-white font-manrope font-bold text-4xl z-2">
          {titulo}
        </h1>

        <h1 className="absolute top-1/2 left-4 mt-7 -translate-y-1/2 text-white font-manrope font-light text-md z-2">
          {ano}
        </h1>

      </div>
    </Link>
  );
}