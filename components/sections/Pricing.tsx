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
    <section className="py-20 bg-counseling-50 min-h-screen flex items-center" id="agendar">
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        url={selectedUrl} 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-counseling-900 sm:text-4xl font-serif">
            Modalidades de atención
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Elige el espacio que resuene con tu momento actual
          </p>
        </div>

        {/* CAMBIO AQUÍ: max-w-4xl (para que no se estiren tanto) y grid-cols-2 */}
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