"use client"; // IMPORTANTE: Esto habilita la interactividad

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function BookingModal({ isOpen, onClose, url }: BookingModalProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("root") || document.body);
  }, []);

  if (!rootElement) return null;

  return (
    <PopupModal
      url={url}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "5C8D73", // Color verde de tu marca (ajústalo si quieres)
        textColor: "4d5055",
      }}
      rootElement={rootElement}
      open={isOpen}
      onModalClose={onClose}
    />
  );
}