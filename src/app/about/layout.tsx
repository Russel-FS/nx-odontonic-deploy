import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros -  Go Odontic en Surco | 17+ Años de Experiencia",
  description:
    "Conoce al equipo de Go Odontic: especialistas certificados con 17+ años de experiencia en Surco. Misión, visión y valores de nuestro .",
  keywords: [
    "equipo dental surco",
    "especialistas dentales lima",
    "dentistas certificados surco",
    "go odontic nosotros",
    "Odontología dental en Surco con 17+ experiencia",
  ],
  openGraph: {
    title: "Nosotros - Go Odontic Odontología en Surco",
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
