"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Heart,
  Zap,
  Scissors,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const services = [
  {
    title: "Estética Dental y Rehabilitación Oral",
    desc: "Blanqueamiento, resinas, carillas y rehabilitación completa para una sonrisa perfecta. Utilizamos las técnicas más avanzadas para devolver la funcionalidad y belleza a tu sonrisa.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=500&fit=crop&crop=center",
    features: [
      "Blanqueamiento profesional",
      "Carillas de porcelana",
      "Resinas estéticas",
      "Rehabilitación completa",
    ],
  },
  {
    title: "Ortodoncia",
    desc: "Corrección de la posición dental con brackets tradicionales o alineadores invisibles. Tratamientos personalizados para todas las edades.",
    icon: Smile,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop&crop=center",
    features: [
      "Brackets metálicos",
      "Brackets estéticos",
      "Alineadores invisibles",
      "Ortodoncia interceptiva",
    ],
  },
  {
    title: "Periodoncia e Implantes Dentales",
    desc: "Salud de encías y reemplazo de piezas dentales con alta predictibilidad. Soluciones integrales para la salud periodontal.",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=500&fit=crop&crop=center",
    features: [
      "Tratamiento de encías",
      "Implantes de titanio",
      "Cirugía periodontal",
      "Mantenimiento periodontal",
    ],
  },
  {
    title: "Endodoncia Rotatoria",
    desc: "Tratamiento de conductos con tecnología rotatoria de última generación. Procedimientos más rápidos y cómodos para el paciente.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=500&fit=crop&crop=center",
    features: [
      "Tecnología rotatoria",
      "Diagnóstico digital",
      "Tratamiento en una sesión",
      "Mínimo dolor postoperatorio",
    ],
  },
  {
    title: "Cirugía Dental y Urgencias Dentales",
    desc: "Procedimientos quirúrgicos y atención inmediata para emergencias dentales. Disponibles para urgencias las 24 horas.",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=500&fit=crop&crop=center",
    features: [
      "Extracciones complejas",
      "Cirugía de cordales",
      "Atención de urgencias",
      "Cirugía oral menor",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section className="pt-32 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Nuestros
              <span className="block font-medium bg-gradient-to-r from-[#0e5d88] to-[#1a73a8] bg-clip-text text-transparent">
                Servicios
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Experiencia dental excepcional con tecnología de vanguardia y
              atención personalizada
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-16 max-w-7xl mx-auto"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-medium text-gray-900 tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.4 + featureIndex * 0.1,
                            duration: 0.5,
                          }}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-2 h-2 bg-[#0e5d88] rounded-full group-hover:scale-125 transition-transform duration-200" />
                          <span className="text-gray-700 font-light">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-[#0e5d88] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a4a6b] transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Más información
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
                </div>

                <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    ¿Listo para transformar tu sonrisa?
                  </h3>
                  <p className="text-xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
                    Agenda una consulta personalizada y descubre el tratamiento
                    ideal para ti con nuestro equipo de especialistas.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-white text-[#0e5d88] px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-200 shadow-lg"
                    >
                      Agendar Consulta
                      <ArrowRight className="h-5 w-5" />
                    </motion.a>

                    <motion.a
                      href="tel:+1234567890"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
                    >
                      Llamar ahora
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
