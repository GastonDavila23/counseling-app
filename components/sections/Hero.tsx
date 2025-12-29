import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:bg-gradient-to-b md:from-counseling-light via-white to-white dark:from-black dark:via-black dark:to-[#0f1219] overflow-hidden transition-colors duration-500">

      {/* --- FONDO DECORATIVO (BLOBS) --- */}
      <div className="hidden md:absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Blob 1: Violeta */}
        <div className="hiiden md:absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-counseling-light dark:bg-counseling-dark/20 rounded-full blur-3xl opacity-60 dark:opacity-40 transition-colors duration-500"></div>
        {/* Blob 2: Verde */}
        <div className="hidden md:absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-accent-light dark:bg-accent-dark/20 rounded-full blur-3xl opacity-40 dark:opacity-30 transition-colors duration-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* --- BADGE / ETIQUETA --- */}
        <span className="hidden md:inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-900 border border-counseling dark:border-gray-700 text-counseling-dark dark:text-counseling text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          Counseling y Bienestar Emocional
        </span>

        {/* --- TÍTULO PRINCIPAL --- */}
        <h1 className="text-4xl md:text-6xl font-bold text-counseling dark:text-counseling-dark tracking-tight font-nunito mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 transition-colors">
          Un espacio seguro para <br className="hidden md:block" />
          <span className="text-accent dark:text-accent-light relative inline-block">
            reencontrarte
            {/* Subrayado SVG Decorativo */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-light dark:text-accent-dark -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* --- DESCRIPCIÓN --- */}
        <p className="mt-6 text-l md:text-xl text-gray dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 transition-colors">
          Espacio de acompañamiento profesional de desarrollo personal y psicoeducación: transitá tus crisis y cambios, fortalecé tu autoestima e identidad y gestioná tus emociones. Un proceso para reconocer tus recursos internos, mejorar tus vínculos y tomar decisiones conscientes y coherentes desde el Enfoque Centrado en la Persona.
        </p>

        {/* --- BOTONES CTA --- */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          
          {/* Botón Principal (Verde) */}
          <a
            href="#mi-enfoque"
            className="p-2 md:px-8 md:py-4 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-accent-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 dark:shadow-accent/20"
          >
            Mí enfoque
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Botón Secundario (Outline) */}
          <a
            href="#sobre-mi"
            className="p-2 md:px-8 md:py-4 bg-white dark:bg-transparent text-counseling-dark dark:text-white border-2 border-counseling-dark dark:border-gray-600 rounded-full font-medium text-lg hover:bg-counseling-light dark:hover:bg-gray-800 transition-colors"
          >
            Conoceme más
          </a>
        </div>
      </div>
    </section>
  );
}