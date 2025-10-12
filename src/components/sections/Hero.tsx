"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { ArrowRight, Star, Phone } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-12"
          >
            {/* Main Title */}
            <div className="space-y-8">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Sonríe con
                <span className="block font-light bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Go! Odontic
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-extralight leading-relaxed max-w-4xl mx-auto text-white/90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Transformamos sonrisas con tecnología de vanguardia y el cuidado
                más humano
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.a
                href={site.whatsapp}
                target="_blank"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0a4a6b] hover:text-white transition-all duration-300 shadow-2xl hover:shadow-3xl shadow-[#0e5d88]/50"
              >
                <Phone className="h-6 w-6" />
                Agendar por WhatsApp
                <ArrowRight className="h-6 w-6" />
              </motion.a>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Ver servicios
                  <ArrowRight className="h-6 w-6" />
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
