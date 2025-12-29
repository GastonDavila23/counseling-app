"use client";

import { PopupModal } from "react-calendly";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function BookingModal({ isOpen, onClose, url }: BookingModalProps) {
  const { resolvedTheme } = useTheme(); // Detectamos el tema activo
  const [mounted, setMounted] = useState(false);

  // Esperamos a que el componente se monte para evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof window === "undefined") return null;

  const isDark = resolvedTheme === "dark";

  return (
    <PopupModal
      url={url}
      pageSettings={{
        // Negro Azulado (#0f172a) en Dark vs Blanco (#ffffff) en Light
        backgroundColor: isDark ? "0f172a" : "ffffff", 
        
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        
        // Tu nuevo color Accent (#469d85)
        primaryColor: "469d85", 
        
        // Lavanda muy claro (#eff0ff) en Dark vs Gris oscuro (#4d5055) en Light
        textColor: isDark ? "eff0ff" : "4d5055", 
      }}
      rootElement={document.getElementById("root") || document.body}
      open={isOpen}
      onModalClose={onClose}
    />
  );
}