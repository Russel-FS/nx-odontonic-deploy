import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Go Odontic - Consultorio Dental",
    short_name: "Go Odontic",
    description:
      "Consultorio dental especializado en Surco. Ortodoncia, estética dental, implantes y más.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e5d88",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
