"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaRegClock, FaLocationDot } from "react-icons/fa6";

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
    title: "CURSO DE FORMAÇÃO DE LÍDERES",
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

export function Event() {
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
              src={selectedEvent.banner}
              alt={selectedEvent.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Informações */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-20 flex flex-col justify-center h-full px-8 text-white"
          >
            <h1 className="text-4xl font-bold font-montserrat mb-4">{selectedEvent.title}</h1>

            <p className="max-w-md mb-6 font-normal font-manrope">{selectedEvent.description}</p>

            <div className="flex items-center gap-2 mb-3">
              <FaLocationDot />
              <span className="font-normal font-manrope">{selectedEvent.location}</span>
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span className="font-normal font-manrope">{selectedEvent.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegClock />
                <span>{selectedEvent.time}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carrossel */}
        <div
          ref={containerRef}
          className="absolute bottom-6 right-6 z-30 max-w-[40%] overflow-hidden px-3 py-3"
        >
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{
              left: -dragWidth,
              right: 0,
            }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {events.map((event) => (
              <motion.button
                key={event.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(event)}
                className={`
                  relative min-w-36 h-48 rounded-lg overflow-hidden shrink-0
                  transition-all duration-300
                  ${
                    selectedEvent.id === event.id
                      ? "ring-2 ring-white"
                      : ""
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
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}