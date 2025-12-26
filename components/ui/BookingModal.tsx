"use client";

import { PopupModal } from "react-calendly";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function BookingModal({ isOpen, onClose, url }: BookingModalProps) {
  if (typeof window === "undefined") return null;

  return (
    <PopupModal
      url={url}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "5C8D73",
        textColor: "4d5055",
      }}
      rootElement={document.getElementById("root") || document.body}
      open={isOpen}
      onModalClose={onClose}
    />
  );
}