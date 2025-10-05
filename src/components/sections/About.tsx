import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section id="nosotros">
      <SectionTitle
        title="Nosotros"
        subtitle="Presentación de la clínica, filosofía de atención y equipo."
      />
      <p className="text-slate-700 leading-relaxed">
        Somos Go! Odontic, una clínica dental moderna enfocada en brindar una
        experiencia segura y amable. Trabajamos con especialistas y tecnología
        actual para ofrecer diagnósticos precisos y tratamientos efectivos.
      </p>
    </Section>
  );
}
