import { ButtonHTMLAttributes, ReactHTMLElement } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nome: string;
  href?: string;
}


export function ButtonLink({nome, href, ...rest}: ButtonProps) {
  return (
    <a href={href}>
        <button 
        {...rest}
        className="
        w-max bg-blue-500 text-white text-xl 
        font-medium font-manrope py-3 px-4 rounded-md transition-all
        hover:bg-blue-600 hover:scale-105 hover:cursor-pointer">
            {nome}   
        </button>
    </a>
  );
}