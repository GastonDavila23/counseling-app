"use client";

import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function SocialSidebar() {
    const phoneNumber = "5492634632372";
    const emailAddress = "gisela.pontoni.96@gmail.com";
    const instagramUser = "gisela_pontoni";

    const whatsappMessage = "Hola Gisela, vi tu web y me gustaría solicitar información sobre las sesiones de Counseling.";
    const emailSubject = "Consulta sobre Sesiones de Counseling";
    const emailBody = "Hola Gisela,\n\nMi nombre es [Mi Nombre] y me gustaría solicitarte información sobre las consultas.\n\n¡Gracias!";

    const socialLinks = [
        {
            name: "WhatsApp",
            icon: <MessageCircle className="w-6 h-6" />,
            url: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            color: "hover:bg-[#25D366]",
            bg: "bg-green-100 text-green-600",
            borderColor: "border-green-200"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-6 h-6" />,
            url: `https://instagram.com/${instagramUser}`,
            color: "hover:bg-[#E1306C]",
            bg: "bg-pink-100 text-pink-600",
            borderColor: "border-pink-200"
        },
        {
            name: "Email",
            icon: <Mail className="w-6 h-6" />,
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
            color: "hover:bg-blue-500",
            bg: "bg-blue-100 text-blue-600",
            borderColor: "border-blue-200"
        }
    ];

    return (
        <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 pl-0">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            group flex items-center
            w-12 h-12 overflow-hidden
            bg-white border ${social.borderColor} shadow-md
            transition-all duration-300 ease-in-out
            hover:w-auto hover:max-w-[200px] rounded-r-full
            ${social.bg} hover:text-white ${social.color}
          `}
                >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        {social.icon}
                    </div>

                    <span className="whitespace-nowrap font-medium text-sm pr-4 pl-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 overflow-hidden">
                        {social.name}
                    </span>
                </a>
            ))}
        </div>
    );
}