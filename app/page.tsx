import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <About /> 
      <Services />
      <Pricing />
    </main>
  );
}