"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const patients = [
  {
    name: "Wampi",
    category: "Música Urbana",
    image: "/blog/wampi.webp",
    desc: "El cantante urbano confía en Go Odontic para mantener su sonrisa siempre lista para el escenario.",
  },
  {
    name: "Pepito Menis",
    category: "Grupo 5",
    image: "/blog/pepito-menis.png",
    desc: "Integrante de Grupo 5 nos visitó para su control dental y limpieza profesional.",
  },
  {
    name: "Manuel Donayre",
    category: "Música Criolla",
    image: "/blog/manuel-donayre-2.webp",
    desc: "El 'Diamante Negro' de la música criolla confía en nuestro equipo para su cuidado dental.",
  },
  {
    name: "Monica Adaro",
    category: "Actriz y Cantante",
    image: "/blog/monica-adaro.webp",
    desc: "La reconocida actriz y cantante peruana visitó Go Odontic para su tratamiento de estética dental.",
  },
  {
    name: "Kelly Dávila",
    category: "Artista y Modelo",
    image: "/blog/kelly-davila.png",
    desc: "Artista y modelo mantiene su sonrisa impecable con nuestros tratamientos personalizados.",
  },
  {
    name: "Sofía Cavero",
    category: "Modelo y Actriz",
    image: "/blog/sofia-cavero.png",
    desc: "Modelo y actriz confía en Go Odontic para cuidar su sonrisa profesional.",
  },
  {
    name: "Joa Geraldine",
    category: "Amaya Hermanos",
    image: "/blog/joa-geraldine.png",
    desc: "Parte del grupo Amaya Hermanos visitó Go Odontic para sus revisiones dentales.",
  },
  {
    name: "Paolo Camacho",
    category: "Yo Soy",
    image: "/blog/gianmarco.png",
    desc: "El imitador de Gian Marco agradeció a Go Odontic por su atención y profesionalismo.",
  },
  {
    name: "Mister Perú 2024",
    category: "Concurso Nacional",
    image: "/blog/mister-peru.png",
    desc: "El representante de la belleza masculina peruana eligió Go Odontic para cuidar su sonrisa.",
  },
  {
    name: "Miss Teen Lima Norte",
    category: "Concurso Regional",
    image: "/blog/miss-teen-lima-norte.png",
    desc: "Miss Teen Lima Norte 2024 confía en Go Odontic para su cuidado dental.",
  },
  {
    name: "Miss Teen Región Lima",
    category: "Concurso Regional",
    image: "/blog/miss-teen-region-lima.png",
    desc: "Miss Teen Región Lima 2024 visitó la clínica para su control dental y estética de sonrisa.",
  },
];

export default function Pacientes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                Nuestros pacientes
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Artistas y figuras públicas que confían en nosotros
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Grid Section */}
      <section className="pb-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-12 md:gap-16"
            >
              {patients.map((patient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
                      >
                        <Image
                          src={patient.image}
                          alt={patient.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="text-sm font-medium text-[#0e5d88] tracking-wide uppercase">
                          {patient.category}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                          {patient.name}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        {patient.desc}
                      </p>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-[#0e5d88] font-medium group-hover:gap-3 transition-all duration-200"
                      >
                        <span>Ver más</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                ¿Quieres unirte a ellos?
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Agenda tu consulta y descubre por qué las figuras públicas
                confían en nosotros
              </p>
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a4a6b] transition-colors duration-200"
            >
              Agendar consulta
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
