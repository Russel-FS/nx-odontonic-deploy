"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Heart,
  Zap,
  Baby,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Ortodoncia",
    desc: "Alineación perfecta con brackets tradicionales o alineadores invisibles para todas las edades.",
    icon: Smile,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Estética Dental",
    desc: "Blanqueamiento, carillas y resinas para una sonrisa radiante y natural.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Implantes",
    desc: "Reemplazo de piezas dentales con tecnología de vanguardia y alta predictibilidad.",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Endodoncia",
    desc: "Tratamiento de conductos con microscopía y técnicas mínimamente invasivas.",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Odontopediatría",
    desc: "Atención especializada y amigable para el cuidado dental de los más pequeños.",
    icon: Baby,
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "Periodoncia",
    desc: "Salud integral de encías y tejidos de soporte para una base sólida.",
    icon: Shield,
    color: "from-indigo-500 to-blue-400",
  },
];

export default function Services() {
  return (
    <Section id="servicios" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Servicios"
          subtitle="Tratamientos integrales con tecnología de vanguardia y el cuidado más humano"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-gray-900 group-hover:text-[#0e5d88] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-[#0e5d88] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-medium mr-2">
                      Conocer más
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[3rem] p-12 md:p-16 border border-gray-200/50">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                  ¿Necesitas más
                  <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent">
                    información?
                  </span>
                </h3>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Descubre todos nuestros tratamientos especializados y
                  encuentra la solución perfecta para tu sonrisa
                </p>
              </div>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-xl hover:shadow-2xl shadow-[#0e5d88]/30"
                >
                  Ver todos los servicios
                  <ArrowRight className="h-6 w-6" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
