import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/config/site.config";

export default function Contact() {
  return (
    <Section id="contacto">
      <SectionTitle title="Contacto" subtitle="Agenda tu cita o envíanos un mensaje." />
      <div className="grid gap-6 md:grid-cols-2">
        <form className="rounded-2xl border border-slate-200 p-6 space-y-4 bg-white">
        <label className="text-sm font-medium text-slate-700">Nombre</label>
        <input placeholder="Nombre" />
        <label className="text-sm font-medium text-slate-700">Teléfono o Email</label>
        <input placeholder="Teléfono o Email" />
        <label className="text-sm font-medium text-slate-700">Mensaje</label>
        <textarea placeholder="Mensaje" rows={4} />
        <button type="button" className="rounded-lg bg-brand.blue text-white px-4 py-2">
            Enviar (demo)
        </button>
        <p className="text-xs text-slate-500">* Formulario ilustrativo. Para agendar usa WhatsApp.</p>
        </form>

        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm"><strong>Dirección:</strong> {site.address}</p>
          <p className="text-sm"><strong>Tel:</strong> {site.phone}</p>
          <p className="text-sm"><strong>WhatsApp:</strong> <a className="underline" href={site.whatsapp} target="_blank">{site.whatsapp}</a></p>
        </div>
      </div>
    </Section>
  );
}
