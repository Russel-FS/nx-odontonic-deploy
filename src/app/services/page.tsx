"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";

const services = [
  {
    title: "Estética Dental y Rehabilitación Oral",
    desc: "Transformamos tu sonrisa con tratamientos estéticos avanzados y rehabilitación oral completa para devolver función y belleza a tus dientes.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&crop=center",
    features: [
      "Blanqueamiento láser profesional",
      "Carillas de porcelana ultrafinas",
      "Resinas estéticas de última generación",
      "Rehabilitación oral completa",
      "Prótesis fijas y removibles",
      "Diseño digital de sonrisa personalizado",
    ],
  },
  {
    title: "Ortodoncia",
    desc: "Alineación perfecta con brackets tradicionales o alineadores invisibles para una sonrisa armoniosa y funcional.",
    image:
      "/services/ortodoncia.webp",
    features: [
      "Brackets metálicos y estéticos",
      "Alineadores invisibles",
      "Ortodoncia interceptiva para niños",
      "Ortodoncia correctiva para adultos",
    ],
  },
  {
    title: "Periodoncia e Implantes Dentales",
    desc: "Tratamiento integral de encías y reemplazo de piezas dentales con implantes de última generación para una sonrisa completa.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&crop=center",
    features: [
      "Tratamiento de gingivitis y periodontitis",
      "Cirugía periodontal regenerativa",
      "Injertos de encía especializados",
      "Cirugía guiada por computadora",
      "Prótesis sobre implantes personalizadas",
    ],
  },
  {
    title: "Endodoncia Rotatoria",
    desc: "Tratamiento de conductos con tecnología rotatoria avanzada y microscopía para preservar tus dientes naturales con máxima precisión.",
    image:
      "/services/endodoncia.webp",
    features: [
      "Endodoncia rotatoria de precisión",
      "Microscopía dental avanzada",
      "Retratamientos especializados",
      "Técnicas mínimamente invasivas",
      "Obturación termoplástica",
    ],
  },
  {
    title: "Cirugía Dental y Urgencias Dentales",
    desc: "Procedimientos quirúrgicos especializados y atención de urgencias dentales las 24 horas para resolver cualquier emergencia.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center",
    features: [
      "Extracciones simples y complejas",
      "Cirugía de terceras molares",
      "Frenectomías especializadas",
      "Cirugía oral menor",
    ],
  },
  {
    title: "Radiografía Dental",
    desc: "Diagnóstico preciso con tecnología radiográfica digital avanzada para planificar el mejor tratamiento para cada paciente.",
    image: "/services/radiografia-dental.webp",
    features: [
      "Radiografías panorámicas digitales",
      "Radiografías periapicales de alta resolución",
      "Diagnóstico radiográfico especializado",
      "Menor radiación con tecnología digital",
      "Resultados inmediatos",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Servicios especializados
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Tratamientos integrales diseñados para cada necesidad
                específica, con tecnología avanzada y atención personalizada
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12 md:space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 lg:gap-16 items-center`}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover w-full h-full"
                        unoptimized
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 space-y-6 md:space-y-8">
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 md:space-y-4">
                      <h4 className="text-base md:text-lg font-medium text-gray-900">
                        Tratamientos incluidos
                      </h4>
                      <div className="space-y-2 md:space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-[#0e5d88] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 font-light leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={site.whatsapp}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 text-[#0e5d88] hover:text-gray-900 font-light text-base md:text-lg transition-colors duration-200 group"
                    >
                      Consultar este servicio
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  ¿Listo para tu
                  <span className="block text-gray-600 font-extralight">
                    nueva sonrisa?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Agenda una consulta personalizada y descubre cómo podemos
                  transformar tu sonrisa con nuestros tratamientos
                  especializados
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={site.whatsapp}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#0a4a6b] transition-colors duration-200"
                >
                  Agendar consulta
                  <ArrowRight className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="tel:+51987654321"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 border-2 border-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Llamar ahora
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
