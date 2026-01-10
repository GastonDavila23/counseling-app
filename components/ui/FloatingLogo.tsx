'use client';

import { useState } from 'react';
import Image from 'next/image';

const LOGO_PATH = '/logo.png';
const COUNSELOR_NAME = "Gisela Pontoni";

export default function FloatingLogo() {
  const [isOpen, setIsOpen] = useState(false);

  const counselingText = "El Counseling es una profesión de ayuda que facilita procesos de cambio y despliegue personal. Te acompaño a resolver conflictos, gestionar emociones y promover tu bienestar y desarrollo humano en un espacio seguro y empático.";

  return (
    <>
      {/* --- EL LOGO FLOTANTE (BOTÓN) --- */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          hidden
          fixed bottom-0 -translate-y-1/2 right-2 z-40
          w-24 h-24 rounded-full 
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          border border-white/50 dark:border-gray-700/50
          transition-all duration-300 
          hover:scale-110 hover:-rotate-6 hover:shadow-xl
          md:flex items-center justify-center
          group overflow-hidden p-1
        `}
        aria-label="Ver información de la profesional"
      >
        {/* Contenedor relativo para la imagen con 'fill' */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={LOGO_PATH}
            alt="Logo Pequeño"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm font-medium pointer-events-none">
          ¿Quién soy?
        </span>
      </button>

      {/* --- MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Tarjeta de Contenido */}
          <div className="relative bg-white/95 dark:bg-gray-900/95 rounded-3xl shadow-2xl w-full max-w-md p-8 text-center border border-gray-100/50 dark:border-concounseling backdrop-blur-md animate-in zoom-in-95 duration-300">

            {/* Contenido Principal */}
            <div className="flex flex-col items-center space-y-5">

              {/* 1. Logo Grande */}
              <div className="relative w-32 h-32 bg-counseling-light dark:bg-rose-950/30 rounded-full flex items-center justify-center mb-2 shadow-inner p-2 overflow-hidden border-4 border-white dark:border-gray-800">
                <Image
                  src={LOGO_PATH}
                  alt="Logo Grande Counselor"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 2. Nombre y Título */}
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {COUNSELOR_NAME}
                </h2>
                <div className="inline-block border-2 border-counseling px-3 py-1 rounded-full">
                  <p className="text-counseling-dark dark:text-rose-300 font-semibold tracking-wider uppercase text-xs">
                    Counselor Profesional
                  </p>
                </div>
              </div>

              <hr className="w-20 border-t-2 border-gray-100 dark:border-gray-800 my-2" />

              {/* 3. Texto Explicativo */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                {counselingText}
              </p>

              {/* Botón de acción */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-2.5 font-medium rounded-full text-sm transition-all shadow-md 
                
                /* Light Mode */
                bg-counseling text-white hover:text-white hover:shadow-lg active:scale-95

                /* Dark Mode */
                dark:bg-counseling-dark text-black dark:hover:bg-counseling-light"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}