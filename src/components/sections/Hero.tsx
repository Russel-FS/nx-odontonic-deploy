"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <Container className="relative z-10 h-screen flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-12 text-white"
          >
            {/* Main Title */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.9]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="block">Sonríe con</span>
                <span className="block font-extralight text-white/90">
                  confianza
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Cuidado dental excepcional que transforma sonrisas y vidas con
                resultados que perduran.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-8 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>17 años de trayectoria</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={site.whatsapp}
                target="_blank"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                Agenda tu consulta
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Conocer más
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
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
