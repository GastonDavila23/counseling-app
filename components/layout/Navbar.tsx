import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
        <Link href="/" className="text-xl font-bold text-counseling-900">
          Nombre<span className="text-counseling-500">Counseling</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#sobre-mi" className="text-slate-600 hover:text-counseling-500 transition-colors">
            Sobre mí
          </Link>
          <Link href="#servicios" className="text-slate-600 hover:text-counseling-500 transition-colors">
            Servicios
          </Link>
          <Button className="bg-counseling-500 hover:bg-counseling-600 text-white">
            Agendar Turno
          </Button>
        </div>
      </div>
    </nav>
  );
}