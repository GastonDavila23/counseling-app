"use client";

import { useState } from "react";
import { processData } from "@/data/process";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < processData.length - 1;
  const handlePrev = () => {
    if (canGoPrev) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setActiveIndex((prev) => prev + 1);
  };

  const currentProcess = processData[activeIndex];

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-white md:bg-counseling-light dark:bg-black relative overflow-hidden scroll-mt-20 transition-colors duration-500"
      id="mi-enfoque"
    >
      {/* Fondos decorativos */}
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-counseling dark:bg-counseling-dark/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob transition-colors duration-500"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-64 h-64 bg-accent-light dark:bg-accent-dark/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-8 md:mb-16">
          {/* --- BADGE / ETIQUETA --- */}
          <span className="hidden md:inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-900 border border-counseling dark:border-gray-700 text-counseling-dark dark:text-counseling text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Proceso de Acompañamiento
          </span>
          {/* TITULO */}
          <h2 className="text-3xl md:text-4xl font-bold text-counseling-dark dark:text-white font-serif transition-colors">
            ¿Cómo trabajaremos juntos?
          </h2>
        </div>

        {/* --- CONTENEDOR PRINCIPAL --- */}
        <div className="relative max-w-5xl mx-auto">

          {/* ==============================================
              BOTÓN IZQUIERDO (Desktop)
             ============================================== */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`
              absolute -left-16 lg:-left-24 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full shadow-lg transition-all duration-300
              
              /* Light Mode */
              bg-white text-counseling-dark border border-gray-100 hover:bg-counseling-light hover:text-counseling

              /* Dark Mode */
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white

              /* Lógica de visibilidad */
              ${!canGoPrev ? "opacity-0 invisible" : "opacity-100 visible"} 
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* ==============================================
              TARJETA CENTRAL
             ============================================== */}
          <div className="flex-row h-[320px] bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 md:border-none shadow-sm md:shadow-xl overflow-hidden flex flex-col md:flex-row h-[420px] md:h-auto md:min-h-[450px] animate-in fade-in duration-500 transition-colors duration-300">

            {/* Icono Grande Izquierda */}
            <div className="hidden md:flex bg-counseling-dark w-1/3 flex-col items-center justify-center p-8 text-white relative overflow-hidden">
              {/* ... decoración ... */}
              <div className="relative z-10 bg-white/20 p-6 rounded-full mb-6 backdrop-blur-sm shadow-inner">
                {currentProcess.icon}
              </div>
              <span className="text-6xl font-serif font-bold opacity-30 select-none">
                0{currentProcess.id}
              </span>
            </div>

            {/* Contenido Derecha */}
            <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-center relative h-full">

              {/* Header Mobile */}
              <div className="md:hidden flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-counseling dark:text-counseling-light tracking-widest uppercase">
                  Paso 0{currentProcess.id}
                </span>
              </div>

              <h4 className="text-xl md:text-3xl font-bold text-counseling-dark dark:text-white mb-3 md:mb-6 font-serif transition-colors">
                {currentProcess.title}
              </h4>

              <div className="relative mb-2 md:mb-0">
                <Quote className="hidden md:block absolute -top-4 -left-2 w-10 h-10 text-accent dark:text-accent-dark opacity-40 transform -scale-x-100 transition-colors" />
                <p className="text-base md:text-lg text-gray dark:text-gray-300 leading-relaxed pl-0 md:pl-6 relative z-10 transition-colors">
                  {currentProcess.description}
                </p>
              </div>

              {/* PAGINACIÓN (Puntitos) */}
              <div className="hidden md:flex gap-2 mt-auto pt-8">
                {processData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                        ? "w-8 bg-counseling-dark dark:bg-counseling"
                        : "w-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ==============================================
              BOTÓN DERECHO (Desktop)
             ============================================== */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`
              absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full shadow-lg transition-all duration-300

              bg-white text-counseling-dark border border-gray-100 hover:bg-counseling-light hover:text-counseling
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white

              ${!canGoNext ? "opacity-0 invisible" : "opacity-100 visible"}
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* ==============================================
              CONTROLES MÓVILES
             ============================================== */}
          <div className="flex md:hidden justify-between items-center mt-6 px-4">

            {/* Botón Prev Mobile (condicional igual que desktop) */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`
                p-3 rounded-full bg-white dark:bg-gray-900 text-counseling-dark dark:text-white shadow-md border border-gray-100 dark:border-gray-800 active:scale-95 transition-all
                ${!canGoPrev ? "opacity-50 grayscale cursor-not-allowed" : ""}
              `}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Puntos Mobile */}
            <div className="flex gap-2">
              {processData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-counseling-dark dark:bg-counseling" : "w-2 bg-gray-300 dark:bg-gray-700"
                    }`}
                />
              ))}
            </div>

            {/* Botón Next Mobile */}
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`
                p-3 rounded-full bg-white dark:bg-gray-900 text-counseling-dark dark:text-white shadow-md border border-gray-100 dark:border-gray-800 active:scale-95 transition-all
                ${!canGoNext ? "opacity-50 grayscale cursor-not-allowed" : ""}
              `}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}