import { Heart, Users, Monitor } from "lucide-react";

export const servicesData = [
  {
    title: "Counseling Individual",
    description: "Un espacio confidencial para explorar tus emociones, superar crisis y trabajar en tu desarrollo personal.",
    icon: <Heart className="w-8 h-8 text-counseling-500" />,
  },
  {
    title: "Orientación Familiar",
    description: "Herramientas para mejorar la comunicación y resolver conflictos dentro del núcleo familiar o de pareja.",
    icon: <Users className="w-8 h-8 text-counseling-500" />,
  },
  {
    title: "Sesiones Online",
    description: "La misma cercanía y profesionalismo, pero desde la comodidad de tu hogar. Ideal si tienes horarios complicados.",
    icon: <Monitor className="w-8 h-8 text-counseling-500" />,
  },
];