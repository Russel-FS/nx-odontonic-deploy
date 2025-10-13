"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { site } from "@/config/site.config";
import Link from "next/link";

const stats = [
  { number: "17", label: "Años de trayectoria" },
  { number: "12K+", label: "Pacientes atendidos" },
  { number: "98%", label: "Satisfacción" },
];

const values = [
  {
    title: "Cuidado humano",
    desc: "Cada paciente recibe atención personalizada con calidez y comprensión.",
  },
  {
    title: "Excelencia clínica",
    desc: "Búsqueda constante de la perfección en cada procedimiento.",
  },
  {
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

      {/* Story Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Nuestra historia
              </h2>

              <div className="space-y-8 max-w-4xl mx-auto">
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
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-12 max-w-2xl mx-auto mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                className="bg-white rounded-2xl p-8"
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
                className="bg-white rounded-2xl p-8"
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
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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
