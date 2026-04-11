import Image, { StaticImageData } from "next/image";

export function CardProgramation(
    {foto, titulo, dias, hora}: 
    { foto: StaticImageData; titulo: string; dias: string; hora: string }
) {
  return (
    <div className="max-w-lg w-full h-28 px-5 flex justify-between items-center bg-white/8 rounded-xl hover:scale-105 transition">

        {/* Icon */}
        <div className="max-w-3/5 w-full flex items-center gap-2">
            <div className="w-6">
                <Image src={foto} alt="Icon" width={200} height={200} className="w-full h-full object-cover rounded-l-xl" />
            </div>
            <div className="w-full flex flex-col gap-1">
                <h1 className="text-3xl font-semibold font-montserrat">{titulo}</h1>
                <h4 className="text-base font-light font-montserrat">{dias}</h4>
            </div>
        </div>

        {/* Content */}
        <div className="max-w-2/5 w-full">
            <h4 className="text-base font-normal font-montserrat text-end">{hora}</h4>
        </div>   
    </div>
  );
}