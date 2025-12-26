import { Video, MapPin } from "lucide-react";

export const pricingData = [
  {
    title: "Sesión Online",
    price: "$25.000",
    duration: "60 minutos",
    description: "Conéctate desde la comodidad de tu casa. Ideal para optimizar tiempos.",
    features: [
      "Encuentro por Google Meet",
      "Sin tiempos de traslado",
      "Horarios flexibles",
      "Espacio 100% confidencial"
    ],
    buttonText: "Reservar Online",
    buttonLink: "https://calendly.com/gastonn520/60min",
    isPopular: false,
    icon: <Video className="w-8 h-8 text-counseling-500" />,
  },
  {
    title: "Sesión Presencial",
    price: "$25.000",
    duration: "60 minutos",
    description: "Encuentro cara a cara en consultorio ubicado en San Martín, Mendoza.",
    features: [
      "Atención en consultorio físico",
      "Ambiente preparado y seguro",
      "Contacto directo",
      "Pago en efectivo o transferencia"
    ],
    buttonText: "Reservar Presencial",
    buttonLink: "https://calendly.com/gastonn520/60min",
    isPopular: false,
    icon: <MapPin className="w-8 h-8 text-counseling-500" />,
  }
];