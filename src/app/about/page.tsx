"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight, Heart, Award, Users } from "lucide-react";
import { site } from "@/config/site.config";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "17", label: "Años de trayectoria" },
  { number: "1K +", label: "Pacientes atendidos" },
  { number: "98%", label: "Satisfacción" },
];

const banner = {
  title: "Nuestros valores",
  desc: "Comprometidos con la excelencia clínica y la atención personalizada.",
  image: "/banner/hero-banner.webp",
};

const values = [
  {
    icon: Heart,
    title: "Cuidado humano",
    desc: "Cada paciente recibe atención personalizada con calidez y comprensión.",
  },
  {
    icon: Award,
    title: "Excelencia clínica",
    desc: "Búsqueda constante de la perfección en cada procedimiento.",
  },
  {
    icon: Users,
    title: "Resultados duraderos",
    desc: "Soluciones efectivas que mantienen tu sonrisa saludable por años.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                Nosotros
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Cuidado dental excepcional que transforma sonrisas y vidas con
                resultados que perduran
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Story Section with Banner */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20  ">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8 "
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Nuestra historia
                </h2>

                <div className="space-y-6">
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    En GO Odontic, creemos que una sonrisa puede cambiarlo todo.
                    Somos una clínica dental moderna, dedicada a cuidar tu salud
                    bucal con atención personalizada y un equipo apasionado por
                    verte sonreír con confianza.
                  </p>

                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    Tu mejor sonrisa empieza aquí, en un espacio donde la
                    odontología se vive con empatía, precisión y resultados
                    reales. Desde el primer diagnóstico hasta el último detalle
                    estético, trabajamos con dedicación y calidez para que cada
                    visita sea una experiencia agradable y transformadora.
                  </p>
                </div>

                {/* Stats inline */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl font-light text-[#0e5d88] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-light">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Banner Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative md:flex hidden overflow-hidden h-[480px]  "
              >
                <Image
                  height={100}
                  width={400}
                  src={banner.image}
                  alt="Banner"
                  className="object-cover  rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#0e5d88]" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Misión</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">
                  Brindar servicios odontológicos de alta calidad, combinando
                  experiencia profesional y atención personalizada. Queremos que
                  cada paciente disfrute una experiencia cómoda y positiva,
                  recuperando su confianza a través de una sonrisa sana y
                  hermosa.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Visión</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">
                  Ser reconocidos como una clínica dental líder en excelencia y
                  cercanía humana. Aspiramos a transformar la forma en que las
                  personas viven la odontología, creando una comunidad que
                  valore la prevención y el orgullo de sonreír.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Nuestros valores
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Los principios que guían cada tratamiento y cada sonrisa que
                transformamos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-[#0e5d88]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0e5d88] transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-[#0e5d88] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Preview Banner */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#0e5d88] via-[#1a73a8] to-[#0e5d88] rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full -translate-y-20"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-400 rounded-full translate-y-16"></div>
                <div className="absolute top-1/2 right-0 w-24 h-24 bg-white rounded-full translate-x-12"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-light">
                    Conoce a nuestro equipo
                  </h3>
                  <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">
                    Especialistas certificados con años de experiencia,
                    dedicados a brindarte el mejor cuidado dental con tecnología
                    de vanguardia
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-white text-[#0e5d88] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg"
                    >
                      Ver nuestros servicios
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                ¿Listo para transformar tu sonrisa?
              </h3>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Agenda una consulta personalizada y descubre cómo podemos
                ayudarte
              </p>

              <Link href={site.whatsapp}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-colors duration-200"
                >
                  Agenda tu consulta
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
