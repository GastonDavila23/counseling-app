"use client";

import { X } from "lucide-react";

interface Service {
    title: string;
    description: string;
    details: string;
}

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    if (!isOpen || !service) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/*CONTENIDO DEL MODAL */}
            <div
                className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 transition-colors"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Botón Cerrar (X) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 pt-10 text-center">
                    {/* Título: Violeta Oscuro vs Blanco */}
                    <h3 className="text-2xl md:text-3xl font-bold text-counseling-dark dark:text-white font-serif mb-4 transition-colors">
                        {service.title}
                    </h3>

                    {/* Descripción Corta: Verde Accent */}
                    <p className="text-accent dark:text-accent-400 font-medium mb-6 transition-colors">
                        {service.description}
                    </p>

                    {/* Detalles (Texto principal): Gris medio vs Gris claro */}
                    <div className="text-gray dark:text-gray-300 leading-relaxed space-y-4 text-left border-t border-gray-100 dark:border-gray-800 pt-6 transition-colors">
                        <p>{service.details}</p>
                    </div>

                    {/* Botón de Acción */}
                    <div className="mt-8 pt-6">
                        <button
                            onClick={() => {
                                onClose();
                                document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="
                                w-full py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300
                                
                                /* Light Mode: Botón Violeta Oscuro */
                                bg-counseling-dark text-white hover:bg-counseling-dark/90
                                
                                /* Dark Mode: Botón Lila Brillante (Resalta sobre fondo oscuro) */
                                dark:bg-counseling dark:text-black dark:hover:bg-counseling/90
                            "
                        >
                            Reservar espacio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}