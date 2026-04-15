"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaRegClock, FaLocationDot } from "react-icons/fa6";
import styles from './styles.module.css'

import banner1 from "../../../../public/assets/BANNER 1.png";
import banner2 from "../../../../public/assets/BANNER 2.png";

const events = [
  {
    id: 1,
    title: "CINE ADAC",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    location: "Rua Exemplo, 123 - São Paulo/SP",
    date: "15/06/2026",
    time: "19:00",
    banner: banner1,
  },
  {
    id: 2,
    title: "CURSO DE FORMAÇÃO DE LÍDERES - CFL 21",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    location: "Rua Central, 456 - São Paulo/SP",
    date: "20/06/2026",
    time: "20:00",
    banner: banner2,
  },
  {
    id: 3,
    title: "NOITE DE ADORAÇÃO",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    location: "Av. Louvor, 89 - São Paulo/SP",
    date: "25/06/2026",
    time: "19:30",
    banner: banner1,
  },
  {
    id: 4,
    title: "CONFERÊNCIA DE JOVENS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    location: "Rua Juventude, 321 - São Paulo/SP",
    date: "28/06/2026",
    time: "18:00",
    banner: banner2,
  },
  {
    id: 5,
    title: "VIGÍLIA DE ORAÇÃO",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    location: "Rua Esperança, 654 - São Paulo/SP",
    date: "02/07/2026",
    time: "23:00",
    banner: banner1,
  },
];

export function BannerEvent() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const calculateDrag = () => {
      if (containerRef.current && carouselRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const carouselWidth = carouselRef.current.scrollWidth;

        setDragWidth(carouselWidth - containerWidth);
      }
    };

    calculateDrag();

    window.addEventListener("resize", calculateDrag);

    return () => window.removeEventListener("resize", calculateDrag);
  }, []);

  if (events.length === 0) {
    return (
      <section className="max-w-6xl w-full mx-auto mt-16">
        <div className="relative w-full h-137.5 rounded-xl overflow-hidden">
          <Image src={banner1} alt="Sem eventos" fill className="object-cover" />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-5xl text-white font-montserrat">
              Novos Eventos em Breve
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl w-full flex mx-auto mt-16 gap-6 flex-col mb-20
    md:flex-row md:max-w-6xl">
        {/* BANNER */}
        <div className="relative w-[95%] mx-auto border flex-1 h-[850px] rounded-xl overflow-hidden p-6 
        md:px-8 md:h-[550px] md:w-full md:mx-0">

            <AnimatePresence mode="wait">
            <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
            >
                <Image
                src={selectedEvent.banner}
                alt={selectedEvent.title}
                fill
                className="object-cover"
                />
            </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Infos */}
            <div className="relative z-20 flex flex-col justify-center h-full px-8 text-white">
            <h1 className="text-2xl font-bold mb-4 md:text-4xl">{selectedEvent.title}</h1>
            <p className="max-w-md mb-6">{selectedEvent.description}</p>

            <div className="flex items-center gap-2 mb-3">
                <FaLocationDot />
                <span>{selectedEvent.location}</span>
            </div>

            <div className="flex gap-8">
                <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{selectedEvent.date}</span>
                </div>

                <div className="flex items-center gap-2">
                <FaRegClock />
                <span>{selectedEvent.time}</span>
                </div>
            </div>
            </div>
        </div>

        {/* LISTA LATERAL (EVENTOS) */}
        <div className={`${styles.customScroll} w-80 h-[100px] overflow-y-auto my-auto mx-auto flex flex-row items-center ${events.length > 5 ? `justify-center` : `justify-start`} gap-6 pr-2 p-2
        md:flex-col md:w-32 md:h-[400px] md:mx-0`}>

            {events.map((event) => (
            <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`
                relative w-24 h-18 rounded-lg overflow-hidden
                transition-all duration-300 shrink-0 border
                md:w-24 md:h-16
                ${
                    selectedEvent.id === event.id
                    ? "ring-2 ring-white scale-105"
                    : "opacity-70 hover:opacity-100"
                }
                `}
            >
                <Image
                src={event.banner}
                alt={event.title}
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </button>
            ))}
        </div>
    </section>
  );
}