"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/hero.jpg"
          alt="Consultorio dental"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <Container className="absolute inset-0 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold drop-shadow-sm"
            >
              Sonríe con Go! Odontic
            </motion.h1>
            <p className="mt-3 text-white/90">
              Especialistas en ortodoncia, estética e implantes. Agenda tu cita
              hoy mismo.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.whatsapp} target="_blank">
                <Button data-variant="primary" data-size="lg">
                  Agendar por WhatsApp
                </Button>
              </a>
              <Link href="services" className="ml-3">
                <Button data-variant="outline" data-size="lg">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
