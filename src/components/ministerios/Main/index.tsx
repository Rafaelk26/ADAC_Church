"use client";
import styles from './styles.module.css'

export function Main(){
  return(
    <div className={`relative z-40 flex h-full w-full items-center justify-center px-6
    opacity-0 translate-y-5 ${styles.animateFadeUp}`}>
      
      <div className="max-w-full flex flex-col items-center gap-4 md:max-w-5xl text-center">

        <h1 className="text-4xl md:text-6xl mt-10 font-manrope font-bold text-white leading-[1.1]">
          Veja todos os nossos <span className="text-blue-400">ministérios</span> dessa maravilhosa obra de Deus!
        </h1>

        <p className="text-base md:text-lg text-gray-200 font-montserrat font-light max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
        </p>

        <div className="w-full mt-8 md:mt-12"></div>
      </div>
    </div>
  )
}