"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site.config";
import Container from "../ui/Container";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil cuando se hace click en cualquier ancla (#)
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navLinkClass =
    "text-sm text-slate-600 hover:text-brand.dark rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.blue/30 px-1 py-1";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm">
      <Container className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={site.shortName}
        >
          <Image
            src="/logo.png"
            alt={site.shortName}
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold text-brand.dark">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop */}
        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Menú principal"
        >
          {site.nav.map((i) => (
            <a key={i.href} href={i.href} className={navLinkClass}>
              {i.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm bg-brand.blue text-white hover:bg-brand.dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.blue/30"
          >
            Agendar cita
          </a>
        </nav>

        {/* Toggle móvil */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.blue/30"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </Container>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="md:hidden border-t border-slate-100"
          >
            <Container className="py-3 flex flex-col gap-2">
              {site.nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.blue/30"
                >
                  {i.label}
                </a>
              ))}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 rounded-lg px-4 py-2 bg-brand.blue text-white hover:bg-brand.dark text-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.blue/30"
              >
                Agendar cita
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
