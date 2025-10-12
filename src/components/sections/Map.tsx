import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/config/site.config";

function getMapSrc(value: string) {
  if (!value) return "";
  // Si ya es un embed oficial, úsalo tal cual
  if (value.includes("/maps/embed?")) return value;
  // Si es una dirección o una URL de búsqueda, generamos un embed válido
  return `https://www.google.com/maps?q=${encodeURIComponent(value)}&output=embed`;
}

export default function Map() {
  const src = getMapSrc(site.googleMap);
  return (
    <Section className="pt-0">
      <SectionTitle title="¿Cómo llegar?" />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        {src ? (
          <iframe
            src={src}
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="p-8 text-slate-500">Mapa no disponible.</div>
        )}
      </div>
    </Section>
  );
}
