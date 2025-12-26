"use client"; // Convertimos a Client Component para la interactividad

import { useState } from "react";
import { servicesData } from "@/data/services";
import ServiceModal from "../ui/ServiceModal"; // Importamos el modal nuevo

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof servicesData[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-white min-h-screen flex items-center" id="servicios">
      
      {/* El Modal (invisible hasta que se active) */}
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-counseling-900 sm:text-4xl">
            ¿Cómo puedo acompañarte?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Espacios diseñados para abordar tus necesidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)} // Hacemos clicable toda la tarjeta
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decoración visual al hacer hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              <div className="w-12 h-12 bg-counseling-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-counseling-100 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-counseling-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-4">
                {service.description}
              </p>

              <span className="text-accent-500 font-semibold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Ver más detalles →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}