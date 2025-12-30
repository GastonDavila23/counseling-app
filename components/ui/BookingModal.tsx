"use client";

import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check, Copy, MessageCircle, X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function BookingModal({ isOpen, onClose, url }: BookingModalProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  // DATOS DE PAGO (Edítalos aquí si cambian)
  const ALIAS_MP = "gisepontoni96"; 
  const WHATSAPP_NUMBER = "5492634632372";
  const WHATSAPP_MSG = "Hola Gisela, te envío el comprobante de la reserva!";

  useEffect(() => {
    setMounted(true);
  }, []);

  // ESCUCHAMOS CUANDO EL USUARIO TERMINA DE RESERVAR
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // 1. Ocultamos el calendario
      // 2. Mostramos la pantalla de pago nuestra
      setShowPayment(true);
    },
  });

  // Función para resetear todo al cerrar definitivamente
  const handleFinalClose = () => {
    setShowPayment(false);
    onClose();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ALIAS_MP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted || typeof window === "undefined") return null;

  const isDark = resolvedTheme === "dark";

  // --- ESCENARIO 1: PANTALLA DE ÉXITO Y PAGO (Nuestra, Custom) ---
  if (showPayment) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-300">
          
          {/* Encabezado Verde Éxito */}
          <div className="bg-green-100 dark:bg-green-900/30 p-6 text-center border-b border-green-200 dark:border-green-800">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
              <Check className="w-8 h-8 text-white stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 font-serif">¡Reserva Exitosa!</h3>
            <p className="text-green-600 dark:text-green-300/80 text-sm mt-1">El turno ya está bloqueado para vos.</p>
          </div>

          {/* Cuerpo: Instrucciones de Pago */}
          <div className="p-6 space-y-6">
            
            <div className="text-center space-y-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                Para confirmar definitivamente, por favor aboná la seña o el total y enviá el comprobante.
              </p>
            </div>

            {/* Caja de Alias (Copiar) */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex items-center justify-between group">
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Alias Mercado Pago</p>
                <p className="font-mono text-lg font-bold text-gray-800 dark:text-white">{ALIAS_MP}</p>
              </div>
              <button 
                onClick={copyToClipboard}
                className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 hover:text-counseling-600 hover:shadow-sm"
                title="Copiar Alias"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Botón WhatsApp */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar Comprobante
            </a>

            <button 
              onClick={handleFinalClose}
              className="w-full py-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 text-sm font-medium transition-colors"
            >
              Cerrar y volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- ESCENARIO 2: CALENDLY NORMAL ---
  return (
    <PopupModal
      url={url}
      pageSettings={{
        backgroundColor: isDark ? "0f172a" : "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "469d85",
        textColor: isDark ? "eff0ff" : "4d5055",
      }}
      rootElement={document.getElementById("root") || document.body}
      open={isOpen && !showPayment}
      onModalClose={onClose}
    />
  );
}