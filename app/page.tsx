import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-counseling-50">
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-counseling-900">Prueba de colores</h1>
        <p className="text-counseling-600 mt-4">haciendo pruebas de Tailwind.</p>
      </div>
    </main>
  );
}