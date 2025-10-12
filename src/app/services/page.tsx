"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Baby,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "Estética Dental",
    subtitle: "Sonrisas que inspiran confianza",
    desc: "Transformamos sonrisas con tecnología de vanguardia y técnicas mínimamente invasivas para resultados naturales y duraderos.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&crop=center",
    features: [
      "Blanqueamiento láser avanzado",
      "Carillas de porcelana ultrafinas",
      "Diseño digital de sonrisa",
      "Rehabilitación estética completa",
    ],
    highlight: "Resultados en una sola sesión",
  },
  {
    title: "Ortodoncia",
    subtitle: "Alineación perfecta, discreción total",
    desc: "Corregimos la posición dental con alineadores transparentes y tecnología 3D para un tratamiento cómodo y prácticamente invisible.",
    icon: Smile,
    color: "from-emerald-500 to-teal-400",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    features: [
      "Alineadores invisibles personalizados",
      "Planificación digital 3D",
      "Seguimiento con IA",
      "Tratamiento acelerado",
    ],
    highlight: "Sin brackets metálicos",
  },
  {
    title: "Periodoncia e Implantes dentales",
    subtitle: "Restauración natural y permanente",
    desc: "Reemplazamos piezas dentales perdidas con implantes de titanio de última generación y técnicas de cirugía guiada por computadora.",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&crop=center",
    features: [
      "Implantes de titanio premium",
      "Cirugía guiada por computadora",
      "Carga inmediata disponible",
      "Garantía de por vida",
    ],
    highlight: "98% de éxito garantizado",
  },
  {
    title: "Endodoncia Rotatoria",
    subtitle: "Salvamos tu diente natural",
    desc: "Tratamientos de conducto con microscopía y tecnología rotatoria para preservar tus dientes naturales con máxima precisión.",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&crop=center",
    features: [
      "Microscopía de alta precisión",
      "Instrumentación rotatoria",
      "Diagnóstico con tomografía 3D",
      "Sedación consciente disponible",
    ],
    highlight: "Sin dolor, máxima precisión",
  },
  {
    title: "Odontopediatría",
    subtitle: "Cuidado dental especializado para niños",
    desc: "Atención dental integral para los más pequeños en un ambiente amigable y divertido, creando experiencias positivas que duran toda la vida.",
    icon: Baby,
    color: "from-pink-500 to-rose-400",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center",
    features: [
      "Consultas adaptadas para niños",
      "Tratamientos preventivos infantiles",
      "Selladores de fisuras pediátricos",
      "Educación en higiene oral",
    ],
    highlight: "Experiencia sin miedo ni dolor",
  },
  {
    title: "Cirugia Dental y urgencias dentales",
    subtitle: "Tu salud dental es nuestra prioridad",
    desc: "Programas personalizados de prevención y mantenimiento para conservar tu sonrisa saludable durante toda la vida.",
    icon: Shield,
    color: "from-violet-500 to-purple-400",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center",
    features: [
      "Limpieza ultrasónica avanzada",
      "Fluorización profesional",
      "Selladores de fisuras",
      "Plan de mantenimiento personalizado",
    ],
    highlight: "Prevenir es mejor que curar",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
        <Container>
          <div className="pt-40 pb-32 text-center">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto space-y-12">
              <div className="space-y-8">
                <motion.h1
                  className="text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-900 tracking-tight leading-[0.9]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Servicios
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#0e5d88] via-[#1a73a8] to-[#2563eb] bg-clip-text text-transparent">
                    Excepcionales
                  </h2>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 md:gap-12"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="group"
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-16 items-center ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      <div
                        className={`space-y-10 ${
                          index % 2 === 1 ? "lg:col-start-2" : ""
                        }`}
                      >
                        <div className="space-y-8">
                          {/* Icon & Title */}
                          <div className="space-y-6">
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: 5 }}
                              className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/20`}
                            >
                              <IconComponent className="h-10 w-10 text-white" />
                            </motion.div>

                            <div className="space-y-3">
                              <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-xl text-[#0e5d88] font-light">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>

                          <p className="text-xl text-gray-600 font-light leading-relaxed">
                            {service.desc}
                          </p>

                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0e5d88]/10 to-blue-500/10 px-6 py-3 rounded-full border border-[#0e5d88]/20">
                            <CheckCircle className="h-5 w-5 text-[#0e5d88]" />
                            <span className="text-[#0e5d88] font-medium">
                              {service.highlight}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.8 + index * 0.2 + featureIndex * 0.1,
                                duration: 0.6,
                              }}
                              className="flex items-center gap-4 group/feature"
                            >
                              <div className="w-2 h-2 bg-[#0e5d88] rounded-full group-hover/feature:scale-150 transition-transform duration-300" />
                              <span className="text-lg text-gray-700 font-light group-hover/feature:text-[#0e5d88] transition-colors">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-xl hover:shadow-2xl shadow-[#0e5d88]/25"
                        >
                          Conocer más
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>

                      <div
                        className={`${
                          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -8 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="relative group/image"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0e5d88]/20 to-blue-500/20 rounded-[3rem] blur-xl group-hover/image:blur-2xl transition-all duration-500 opacity-0 group-hover/image:opacity-100" />
                          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover group-hover/image:scale-105 transition-transform duration-700"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e5d88]/5 via-blue-500/5 to-[#0e5d88]/5 rounded-[4rem] blur-3xl" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-[4rem] p-16 md:p-20 border border-gray-200/50 shadow-2xl">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight">
                      ¿Listo para tu
                      <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent font-light">
                        nueva sonrisa?
                      </span>
                    </h3>
                    <p className="text-2xl text-gray-600 font-extralight leading-relaxed max-w-3xl mx-auto">
                      Agenda una consulta personalizada y descubre cómo podemos
                      transformar tu sonrisa
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-[#0e5d88] hover:text-white text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-xl hover:shadow-2xl shadow-[#0e5d88]/30"
                    >
                      Agendar Consulta
                      <ArrowRight className="h-6 w-6" />
                    </motion.a>

                    <motion.a
                      href="tel:+1234567890"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 border-2 border-[#0e5d88]/20 text-[#0e5d88] px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0e5d88]/5 transition-all duration-300"
                    >
                      Llamar ahora
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
}
