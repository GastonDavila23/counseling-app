import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-counseling-50 via-white to-white overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-counseling-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-accent-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-700">
          <div className="relative w-24 h-24 md:w-60 md:h-60">
            <Image
              src="/logo.png"
              alt="Logo Espiralada"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
        </div> */}

        <span className="inline-block py-1 px-3 rounded-full bg-white border border-counseling-100 text-counseling-600 text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          Counseling y Bienestar Emocional
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-counseling-900 tracking-tight font-serif mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Un espacio seguro para <br className="hidden md:block" />
          <span className="text-accent-500 relative">
            reencontrarte
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Acompañamiento terapéutico para transitar la ansiedad, fortalecer tu autoestima y construir vínculos más sanos. Tu proceso comienza aquí.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <a
            href="#agendar"
            className="px-8 py-4 bg-accent-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-accent-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Reservar Espacio
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#sobre-mi"
            className="px-8 py-4 bg-white text-counseling-700 border border-counseling-200 rounded-full font-medium text-lg hover:bg-counseling-50 transition-colors"
          >
            Conoceme más
          </a>
        </div>
      </div>
    </section>
  );
}