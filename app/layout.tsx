import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/ui/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gisela Pontoni | Counseling y Bienestar Emocional",
  description: "Espacio terapéutico para el desarrollo personal, gestión de ansiedad y vínculos sanos. Sesiones online y presenciales en Mendoza.",
  keywords: ["Counseling", "Terapia", "Mendoza", "Ansiedad", "Bienestar", "Gisela Pontoni"],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Gisela Pontoni - Counseling",
    description: "Reencuéntrate contigo mismo en un espacio seguro de escucha y acompañamiento.",
    images: ["/perfil.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />   
        <SocialSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}