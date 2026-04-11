import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify } from "react-icons/fa";


export function Social() {
    return(
        <section className="w-full mb-56
        md:max-w-3xl md:mx-auto md:mt-8 md:mb-10 flex flex-col items-center">

            <main className='w-full grid grid-cols-2 gap-5 mt-4'>
                
                {/* Card Instagram */}
                <Link href="https://www.instagram.com/adacchurch/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-32 flex items-center justify-center gap-4 bg-[url('/assets/bgInstagram.png')] bg-cover bg-center rounded-2xl
                    hover:scale-105 transition-transform duration-300">
                        {/* Icon */}
                        <FaInstagram className="text-white text-5xl" />
                        <h1 className=" text-white text-4xl font-bold font-manrope">@adacchurch</h1>
                    </div>
                </Link>


                {/* Card Facebook */}
                <Link href="https://www.facebook.com/adacchurch/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-32 flex items-center justify-center gap-4 bg-[url('/assets/bgFacebook.png')] bg-cover bg-center rounded-2xl
                    hover:scale-105 transition-transform duration-300">
                        {/* Icon */}
                        <FaFacebookF className="text-white text-5xl" />
                        <h1 className=" text-white text-4xl font-bold font-manrope">Adac Church</h1>
                    </div>
                </Link>


                {/* Card YouTube */}
                <Link href="https://www.youtube.com/@ADACCHURCH/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-32 flex items-center justify-center gap-4 bg-[url('/assets/bgYoutube.png')] bg-cover bg-center rounded-2xl
                    hover:scale-105 transition-transform duration-300">
                        {/* Icon */}
                        <FaYoutube className="text-red-500 text-5xl" />
                        <h1 className=" text-black text-4xl font-bold font-manrope">ADAC Church</h1>
                    </div>
                </Link>


                {/* Card Spotify */}
                <Link href="https://open.spotify.com/show/1j41bZ7tth1MdP0gvGoEHb?si=ccec723e315a4a4a/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-32 flex items-center justify-center gap-4 bg-[url('/assets/bgSpotify.png')] bg-cover bg-center rounded-2xl
                    hover:scale-105 transition-transform duration-300">
                        {/* Icon */}
                        <FaSpotify className="text-green-950 text-5xl" />
                        <h1 className=" text-green-950 text-4xl font-bold font-manrope">ADACCAST</h1>
                    </div>
                </Link>
            </main>
        </section>
    )
}