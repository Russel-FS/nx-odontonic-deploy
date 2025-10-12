import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import LayoutClient from "@/components/shared/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Odontic - Clínica Dental",
  description:
    "Odontología integral en Surco: ortodoncia, estética, implantes y más. Agenda tu cita por WhatsApp.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
