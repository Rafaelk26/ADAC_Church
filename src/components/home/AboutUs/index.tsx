"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ADACLogo from "../../../../public/assets/LogoAdac.svg";
import NatureIMG from "../../../../public/assets/cardsImage.jpg";
import { CardLinkHistory } from "./CardLinkHistory";


export function AboutUs() {

    const [surgimento, setSurgimento] = useState(false);
    const [transformacao, setTransformacao] = useState(false);
    const [diferenca, setDiferenca] = useState(false);

    return (
        <>
            <section className="max-w-4xl mt-16 m-auto mb-10">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                    {/* TEXTO */}
                    <div className="w-full max-w-96 md:w-1/2 md:max-w-1/2 flex flex-col justify-center gap-8 md:text-start">
                        <div className="w-full flex flex-col items-start">
                            <h4 className="font-manrope text-xl text-white font-normal">Somos a</h4>

                            <Image
                            src={ADACLogo}
                            className="w-full max-w-xs md:max-w-full"
                            alt="ADAC Church"
                            width={200}
                            height={200}
                            />
                        </div>

                        <p className="text-base font-montserrat font-light">
                            Descubra as etapas da nossa história e veja como Deus tem guiado cada passo da nossa jornada! 
                            Em meio à realidade de Caraguatatuba, onde a juventude enfrentava desafios e falta de direção, 
                            a ADAC surgiu no coração do Pastor Presidente Ronaldo Natalino. Movido por um chamado divino, 
                            ele teve a missão de despertar uma nova geração de adoradores do Senhor.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="w-96 md:w-1/2 flex flex-col gap-8 items-center">
                        {/* Surgimento */}
                        <CardLinkHistory onClick={() => setSurgimento(!surgimento)} foto={NatureIMG} link="#" titulo="Surgimento" ano="2006" />
                        
                        <AnimatePresence>
                            {surgimento && (
                                <motion.p
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-base font-montserrat font-light">
                                    No contexto de igreja dentro da realidade de Caraguatatuba pode-se
                                    afirmar que havia pouca disposição e amor pela vida da juventude que 
                                    se perdia nesse lugar. Foi então que a ADAC nasceu no coração do Pastor 
                                    Presidente Ronaldo Natalino, com o intuído gerado por Deus de despertar 
                                    uma geração de adoradores ao Senhor. Fundada em 2006 no modelo tradicional 
                                    de uma assembleia de Deus, uma igreja ainda pequena, com uma visão limitada 
                                    no que dizia respeito ao Reino de Deus, mas muito fervorosa, obediente e temente 
                                    a palavra do Senhor, aos poucos foi ganhando espaço em um bairro da cidade.
                                </motion.p>
                            )}
                        </AnimatePresence>
                        {/* Transformação */}
                        <CardLinkHistory onClick={() => setTransformacao(!transformacao)} foto={NatureIMG} link="#" titulo="Transformação" ano="2016" />
                        {transformacao && (
                            <AnimatePresence>
                                <motion.p
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-base font-montserrat font-light">
                                    Foi no ano de 2016 quando houve a mudança para a visão celular que a ADAC começou 
                                    a viver definitivamente a Grande Comissão (Ganhar, Consolidar e Enviar). Diante de 
                                    todas as dificuldades de uma transição, o que fortaleceu a visão na vida dos membros 
                                    e agora líderes das primeiras células foi o ENCONTRO COM DEUS, e o CFL (Curso de Formação de Líderes), 
                                    que de forma avassaladora vem desde então não só impactando a vida das pessoas, mas gerando uma verdadeira 
                                    transformação de vida, o que acarretou em um despertar de pessoas dispostas a liderar com amor e obediência 
                                    e então ocasionou um crescimento explosivo na igreja tanto territorial como espiritual, pois de um bairro 
                                    pequeno agora a ADAC está espalhada pela maioria dos bairros da cidade através das células.
                                </motion.p>
                            </AnimatePresence>
                        )}

                        {/* Diferença */}
                        <CardLinkHistory onClick={() => setDiferenca(!diferenca)} foto={NatureIMG} link="#" titulo="Diferença" ano="2026" />
                        {diferenca && (
                            <AnimatePresence>
                                <motion.p
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-base font-montserrat font-light">
                                    Tendo como lema a frase “AMOR É A NOSSA RAZÃO, ENTREGA É A NOSSA RESPOSTA” e "MAKE A DIFFERENCE", através do cuidado individual 
                                    com cada membro da igreja através de uma rede bem planejada e fortalecida, alicerçada na Palavra de Deus, 
                                    todos os líderes são ensinados a amar os perdidos, de forma a se doar para que cada pessoa que entra em uma 
                                    célula ou na igreja não saiam sem se sentirem queridos pelo próprio Deus. ADAC fez de cada casa aberta para 
                                    uma célula, uma igreja e de cada crente disposto, um ministro do evangelho e por isso tem crescido em números, 
                                    mas principalmente na qualidade no que se diz respeito a Igreja de Jesus na Terra.
                                </motion.p>
                            </AnimatePresence>
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}