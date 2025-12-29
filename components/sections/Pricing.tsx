"use client";

import { useState } from "react";
import { pricingData } from "@/data/pricing";
import PricingCard from "../ui/PricingCard";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("../ui/BookingModal"), {
  ssr: false,
});

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const handleBooking = (url: string) => {
    if (url.includes("calendly")) {
      setSelectedUrl(url);
      setIsModalOpen(true);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section
      className="py-20 bg-counseling-light dark:bg-black min-h-screen flex items-center transition-colors duration-500"
      id="agendar"
    >
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={selectedUrl}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* --- BADGE / ETIQUETA --- */}
          <span className="hidden md:inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-900 border border-counseling dark:border-gray-700 text-counseling-dark dark:text-counseling text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            Reserva tu espacio
          </span>
          {/* Título: Violeta oscuro vs Blanco */}
          <h2 className="text-3xl font-bold text-counseling-dark dark:text-white sm:text-4xl font-serif transition-colors">
            Modalidades de atención
          </h2>
          {/* Subtítulo: Gris medio vs Gris claro */}
          <p className="mt-3 text-lg text-gray dark:text-gray-400 transition-colors">
            Elige el espacio que resuene con tu momento actual
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              onSelect={handleBooking}
            />
          ))}
        </div>
      </div>
    </section>
  );
}