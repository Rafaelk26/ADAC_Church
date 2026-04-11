import Image, { StaticImageData } from "next/image";

export function Card({nameAlt, foto}: {nameAlt: string, foto: StaticImageData}) {
    return(
        <>
            <div className="w-52 h-72 mt-10 flex-shrink-0 rounded-lg">
                <Image
                className='w-full h-full object-cover rounded-lg'
                src={foto}
                alt={nameAlt} />
            </div>
        </>
    )
}