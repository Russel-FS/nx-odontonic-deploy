"use client";
import { motion } from "framer-motion";
import { Sparkles, Smile, Heart, Zap, Scissors } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Section className="pt-24 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Nuestros Servicios"
              subtitle="Ofrecemos una gama completa de tratamientos dentales con la más alta calidad y tecnología de vanguardia."
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:gap-12 mt-16"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 lg:max-w-lg">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-brand.blue/10 rounded-2xl">
                          <IconComponent className="h-8 w-8 text-brand.blue" />
                        </div>
                        <h2 className="text-2xl font-bold text-brand.dark">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-brand.dark mb-3">
                          Incluye:
                        </h3>
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + featureIndex * 0.1,
                              duration: 0.3,
                            }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-brand.blue rounded-full" />
                            <span className="text-sm text-slate-600">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 lg:max-w-md">
                    <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-200 min-h-[320px] lg:min-h-[384px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={320}
                        className="w-full h-80 lg:h-96 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-brand.dark mb-4">
                ¿Necesitas más información?
              </h3>
              <p className="text-slate-600 mb-6">
                Agenda una consulta personalizada y descubre el tratamiento
                ideal para ti.
              </p>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-brand.blue text-white px-8 py-3 rounded-lg font-medium hover:bg-brand.dark transition-colors"
              >
                Agendar Consulta
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
