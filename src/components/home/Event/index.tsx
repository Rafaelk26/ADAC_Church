"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaRegClock, FaLocationDot } from "react-icons/fa6";
import { fetchAllEventos } from "@/functions/GET/fetchAllEventos";
import { Eventos } from "@/types/types";
import { formatDate } from "@/functions/ALL/formatDate";
import { formatHour } from "@/functions/ALL/formatHour";

import banner from "../../../../public/assets/backgroundAdmin.png";
import banner2 from "../../../../public/assets/BANNER 2.png";

export function Event() {

  const [events, setEvents] = useState<Eventos[]>([]);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

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
        // Evita valores negativos se o conteúdo for menor que o container
        setDragWidth(Math.max(0, carouselWidth - containerWidth));
      }
    };

    // Pequeno delay para garantir que o DOM renderizou as imagens dos cards
    const timer = setTimeout(calculateDrag, 100);

    window.addEventListener("resize", calculateDrag);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateDrag);
    };
  }, [events]);

  // Carrega e insere no state "setEvents" os ministerios do banco resgatados
  useEffect(() => {
      fetchAllEventos().then((data) => {
      setEvents(Array.isArray(data) ? data : []);
  });
  }, []);

  if (events.length === 0) {
    return (
      <section className="max-w-6xl w-full mx-auto mt-16">
        <div className="relative w-full h-137.5 rounded-xl overflow-hidden">
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
    <section className="max-w-6xl w-full mx-auto mt-16">
      <div className="relative w-full h-137.5 rounded-xl overflow-hidden">

        {/* Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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

        {/* Informações */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent.nomeEvento}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-20 flex flex-col justify-center h-full px-8 text-white"
          >
            <h1 className="text-4xl font-bold font-montserrat mb-4">{selectedEvent.nomeEvento}</h1>

            <p className="max-w-md mb-6 font-normal font-manrope">{selectedEvent.descricaoEvento}</p>

            <div className="flex items-center gap-2 mb-3">
              <FaLocationDot />
              <span className="font-normal font-manrope">{selectedEvent.localEvento}</span>
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span className="font-normal font-manrope">{formatDate(selectedEvent.dataEvento)}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegClock />
                <span>{formatHour(selectedEvent.horaEvento)}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carrossel */}
        <div
          ref={containerRef}
          className="absolute bottom-6 right-6 z-30 max-w-[40%] md:max-w-[40%] w-full overflow-hidden px-3 py-3"
        >
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{
              left: -dragWidth,
              right: 0,
            }}
            className="flex gap-4 cursor-grab active:cursor-grabbing w-max snap-x snap-mandatory"
          >
            {events.map((event) => (
              <motion.button
                key={event.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(event)}
                className={`
                  relative w-30 h-32 rounded-lg overflow-hidden shrink-0
                  transition-all duration-300 snap-start
                  ${
                    selectedEvent.id === event.id
                      ? "ring-2 ring-white"
                      : ""
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
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}