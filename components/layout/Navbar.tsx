"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold font-serif text-counseling-900">
              Gisela Pontoni
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#sobre-mi" className="text-counseling-800 hover:text-accent-500 transition-colors font-medium">
              Sobre Mí
            </Link>
            <Link href="#servicios" className="text-counseling-800 hover:text-accent-500 transition-colors font-medium">
              Acompañamiento
            </Link>
            
            <Link 
              href="#agendar" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Reservar Espacio
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-counseling-900 hover:text-accent-500 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            <Link 
              href="#sobre-mi" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 text-lg text-counseling-800 hover:bg-counseling-50 rounded-lg font-medium"
            >
              Sobre Mí
            </Link>
            <Link 
              href="#servicios" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 text-lg text-counseling-800 hover:bg-counseling-50 rounded-lg font-medium"
            >
              Servicios
            </Link>
            <Link 
              href="#agendar" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 mt-2 bg-accent-500 text-white rounded-lg font-bold hover:bg-accent-600"
            >
              Reservar Espacio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}