import Image from "next/image";

export default function About() {
    return (
        <section
            id="sobre-mi"
            // LIGHT: Fondo blanco | DARK: Fondo negro azulado
            className="py-20 bg-white dark:bg-black overflow-hidden min-h-screen flex items-center transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* --- COLUMNA IMAGEN --- */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[3/4] max-w-sm mx-auto md:max-w-md">
                            {/* Decoración (Blob):
                                LIGHT: bg-counseling-light (tu lila clarito)
                                DARK: bg-counseling-dark (el violeta oscuro para que no encandile) 
                            */}
                            <div className="absolute inset-0 bg-counseling-light dark:bg-counseling-dark rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-colors duration-300"></div>

                            <Image
                                src="/perfil.jpg"
                                alt="Gisela Pontoni"
                                fill
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* --- COLUMNA TEXTO --- */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        {/* Kicker */}
                        {/* --- BADGE / ETIQUETA --- */}
                        <span className="hidden md:inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-900 border border-counseling dark:border-gray-700 text-counseling-dark dark:text-counseling text-sm font-medium mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Sobre Mí
                        </span>

                        {/* Título */}
                        <h3 className="text-3xl md:text-4xl font-bold text-counseling-dark dark:text-counseling mb-6 font-serif transition-colors duration-300">
                            Hola, soy Gisela Pontoni
                        </h3>

                        {/* Párrafos */}
                        <div className="space-y-4 text-sm md:text-lg text-gray dark:text-gray-light leading-relaxed transition-colors duration-300">
                            <p>
                                Como Counselor Profesional, mi pasión es facilitar procesos de desarrollo y despliegue personal. Creo profundamente en la tendencia natural de cada persona hacia el crecimiento cuando encuentra un entorno de aceptación plena y libertad.
                            </p>
                            <p>
                                Estoy convencida de que el bienestar surge cuando nuestras acciones son coherentes con nuestro sentir. Por eso, mi propósito es brindarte un espacio seguro y libre de juicios donde puedas explorarte, gestionar tus emociones y reconocer los recursos que ya habitan en vos.
                            </p>
                            <p>
                                Juntos, trabajaremos para fortalecer tu identidad y autoestima y construir vínculos más sanos y auténticos, encontrando ese equilibrio que necesitás para transitar los desafíos de la vida con mayor claridad y autonomía.
                            </p>
                        </div>

                        {/* Separador y Cita */}
                        <div className="mt-8 pt-8 border-t border-gray-light dark:border-gray-dark transition-colors duration-300">
                            {/* Cita:
                                LIGHT: text-counseling-dark (Violeta oscuro)
                                DARK: text-counseling (El color de la marca #d0d1ff, para que resalte hermoso)
                            */}
                            <p className="text-counseling-dark dark:text-counseling font-medium italic transition-colors duration-300">
                                &quot;La verdadera escucha es una de las fuerzas más potentes para el cambio que conozco.&quot; — Carl Rogers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}