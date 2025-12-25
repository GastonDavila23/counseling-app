"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-counseling-50 border-b border-counseling-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO O NOMBRE */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-counseling-900">
              TuNombre<span className="text-counseling-500">Counseling</span>
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO (Se oculta en móviles 'hidden md:flex') */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-counseling-900 hover:text-counseling-600 transition-colors">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-counseling-900 hover:text-counseling-600 transition-colors">
              Sobre Mí
            </Link>
            <Link href="/servicios" className="text-counseling-900 hover:text-counseling-600 transition-colors">
              Servicios
            </Link>
            
            {/* BOTÓN DE ACCIÓN (Tu ejemplo del examen) */}
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium transition-colors">
              Agendar Turno
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil 'md:hidden') */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Al hacer click, cambia de true a false
              className="text-counseling-900 hover:text-counseling-600 focus:outline-none"
            >
              {/* Icono de hamburguesa simple (SVG) */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Se muestra si isMenuOpen es true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-counseling-50 border-t border-counseling-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" className="block px-3 py-2 text-counseling-900 hover:bg-counseling-100 rounded-md">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="block px-3 py-2 text-counseling-900 hover:bg-counseling-100 rounded-md">
              Sobre Mí
            </Link>
            <Link href="/servicios" className="block px-3 py-2 text-counseling-900 hover:bg-counseling-100 rounded-md">
              Servicios
            </Link>
            <button className="w-full text-left block px-3 py-2 text-accent-600 font-bold hover:bg-counseling-100 rounded-md">
              Agendar Turno
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}