import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-counseling-900 text-white py-12 border-t border-counseling-800" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif">Gisela Pontoni</h3>
            <p className="text-counseling-200 mt-2">Counselor Profesional</p>
            <p className="text-gray-400 text-sm mt-1">San Martín, Mendoza, Argentina</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://instagram.com/tu_usuario" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-accent-400 transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://wa.me/549261xxxxxxx" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-counseling-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}