import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <Pricing />
    </main>
  );
}