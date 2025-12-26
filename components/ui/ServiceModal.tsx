"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        details: string;
        icon: React.ReactNode;
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    const handleAgendarClick = () => {
        onClose();
        const pricingSection = document.getElementById("agendar");
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-in zoom-in-95 duration-200">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-counseling-50 rounded-full mb-4">
                        {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-counseling-900 mb-4">
                        {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {service.details}
                    </p>

                    <button
                        onClick={handleAgendarClick}
                        className="w-full bg-accent-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        Solicitar Turno para esto
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    );
}