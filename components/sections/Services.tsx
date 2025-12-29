"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceModal from "../ui/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<(typeof servicesData)[0] | null>(null);

  // --- Lógica Desktop (Grid de 3) ---
  const [desktopIndex, setDesktopIndex] = useState(0);
  const itemsPerPageDesktop = 3;
  const canGoNextDesktop = desktopIndex + itemsPerPageDesktop < servicesData.length;
  const canGoPrevDesktop = desktopIndex > 0;

  const nextSlideDesktop = () => { if (canGoNextDesktop) setDesktopIndex(prev => prev + 1); };
  const prevSlideDesktop = () => { if (canGoPrevDesktop) setDesktopIndex(prev => prev - 1); };

  const visibleServicesDesktop = servicesData.slice(desktopIndex, desktopIndex + itemsPerPageDesktop);

  // --- Lógica Mobile (Grid de 1) ---
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextSlideMobile = () => {
    setMobileIndex(prev => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };
  const prevSlideMobile = () => {
    setMobileIndex(prev => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-counseling-light dark:bg-black scroll-mt-20 transition-colors duration-500"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          {/* --- BADGE / ETIQUETA --- */}
          <span className="hidden md:inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-900 border border-counseling dark:border-gray-700 text-counseling-dark dark:text-counseling text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Acompañamiento
          </span>

          {/* TITULO */}
          <h2 className="text-3xl md:text-4xl font-bold text-counseling-dark dark:text-white font-serif mb-4 transition-colors">
            Espacios diseñados para tu bienestar
          </h2>

          {/* DESCRIPCION */}
          <p className="text-lg text-gray dark:text-gray-400 transition-colors">
            Diferentes abordajes para acompañarte en el momento que estés transitando.
          </p>
        </div>

        {/* =========================================
            VISTA DESKTOP (PC: Grid de 3)
           ========================================= */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Botón Izquierdo Desktop */}
          <button
            onClick={prevSlideDesktop}
            disabled={!canGoPrevDesktop}
            className={`
              absolute -left-16 lg:-left-24 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full shadow-lg transition-all duration-300
              
              /* Light Mode */
              bg-white text-counseling-dark border border-gray-100 hover:bg-counseling-light hover:text-counseling
              
              /* Dark Mode */
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white

              ${!canGoPrevDesktop ? "opacity-0 invisible" : "opacity-100 visible"} 
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {visibleServicesDesktop.map((service) => (
              <div
                key={service.title}
                // Card Container: Blanco (Light) / Gris Oscuro (Dark)
                className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer
                  
                  
                  /* Light Mode */
                  bg-white border border-gray-100

                  /* Dark Mode */
                  dark:bg-gray-900 dark:border-gray-800 dark:hover:border-counseling-dark"
                onClick={() => setSelectedService(service)}
              >
                {/* TITULO*/}
                <h4 className="text-xl font-bold text-counseling-dark dark:text-white mb-3 font-serif mt-2 transition-colors">
                  {service.title}
                </h4>

                {/* DESCRIPCION */}
                <p className="text-gray dark:text-gray-300 leading-relaxed mb-6 flex-grow line-clamp-4 transition-colors">
                  {service.description}
                </p>

                {/* PIE DE TARJETA */}
                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
                  <span className="group-hover:underline decoration-2 underline-offset-4 transition-colors
                  
                  /* Light Mode */
                  text-sm font-bold text-accent
                  
                  /* Dark Mode */
                  dark:text-accent-400"
                  >
                    Ver detalles →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Derecho Desktop */}
          <button
            onClick={nextSlideDesktop}
            disabled={!canGoNextDesktop}
            className={`
              absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full shadow-lg transition-all duration-300

              /* Light Mode */
              bg-white text-counseling-dark border border-gray-100 hover:bg-counseling-light hover:text-counseling
              
              /* Dark Mode */
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white

              ${!canGoNextDesktop ? "opacity-0 invisible" : "opacity-100 visible"}
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Barra de Progreso Desktop */}
          <div className="flex justify-center mt-10">
            <div className="h-1.5 w-48 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
              <div
                className="absolute h-full bg-accent dark:bg-accent-500 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(itemsPerPageDesktop / servicesData.length) * 100}%`,
                  left: `${(desktopIndex / servicesData.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* =========================================
            VISTA MOBILE (Celular: Carrusel de 1)
           ========================================= */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div
            className="
              rounded-2xl p-5 flex flex-col min-h-[220px] cursor-pointer transition-all active:scale-[0.98]
              bg-white shadow-sm border border-gray-200
              dark:bg-gray-900 dark:border-gray-800 dark:shadow-none
            "
            onClick={() => setSelectedService(servicesData[mobileIndex])}
          >
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-counseling-dark dark:text-white mb-2 font-serif transition-colors">
                {servicesData[mobileIndex].title}
              </h4>
              <p className="text-gray dark:text-gray-300 leading-relaxed text-sm transition-colors">
                {servicesData[mobileIndex].description}
              </p>
            </div>

            {/* Pie de tarjeta */}
            <div className="pt-3 mt-3 border-t border-gray-50 dark:border-gray-800 flex justify-end">
              <span className="text-xs font-bold text-accent dark:text-accent-400 uppercase tracking-wide">
                Ver detalles →
              </span>
            </div>
          </div>

          {/* Controles Mobile Debajo */}
          <div className="flex justify-between items-center mt-4 px-2">
            <button
              onClick={prevSlideMobile}
              className="p-3 rounded-full shadow-md active:scale-95 transition-transform bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-counseling-dark dark:text-gray-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-medium bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-500 px-3 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-800">
              {mobileIndex + 1} / {servicesData.length}
            </span>

            <button
              onClick={nextSlideMobile}
              className="p-3 rounded-full shadow-md active:scale-95 transition-transform bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-counseling-dark dark:text-gray-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService!}
      />
    </section>
  );
}