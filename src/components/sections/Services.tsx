"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Estética Dental y Rehabilitación Oral",
    desc: "Transformamos tu sonrisa con tratamientos estéticos avanzados y rehabilitación oral completa para devolver función y belleza a tus dientes.",
  },
  {
    title: "Ortodoncia",
    desc: "Alineación perfecta con brackets tradicionales o alineadores invisibles para una sonrisa armoniosa y funcional.",
  },
  {
    title: "Periodoncia e Implantes Dentales",
    desc: "Tratamiento integral de encías y reemplazo de piezas dentales con implantes de última generación para una sonrisa completa.",
  },
  {
    title: "Endodoncia Rotatoria",
    desc: "Tratamiento de conductos con tecnología rotatoria avanzada y microscopía para preservar tus dientes naturales con máxima precisión.",
  },
  {
    title: "Cirugía Dental y Urgencias Dentales",
    desc: "Procedimientos quirúrgicos especializados y atención de urgencias dentales las 24 horas para resolver cualquier emergencia.",
  },
  {
    title: "Radiografía Dental",
    desc: "Diagnóstico preciso con tecnología radiográfica digital avanzada para planificar el mejor tratamiento para cada paciente.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-gray-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Servicios especializados
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Tratamientos integrales diseñados para cada necesidad específica
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-colors duration-200"
              >
                Ver todos los servicios
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
