import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-counseling-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* COLUMNA 1: Textos */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-counseling-900 leading-tight">
              Encuentra tu equilibrio y <span className="text-counseling-500">bienestar emocional</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Un espacio seguro de escucha activa y acompañamiento profesional para ayudarte a transitar tus procesos personales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="bg-counseling-500 hover:bg-counseling-600 text-white px-8 py-3 rounded-lg text-lg font-medium text-center transition-colors shadow-lg hover:shadow-xl"
              >
                Agendar Primera Sesión
              </Link>
              <Link
                href="/sobre-mi"
                className="bg-white border-2 border-counseling-200 text-counseling-600 hover:border-counseling-500 hover:text-counseling-700 px-8 py-3 rounded-lg text-lg font-medium text-center transition-colors"
              >
                Conocer más
              </Link>
            </div>
          </div>

          {/* COLUMNA 2: Imagen */}
          <div className="relative w-full max-w-sm aspect-square bg-counseling-200 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <Image
              src="/perfil.jpg"
              alt="Foto profesional de la Counselor"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}