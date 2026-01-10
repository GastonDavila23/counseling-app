"use client";

import { Instagram, MessageCircle, Mail, MapPin, ArrowUpCircle } from "lucide-react";

export default function Footer() {

  // --- CONFIGURACIÓN DE CONTACTO ---
  const phoneNumber = "5492634632372";
  const emailAddress = "gisela.pontoni.96@gmail.com";
  const instagramUser = "gisela_pontoni";

  const whatsappMessage = "Hola Gisela, vi tu web y me gustaría solicitar información sobre las sesiones de Counseling.";
  const emailSubject = "Consulta sobre Sesiones de Counseling";
  const emailBody = "Hola Gisela,\n\nMi nombre es [Mi Nombre] y me gustaría solicitarte información sobre las consultas.\n\n¡Gracias!";

  // --- LINKS DE REDES SOCIALES ---
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = `https://instagram.com/${instagramUser}`;
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-4 pb-4 md:pt-16 md:pb-8 transition-colors duration-300
      /* Light Mode */
      bg-counseling-dark text-dark
      /* Dark Mode */
      dark:bg-black dark:border-t dark:border-gray-800"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contenedor Principal en Grilla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Columna 1: Identidad */}
          <div className="text-center md:text-left space-y-4">
            <div>
              <h3 className="text-3xl font-bold font-serif tracking-wide">Gisela Pontoni</h3>
              <p className="dark:text-gray-400 font-medium">Counselor Profesional</p>
            </div>
            <p className="hidden md:block dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Un espacio seguro para tu bienestar emocional.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="text-center md:text-left">
            <h4 className="md:hidden text-lg font-semibold mb-2 dark:text-gray-200">Menú</h4>
            <ul className="space-y-3 dark:text-gray-400 inline-block md:block">
              <li><a href="#inicio" className="hover:text-white transition-colors block py-1">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-white transition-colors block py-1">Sobre Mí</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors block py-1">Servicios</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="hidden md:block text-lg font-semibold dark:text-white">Contacto</h4>

            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {/* Ubicación */}
              <div className="flex items-center gap-3 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-counseling dark:text-counseling-400" />
                <span className="text-sm">San Martín, Mendoza, Argentina</span>
              </div>

              {/* Botones de Redes Sociales */}
              <div className="flex gap-4">
                
                {/* EMAIL (Ahora abre Gmail Web) */}
                <a
                  href={emailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all duration-300 group
                  /* Light Mode */
                  bg-black/10 hover:bg-counseling hover:text-white
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-blue-600 dark:text-gray-300 dark:hover:text-white"
                  aria-label="Enviar Correo"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                {/* INSTAGRAM */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all duration-300 group
                  /* Light Mode */
                  bg-black/10 hover:bg-counseling hover:text-white
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-pink-600 dark:text-gray-300 dark:hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                {/* WHATSAPP */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all duration-300 group
                  /* Light Mode */
                  bg-black/10 hover:bg-counseling hover:text-white
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-green-600 dark:text-gray-300 dark:hover:text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior y Copyright */}
        <div className="border-t border-black/10 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm dark:text-gray-500">
          <p>© {new Date().getFullYear()} Gisela Pontoni. Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-counseling dark:hover:text-white transition-colors font-medium"
          >
            Volver arriba <ArrowUpCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}