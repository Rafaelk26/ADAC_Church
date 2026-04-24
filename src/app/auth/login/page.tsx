"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import adacLogo from "../../../../public/assets/LogoAdac.svg";

import { handleSubmit } from "@/functions/POST/handleSubmit";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className="w-full h-svh flex items-center justify-center flex-col 
    md:flex-row md:h-screen">
      {/* DIV INFO */}
      <div className="max-w-full w-full h-screen flex justify-center items-center
      md:max-w-4/6">

        <Link href="/">
            <Image 
            src={adacLogo} 
            className="w-60 md:w-96"
            alt="ADAC Church" 
            width={350} height={350} />
        </Link>

      </div>

      {/* DIV LOGIN */}
      <div className="max-w-full w-full h-screen bg-gradient-to-br from-[#1B1B1B] to-[#2c2c2c] flex items-center justify-center flex-col rounded-tl-4xl rounded-tr-4xl
      md:max-w-2/6 md:rounded-tl-4xl md:rounded-bl-4xl md:rounded-tr-none">
        <h1 className="text-3xl font-semibold font-manrope mb-8">User Login</h1>
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSubmit(formData);
        }}
        className="max-w-3/4 w-full flex flex-col gap-4">
            <input
                type="text"
                className="w-full p-3 rounded bg-[#1a1a1a] text-white"
                placeholder="Usuário"
                name="usuario"
                autoComplete="username"
            />

            <div className="w-full relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 rounded bg-[#1a1a1a] text-white"
                    placeholder="Senha"
                    name="senha"
                    autoComplete="current-password"
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

            <a href="/auth/reset" className="w-max underline hover:text-blue-400 transition-all">Esqueceu a senha?</a>

            <button
            className="mt-4 px-4 py-3 bg-blue-600 rounded hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition-all"
            >
            Entrar
            </button>
        </form>
      </div>
    </div>
  );
}