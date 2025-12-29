"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

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

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Mi Enfoque", href: "#mi-enfoque" },
    { name: "Acompañamiento", href: "#servicios" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm dark:shadow-gray-dark/50 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold font-serif text-accent dark:text-white transition-colors"
            >
              Gisela Pontoni
            </Link>
          </div>

          {/* --- MENÚ ESCRITORIO --- */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Links de Navegación */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-accent dark:text-gray-light hover:text-counseling dark:hover:text-counseling transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}

            {/* Toggle de Tema */}
            <ThemeToggle />

            {/* BOTÓN RESERVAR */}
            <Link
              href="#agendar"
              className="
                px-5 py-2 rounded-full font-bold transition-all duration-300
                border-2 border-counseling text-accent
                hover:bg-counseling hover:text-white hover:shadow-md hover:-translate-y-0.5
                
                dark:border-counseling dark:text-counseling 
                dark:hover:bg-counseling dark:hover:text-counseling-dark
              "
            >
              Reservar Espacio
            </Link>
          </div>

          {/* --- CONTROLES MÓVIL --- */}
          <div className="flex items-center gap-4 md:hidden">
            {/* El toggle también visible en móvil */}
            <ThemeToggle />

            {/* Botón Hamburguesa */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-counseling-dark dark:text-white hover:text-counseling transition-colors focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-dark absolute w-full shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-3 py-3 text-lg text-counseling-dark dark:text-gray-light hover:bg-counseling-light dark:hover:bg-gray-dark rounded-lg font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#agendar"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-3 mt-2 bg-counseling text-counseling-dark dark:text-black rounded-lg font-bold hover:brightness-110 transition-all shadow-sm"
            >
              Reservar Espacio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}