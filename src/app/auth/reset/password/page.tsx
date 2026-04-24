"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import adacLogo from "../../../../../public/assets/LogoAdac.svg";

export default function Reset() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
        
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
            md:text-3xl md:w-full">Redefina a senha</h1>

            <form className="max-w-96 w-full flex flex-col gap-4
            md:max-w-xl">
                <div className="w-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full p-3 rounded bg-[#1a1a1a] text-white"
                        placeholder="Senha"
                    />
    
                    {showPassword ? (
                        <FaEyeSlash
                        size={20}
                        className="absolute right-3 top-3.5 transform text-gray-200 hover:text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    />
                    ) : (
                        <FaEye
                        size={20}
                        className="absolute right-3 top-3.5 transform text-gray-200 hover:text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    />
                    )}
                </div>

                <div className="w-full relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full p-3 rounded bg-[#1a1a1a] text-white"
                        placeholder="Confirme a senha"
                    />
    
                    {showConfirmPassword ? (
                        <FaEyeSlash
                        size={20}
                        className="absolute right-3 top-3.5 transform text-gray-200 hover:text-gray-400 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    />
                    ) : (
                        <FaEye
                        size={20}
                        className="absolute right-3 top-3.5 transform text-gray-200 hover:text-gray-400 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    />
                    )}
                </div>

                <button
                className="px-4 py-3 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
                >
                Alterar senha
                </button>
            </form>

        </main>
    )
}