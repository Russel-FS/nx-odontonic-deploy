"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Años de experiencia" },
  { number: "12K+", label: "Pacientes atendidos" },
  { number: "98%", label: "Satisfacción" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Cuidado dental que
              <span className="block text-gray-600 font-extralight">
                marca la diferencia
              </span>
            </h2>

            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-16">
              Combinamos tecnología avanzada con atención personalizada para
              crear experiencias excepcionales en cada visita.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-light text-[#0e5d88] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-[#0e5d88] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Tecnología avanzada
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Equipos de última generación para diagnósticos precisos y
                tratamientos cómodos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-[#25D366] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Atención personalizada
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Cada tratamiento se adapta a tus necesidades específicas y
                expectativas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-[#0e5d88] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Resultados duraderos
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Soluciones efectivas que mantienen tu sonrisa saludable por
                años.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
