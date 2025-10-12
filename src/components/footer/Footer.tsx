"use client";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100">
      <Container className="py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-brand.dark">Contacto</h4>
          <p className="text-sm mt-2">{site.address}</p>
          <p className="text-sm">Tel: {site.phone}</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand.dark">Redes</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                className="hover:underline"
                href={site.socials.instagram}
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={site.socials.facebook}
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={site.socials.tiktok}
                target="_blank"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-brand.dark">WhatsApp</h4>
          <a
            className="mt-2 inline-block rounded-lg bg-brand-blue text-white px-4 py-2"
            href={site.whatsapp}
            target="_blank"
          >
            Escríbenos ahora
          </a>
        </div>
      </Container>
      <div className="py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.shortName}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
