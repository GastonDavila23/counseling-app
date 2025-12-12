import { Button } from "@/components/ui/button"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Counseling App</h1>
      {/* Usamos el botón con estilos predefinidos */}
      <Button>Agendar Turno</Button> 
      <Button variant="outline">Más información</Button>
    </main>
  );
}