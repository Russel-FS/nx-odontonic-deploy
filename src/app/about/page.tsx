"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Eye,
  Award,
  Sparkles,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const stats = [
  {
    number: "15+",
    label: "Años de experiencia",
    desc: "Transformando sonrisas",
  },
  {
    number: "12,000+",
    label: "Pacientes satisfechos",
    desc: "Confianza ganada",
  },
  { number: "98.5%", label: "Tasa de éxito", desc: "Resultados comprobados" },
  {
    number: "24/7",
    label: "Atención de urgencias",
    desc: "Siempre disponibles",
  },
];

const values = [
  {
    icon: Heart,
    title: "Cuidado Humano",
    desc: "Cada paciente es único y merece atención personalizada con calidez y comprensión en cada visita.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    desc: "Protocolos de bioseguridad internacionales y tecnología de última generación para tu tranquilidad.",
  },
  {
    icon: Sparkles,
    title: "Innovación Constante",
    desc: "Adoptamos las últimas tecnologías dentales para tratamientos más precisos y cómodos.",
  },
  {
    icon: Award,
    title: "Excelencia Clínica",
    desc: "Búsqueda constante de la perfección en cada procedimiento y resultado obtenido.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
        <Container>
          <div className="pt-40 pb-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="max-w-6xl mx-auto space-y-12"
            >
              <div className="space-y-8">
                <motion.h1
                  className="text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-900 tracking-tight leading-[0.9]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Nosotros
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#0e5d88] via-[#1a73a8] to-[#2563eb] bg-clip-text text-transparent">
                    Donde la ciencia se encuentra con el arte
                  </h2>
                </motion.div>
              </div>

              <motion.p
                className="text-2xl md:text-3xl text-gray-600 font-extralight leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Transformamos vidas a través de sonrisas excepcionales
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center justify-center gap-3 text-sm text-gray-400 font-light"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>GO Odontic - Sonrisa que recorre el mundo</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
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
                  <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                    Nuestra
                    <span className="block bg-gradient-to-r from-[#0e5d88] to-[#1a73a8] bg-clip-text text-transparent font-light">
                      Historia
                    </span>
                  </h3>

                  <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                    <p>
                      En GO Odontic, creemos que una sonrisa puede cambiarlo
                      todo. Somos una clínica dental moderna, dedicada a cuidar
                      tu salud bucal con tecnología de vanguardia, atención
                      personalizada y un equipo apasionado por verte sonreír con
                      confianza.
                    </p>

                    <p>
                      Tu mejor sonrisa empieza aquí, en un espacio donde la
                      odontología se vive con empatía, precisión y resultados
                      reales. Desde el primer diagnóstico hasta el último
                      detalle estético, trabajamos con dedicación y calidez para
                      que cada visita sea una experiencia agradable y
                      transformadora.
                    </p>

                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0e5d88]/10 to-[#1a73a8]/10 px-6 py-3 rounded-full border border-[#0e5d88]/20">
                      <Heart className="h-5 w-5 text-[#0e5d88]" />
                      <span className="text-[#0e5d88] font-medium">
                        Cuidamos personas y sonrisas que recorren el mundo
                      </span>
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
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0e5d88]/20 to-[#1a73a8]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center"
                      alt="Clínica GO Odontic"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="text-4xl font-extralight text-[#0e5d88] mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600 font-light">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-light text-gray-900 tracking-tight">
                    Misión
                  </h3>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                    Brindar servicios odontológicos innovadores, seguros y de
                    alta calidad, combinando tecnología moderna, experiencia
                    profesional y atención personalizada. Queremos que cada
                    paciente disfrute una experiencia cómoda y positiva,
                    recuperando su confianza y bienestar a través de una sonrisa
                    sana y hermosa.
                  </p>
                  <div className="text-[#0e5d88] font-medium">
                    Tu mejor sonrisa empieza aquí.
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1a73a8] to-[#2563eb] rounded-2xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-light text-gray-900 tracking-tight">
                    Visión
                  </h3>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                    Ser reconocidos como una clínica dental líder en excelencia,
                    innovación y cercanía humana. Aspiramos a transformar la
                    forma en que las personas viven la odontología, creando una
                    comunidad que valore la prevención, la confianza y el
                    orgullo de sonreír.
                  </p>
                  <div className="text-[#1a73a8] font-medium">
                    GO Odontic, sonrisa que recorre el mundo.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-extralight text-gray-900 tracking-tight leading-tight mb-8">
                Nuestros
                <span className="block bg-gradient-to-r from-[#0e5d88] to-[#1a73a8] bg-clip-text text-transparent font-light">
                  Valores
                </span>
              </h2>
              <p className="text-2xl text-gray-600 font-extralight leading-relaxed max-w-4xl mx-auto">
                Los principios que guían cada tratamiento y cada sonrisa que
                transformamos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                    className="group"
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-gray-900 mb-4 text-center">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed text-center">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e5d88]/5 via-[#1a73a8]/5 to-[#0e5d88]/5 rounded-[4rem] blur-3xl" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-[4rem] p-16 md:p-20 border border-gray-200/50 shadow-2xl">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                      ¿Listo para conocer
                      <span className="block bg-gradient-to-r from-[#0e5d88] to-[#1a73a8] bg-clip-text text-transparent font-light">
                        tu nueva sonrisa?
                      </span>
                    </h3>
                    <p className="text-2xl text-gray-600 font-extralight leading-relaxed max-w-3xl mx-auto">
                      Agenda una consulta personalizada y descubre cómo podemos
                      transformar tu sonrisa con el cuidado que mereces
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-xl hover:shadow-2xl shadow-[#0e5d88]/30"
                    >
                      <Heart className="h-6 w-6" />
                      Conoce nuestro equipo
                      <ArrowRight className="h-6 w-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About;
