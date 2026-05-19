import Image, { StaticImageData } from "next/image";

import fotoPlaceholder from "../../../../../public/assets/cardsImage.jpg";


export function Card({nameAlt, foto}: {nameAlt: string, foto: StaticImageData | string}) {
    return(
        <>
            <div className="w-52 h-72 mt-10 flex-shrink-0 rounded-lg">
                <Image
                width={100}
                height={200}
                className='w-full h-full object-cover rounded-lg'
                src={foto || fotoPlaceholder}
                alt={nameAlt} />
            </div>
        </>
    )
}