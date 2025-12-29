'use client';

import { Instagram, MessageCircle, Mail, MapPin, ArrowUpCircle } from "lucide-react";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-4 pb-4 md:pt-16 md:pb-8 transition-colors duration-300
      
       /* Light Mode */
      bg-counseling-dark text-dark
                  
      /* Dark Mode */
      dark:bg-black dark:border-gray-800"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contenedor Principal en Grilla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap:2 mb-2 md:gap-12 md:mb-12">

          {/* Columna 1: Identidad */}
          <div className="text-center md:text-left space-y-4">
            <div>
              <h3 className="text-3xl font-bold font-serif tracking-wide">Gisela Pontoni</h3>
              <p className="dark:text-gray-400 font-medium">Counselor Profesional</p>
            </div>
            <p className=" hidden md:block dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Un espacio seguro para reencontrarte y transformar tu bienestar emocional.
            </p>
          </div>

          {/* Columna 2: Navegación (Crucial para Móvil) */}
          <div className="text-center md:text-left">
            <ul className="space-y-3 dark:text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="hidden md:block text-lg font-semibold dark:text-white">Contacto</h4>

            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {/* Ubicación */}
              <div className="flex items-center gap-3 dark:text-gray-400">
                <MapPin className="w-5 h-5 dark:text-counseling" />
                <span className="text-sm">San Martín, Mendoza, Argentina</span>
              </div>

              {/* Botones de Redes Sociales */}
              <div className="flex gap-2 md:gap-4">
                <a
                  href="mailto:gisela.pontoni.96@gmail.com"
                  className="p-3 rounded-full transition-all duration-300 group
                  
                  /* Light Mode */
                  bg-black/20 hover:bg-counseling hover:text-white
                  
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-counseling-dark"
                  aria-label="Enviar Correo"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://instagram.com/gisela_pontoni"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all duration-300 group
                  
                   /* Light Mode */
                  bg-black/20 hover:bg-counseling hover:text-white
                  
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-counseling-dark"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://wa.me/5492634632372"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full transition-all duration-300 group
                  
                   /* Light Mode */
                  bg-black/20 hover:bg-counseling hover:text-white
                  
                  /* Dark Mode */
                  dark:bg-gray-800 dark:hover:bg-counseling-dark"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior y Copyright */}
        <div className="border-t border-counseling dark:border-gray-800 pt-2 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm dark:text-gray-500">
          <p>© {new Date().getFullYear()} Gisela Pontoni. Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Volver arriba <ArrowUpCircle className="w-8 h-8" />
          </button>
        </div>
      </div>
    </footer>
  );
}