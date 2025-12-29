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
            hoverColor: "hover:bg-[#25D366]",
            styleClasses: "bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-6 h-6" />,
            url: `https://instagram.com/${instagramUser}`,
            hoverColor: "hover:bg-[#E1306C]",
            styleClasses: "bg-pink-50 text-pink-600 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800"
        },
        {
            name: "Email",
            icon: <Mail className="w-6 h-6" />,
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
            hoverColor: "hover:bg-blue-500",
            styleClasses: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
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
                        border shadow-md dark:shadow-none
                        transition-all duration-300 ease-in-out
                        hover:w-auto hover:max-w-[200px] rounded-r-full hover:text-white
                        
                        /* Aquí inyectamos las clases dinámicas de color */
                        ${social.styleClasses} ${social.hoverColor}
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