import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Servicios Dentales en Surco - Go Odontic | Ortodoncia, Implantes, Estética",
  description:
    "Servicios dentales especializados en Surco: ortodoncia, implantes, estética dental, endodoncia, periodoncia. Tecnología avanzada y atención personalizada.",
  keywords: [
    "servicios dentales surco",
    "ortodoncia surco precios",
    "implantes dentales lima",
    "estética dental surco",
    "endodoncia lima",
    "periodoncia surco",
    "blanqueamiento dental",
    "brackets invisibles",
    "cirugía dental surco",
    "radiografía dental",
  ],
  openGraph: {
    title: "Servicios Dentales - Go Odontic Surco",
    description:
      "Tratamientos dentales especializados con tecnología de vanguardia",
    url: "https://goodontic.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
