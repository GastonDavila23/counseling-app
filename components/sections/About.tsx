import Image from "next/image";

export default function About() {
    return (
        <section id="sobre-mi" className="py-20 bg-white overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[3/4] max-w-sm mx-auto md:max-w-md">
                            <div className="absolute inset-0 bg-counseling-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <Image
                                src="/perfil.jpg"
                                alt="Gisela Pontoni"
                                fill
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm font-bold text-accent-500 uppercase tracking-wide mb-2">
                            Sobre mí
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-counseling-900 mb-6 font-serif">
                            Hola, soy Gisela Pontoni
                        </h3>

                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Soy Counselor Profesional especializada en desarrollo personal y gestión emocional. Mi propósito es acompañarte a descubrir tus propias herramientas para transitar los desafíos de la vida.
                            </p>
                            <p>
                                Creo firmemente que todos tenemos la capacidad de sanar y crecer cuando encontramos el espacio adecuado de escucha y contención, libre de juicios.
                            </p>
                            <p>
                                En mis sesiones, trabajaremos juntos para fortalecer tu autoestima, mejorar tus vínculos y encontrar ese equilibrio que estás buscando.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-counseling-800 font-medium italic">
                                &quot;El primer paso para sanar es ser escuchado.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}