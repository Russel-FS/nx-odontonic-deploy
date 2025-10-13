"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Consultorio dental moderno"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-12"
          >
            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Tu sonrisa perfecta
                <span className="block font-extralight text-white/90">
                  empieza aquí
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Odontología moderna con tecnología avanzada y cuidado humano
                excepcional
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.a
                href={site.whatsapp}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Agendar por WhatsApp
              </motion.a>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Ver servicios
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
