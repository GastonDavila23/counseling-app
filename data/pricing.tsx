import { Video, MapPin } from "lucide-react";

export const pricingData = [
  {
    title: "Sesión Online",
    price: "$15.000",
    duration: "60 minutos",
    description: "Un espacio de acompañamiento para que puedas conectar desde la comodidad de tu casa o el lugar donde te encuentres.",
    features: [
      "Encuentro mediante videollamada (Google Meet).",
      "Facilidad de acceso sin necesidad de traslados.",
      "Continuidad del proceso desde cualquier ubicación.",
      "Espacio de confidencialidad y respeto absoluto."
    ],
    buttonText: "Reservar Online",
    buttonLink: "https://calendly.com/gisela-pontoni-96/sesion-individual",
    isPopular: false,
    icon: <Video className="w-8 h-8 text-counseling-500" />,
  },
  {
    title: "Sesión Presencial",
    price: "$15.000",
    duration: "60 minutos",
    description: "Te espero en mi consultorio de San Martín para habitar un espacio de calma, escucha y trabajo compartido.",
    features: [
      "Presencia y vínculo cara a cara.",
      "Ambiente de calma y calidez.",
      "Privacidad y confidencialidad absoluta.",
      "Comunicación fluida y sin interrupciones técnicas."
    ],
    buttonText: "Reservar Presencial",
    buttonLink: "https://calendly.com/gisela-pontoni-96/sesion-individual",
    isPopular: false,
    icon: <MapPin className="w-8 h-8 text-counseling-500" />,
  }
];