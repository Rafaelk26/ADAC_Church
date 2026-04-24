import Image from "next/image";
import Link from "next/link";

import adacLogo from "../../../../public/assets/LogoAdac.svg";

export default function Reset() {
    return (
        <main className="w-full h-svh flex flex-col items-center justify-center gap-6
        md:h-screen">

            <Link href="/auth/login">
                <Image 
                src={adacLogo} 
                className="w-60 md:w-56"
                alt="ADAC Church" 
                width={350} height={350} />
            </Link>

            <h1 className="text-2xl font-light font-manrope mt-4 text-center w-96
            md:text-3xl md:w-full">Escreva o e-mail do administrador para redefinir a senha</h1>

            <form className="max-w-96 w-full flex flex-col gap-4
            md:max-w-xl">
                <input
                    type="email"
                    className="w-full p-3 rounded bg-[#1a1a1a] text-white"
                    placeholder="E-mail do Administrador"
                />

                <button
                className="px-4 py-3 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                >
                Enviar e-mail
                </button>
            </form>

        </main>
    )
}