import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nosotros - Consultorio Dental Go Odontic en Surco | 17+ Años de Experiencia",
  description:
    "Conoce al equipo de Go Odontic: especialistas certificados con 17+ años de experiencia en Surco. Misión, visión y valores de nuestro consultorio dental.",
  keywords: [
    "consultorio dental surco historia",
    "equipo dental surco",
    "especialistas dentales lima",
    "dentistas certificados surco",
    "go odontic nosotros",
    "consultorio dental experiencia",
  ],
  openGraph: {
    title: "Nosotros - Go Odontic Consultorio Dental",
    description:
      "Equipo de especialistas con 17+ años cuidando sonrisas en Surco",
    url: "https://goodontic.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
