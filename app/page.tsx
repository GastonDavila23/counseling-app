import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing"; // <--- 1. AGREGAR IMPORT

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <Pricing /> {/* <--- 2. AGREGAR EL COMPONENTE AQUÍ */}
      
      {/* Próximamente: <Testimonials /> */}
      {/* Próximamente: <Footer /> */}
    </main>
  );
}