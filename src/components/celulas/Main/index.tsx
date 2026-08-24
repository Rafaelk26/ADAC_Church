"use client";
import styles from './styles.module.css'

export function Main(){
  return(
    <div className={`relative z-40 flex h-full w-full items-center justify-center px-6
    opacity-0 translate-y-5 ${styles.animateFadeUp}`}>
      
      <div className="max-w-full flex flex-col items-center gap-4 md:max-w-4xl text-center">

        <h1 className="text-[2.7rem] md:text-7xl mt-10 font-manrope font-bold text-white leading-[1.1]">
          Sempre tem uma <span className="text-blue-400">célula</span> próxima de você
        </h1>

        <p className="text-base md:text-lg text-gray-200 font-montserrat font-light max-w-4xl">
          As células são espaços de comunhão, crescimento e cuidado, onde você pode compartilhar sua caminhada, aprender mais da Palavra e criar conexões verdadeiras. 
          Não importa onde você esteja, sempre haverá um lugar preparado para te receber com amor e propósito.
        </p>

        <div className="w-full mt-8 md:mt-12"></div>

      </div>
    </div>
  )
}