import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "@/components/shared/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Odontic -  en Surco | Ortodoncia, Estética Dental",
  description:
    "✨  especializado en Surco con 17+ años de experiencia. Ortodoncia, estética dental, implantes, blanqueamiento. 📱 Agenda por WhatsApp. Tecnología de vanguardia.",
  keywords: [
    " surco",
    "dentista surco lima",
    "ortodoncia surco",
    "brackets lima",
    "alineadores invisibles",
    "estética dental surco",
    "implantes dentales lima",
    "blanqueamiento dental",
    "endodoncia surco",
    "periodoncia lima",
    "odontopediatría",
    "radiografía dental",
    "Santiago de surco",
    "dentista 24 horas lima",
    "urgencias dentales surco",
  ],
  authors: [{ name: "Go Odontic" }],
  creator: "Go Odontic",
  publisher: "Go Odontic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goodontic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Go Odontic",
    description:
      "Odontología integral en Surco: ortodoncia, estética, implantes y más. Agenda tu cita por WhatsApp.",
    url: "https://goodontic.com",
    siteName: "Go Odontic",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Go Odontic",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Odontic",
    description:
      "Odontología integral en Surco: ortodoncia, estética, implantes y más.",
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "h9Xbs65eg9z16nqn2ZzII7cXoEHxyapKAbWhdgu6Nsg",
  },
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
