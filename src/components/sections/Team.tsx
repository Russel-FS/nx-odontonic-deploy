import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Team() {
  return (
    <Section>
      <SectionTitle title="Nuestro equipo" subtitle="Especialistas dedicados a tu sonrisa." />
      <div className="rounded-2xl border border-slate-200 p-6 text-slate-600">
        Próximamente: perfiles de especialistas con foto, CMP y especialidad.
      </div>
    </Section>
  );
}
