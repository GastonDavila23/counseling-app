import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/ui/SocialSidebar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Lora, Nunito } from 'next/font/google';
import FloatingLogo from "@/components/ui/FloatingLogo";
import { Analytics } from "@vercel/analytics/next"

export const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const geistSans = Nunito({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
}); 

const geistMono = Nunito({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://counselor-gisela-pontoni.vercel.app'),
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <SocialSidebar />
          {children}
          <Analytics />
          <FloatingLogo />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}