"use client";
import styles from './styles.module.css'

export function Main(){
  return(
    <div className={`relative z-40 flex h-full w-full items-center justify-center px-6
    opacity-0 translate-y-5 ${styles.animateFadeUp}`}>
      
      <div className="max-w-full flex flex-col items-center gap-4 md:max-w-4xl text-center">

        <h1 className="text-[2.2rem] md:text-6xl mt-10 font-manrope font-bold text-white leading-[1.1]">
          Não perca a chance de participar dos <span className="text-blue-400">eventos</span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 font-montserrat font-light max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
        </p>

        <div className="w-full mt-8 md:mt-12"></div>
      </div>
    </div>
  )
}