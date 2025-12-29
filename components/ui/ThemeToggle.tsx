"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Evitamos errores de hidratación esperando a que monte el componente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Espacio vacío para evitar saltos
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Cambiar tema"
    >
      {/* Sol (Visible en Dark Mode) */}
      <Sun className="h-5 w-5 text-amber-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute top-2 left-2" />
      
      {/* Luna (Visible en Light Mode) */}
      <Moon className="h-5 w-5 text-counseling-dark rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      
      {/* Ícono por defecto para mantener espacio (invisible pero ocupa lugar) */}
      <span className="w-5 h-5 block opacity-0 pointer-events-none"><Sun className="w-5 h-5"/></span>
    </button>
  );
}