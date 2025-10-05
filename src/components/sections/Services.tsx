import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  { title: "Ortodoncia", desc: "Corrección de la posición dental con brackets o alineadores." },
  { title: "Estética Dental", desc: "Blanqueamiento, resinas y carillas para una sonrisa perfecta." },
  { title: "Implantes", desc: "Reemplazo de piezas dentales con alta predictibilidad." },
  { title: "Endodoncia", desc: "Tratamiento de conductos con enfoque conservador." },
  { title: "Odontopediatría", desc: "Atención especializada para los más pequeños." },
  { title: "Periodoncia", desc: "Salud de encías y tejidos de soporte." },
];

export default function Services() {
  return (
    <Section id="servicios">
      <SectionTitle
        title="Servicios"
        subtitle="Seis servicios principales, cada uno con su página individual en la siguiente fase."
      />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map(s => (
            <div
            key={s.title}
            className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition"
            >
            <h3 className="font-semibold text-brand.dark">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
        ))}
        </div>
    </Section>
  );
}
