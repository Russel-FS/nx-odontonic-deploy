"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "17", label: "Años de experiencia" },
  { number: "1K +", label: "Pacientes atendidos" },
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
            {[
              {
                title: "Tecnología avanzada",
                desc: "Equipos de última generación para diagnósticos precisos y tratamientos cómodos.",
                image: "/services/tecnologia-avanzada.webp",
              },
              {
                title: "Atención personalizada",
                desc: "Cada tratamiento se adapta a tus necesidades específicas y expectativas.",
                image: "/services/atencion-personalizada.webp",
              },
              {
                title: "Resultados duraderos",
                desc: "Soluciones efectivas que mantienen tu sonrisa saludable por años.",
                image:
                  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&crop=center",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Image */}
                <div className="relative h-52 rounded-sm overflow-hidden bg-gray-100 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
