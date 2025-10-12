"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { Heart, Shield, Award, Users } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Heart,
    title: "Cuidado Humano",
    desc: "Cada paciente es único y merece atención personalizada con calidez y comprensión.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    desc: "Protocolos de bioseguridad de clase mundial para tu tranquilidad y la nuestra.",
  },
  {
    icon: Award,
    title: "Excelencia Clínica",
    desc: "Especialistas certificados y tecnología de vanguardia para resultados excepcionales.",
  },
  {
    icon: Users,
    title: "Experiencia Integral",
    desc: "Desde la primera consulta hasta el seguimiento, cuidamos cada detalle de tu experiencia.",
  },
];

export default function About() {
  return (
    <Section
      id="nosotros"
      className="bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nosotros"
          subtitle="Más que una clínica dental, somos tu aliado en el cuidado de tu sonrisa"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
                Nuestra
                <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent font-light">
                  Filosofía
                </span>
              </h3>

              <p className="text-xl text-gray-600 font-light leading-relaxed">
                En Go! Odontic creemos que una sonrisa saludable es mucho más
                que dientes perfectos. Es confianza, bienestar y calidad de
                vida. Por eso combinamos la tecnología más avanzada con el toque
                humano que hace la diferencia.
              </p>

              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Nuestro equipo de especialistas trabaja con pasión y dedicación
                para ofrecerte tratamientos personalizados que respeten tu
                tiempo, tu comodidad y tus expectativas.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-light text-[#0e5d88] mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600 font-light">
                  Años de experiencia
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-light text-[#0e5d88] mb-1">
                  10K+
                </div>
                <div className="text-sm text-gray-600 font-light">
                  Pacientes atendidos
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-light text-[#0e5d88] mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-600 font-light">
                  Satisfacción
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center"
                alt="Equipo Go! Odontic"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0e5d88] to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
