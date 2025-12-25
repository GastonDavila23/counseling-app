import { servicesData } from "@/data/services"; // <--- Importamos los datos

export default function Services() {
  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-counseling-900 sm:text-4xl">
            ¿Cómo puedo acompañarte?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Diferentes espacios adaptados a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapeamos los datos importados */}
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-counseling-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-counseling-100"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-counseling-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}