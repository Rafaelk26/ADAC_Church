"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaRegClock, FaLocationDot } from "react-icons/fa6";
import { Eventos } from "@/types/types";
import { fetchAllEventos } from "@/functions/GET/fetchAllEventos";
import { formatDate } from "@/functions/ALL/formatDate";
import { formatHour } from "@/functions/ALL/formatHour";

import banner from "../../../../public/assets/backgroundAdmin.png";
import banner2 from "../../../../public/assets/BANNER 2.png";
import styles from './styles.module.css'


export function BannerEvent() {
  const [events, setEvents] = useState<Eventos[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Eventos | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [dragWidth, setDragWidth] = useState(0);

  function getImageSrc(foto: string | StaticImageData | File | null | undefined): string | StaticImageData {
    if (!foto) return banner2;

    if (foto instanceof File) {
      return URL.createObjectURL(foto);
    }

    return foto;
  }

  useEffect(() => {
    if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, [events]);

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

  // Carrega e insere no state "setEvents" os ministerios do banco resgatados
  useEffect(() => {
      fetchAllEventos().then((data) => {
      setEvents(Array.isArray(data) ? data : []);
  });
  }, []);

    
    if (events.length === 0) {
      return (
        <section className="max-w-6xl w-full mx-auto mt-16">
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
          <Image src={banner} alt="Sem eventos" fill className="object-cover" />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-lg text-white font-montserrat md:text-3xl">
              Novos eventos em breve
            </h1>
          </div>
        </div>
      </section>
    );
  }

  if (!selectedEvent) return null;
  
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
                src={getImageSrc(selectedEvent.fotoEvento)}
                alt={selectedEvent.nomeEvento}
                fill
                className="object-cover"
                />
            </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Infos */}
            <div className="relative z-20 flex flex-col justify-center h-full px-8 text-white">
            <h1 className="text-2xl font-bold mb-4 md:text-4xl">{selectedEvent.nomeEvento}</h1>
            <p className="max-w-md mb-6">{selectedEvent.descricaoEvento}</p>

            <div className="flex items-center gap-2 mb-3">
                <FaLocationDot />
                <span>{selectedEvent.localEvento}</span>
            </div>

            <div className="flex gap-8">
                <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{formatDate(selectedEvent.dataEvento)}</span>
                </div>

                <div className="flex items-center gap-2">
                <FaRegClock />
                <span>{formatHour(selectedEvent.horaEvento)}</span>
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
                src={getImageSrc(event.fotoEvento)}
                alt={event.nomeEvento}
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