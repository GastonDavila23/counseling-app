"use client"; // <--- 1. Convertimos a Client Component

import { useState } from "react";
import { Check } from "lucide-react";
import { pricingData } from "@/data/pricing";
import BookingModal from "../ui/BookingModal"; // Importamos el modal nuevo

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  // Función para abrir el modal con el link correcto
  const handleBooking = (url: string) => {
    // Si el link es de Calendly, abrimos el modal
    if (url.includes("calendly")) {
      setSelectedUrl(url);
      setIsModalOpen(true);
    } else {
      // Si es un link a WhatsApp u otro lado, abrimos pestaña nueva normal
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-20 bg-counseling-50" id="agendar">
      
      {/* El Componente Modal (Invisible hasta que se active) */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        url={selectedUrl} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-counseling-900 sm:text-4xl">
            Invierte en tu bienestar
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Elige la modalidad que mejor se adapte a tu momento actual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular 
                  ? "border-2 border-accent-500 shadow-xl scale-105 z-10" 
                  : "border border-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Más elegido
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-counseling-900">{plan.title}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-counseling-900">{plan.price}</span>
                  <span className="ml-2 text-gray-500">/ {plan.duration}</span>
                </div>
                <p className="mt-4 text-gray-500">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-counseling-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {/* 2. CAMBIO IMPORTANTE: Usamos un botón onClick en vez de <a> */}
                <button
                  onClick={() => handleBooking(plan.buttonLink)}
                  className={`block w-full text-center px-6 py-4 rounded-lg text-lg font-bold transition-colors ${
                    plan.isPopular
                      ? "bg-accent-500 hover:bg-accent-600 text-white"
                      : "bg-counseling-100 text-counseling-700 hover:bg-counseling-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
                
                <p className="mt-4 text-center text-sm text-gray-400">
                  Reserva segura vía Calendly
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}