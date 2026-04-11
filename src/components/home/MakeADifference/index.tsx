import Image from 'next/image';
import logoMake from '../../../../public/assets/makeadifference.svg';

export function MakeADifference() {
    return (
        <section className="relative max-w-full flex flex-col items-center justify-center py-10 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/assets/backgroundMake.png')] bg-cover bg-center opacity-30 z-0" />

            {/* Conteúdo */}
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-12 py-14">
                <Image
                    className="max-w-md w-full"
                    src={logoMake}
                    alt="Logo Make a Difference"
                    width={200}
                    height={100}
                />

                <h1 className="text-center text-xl font-montserrat font-light">
                    Portanto, vão e façam discípulos de todas as nações,
                    batizando‑os em nome do Pai, do Filho e do Espírito Santo,
                    ensinando‑os a obedecer a tudo o que eu ordenei a vocês.
                    E eu estarei sempre com vocês, até o fim dos tempos.
                </h1>

                <h1 className="text-center text-2xl font-manrope font-bold">
                    Mateus 28:19-20 | NVI
                </h1>
            </div>
        </section>
    );
}