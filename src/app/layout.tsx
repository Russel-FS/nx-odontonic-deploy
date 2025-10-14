import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "@/components/shared/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Odontic - Clínica Dental",
  description:
    "Odontología integral en Surco: ortodoncia, estética, implantes y más. Agenda tu cita por WhatsApp.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
