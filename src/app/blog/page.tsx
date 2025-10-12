"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    name: "Wampi",
    image: "/blog/wampi.png",
    desc: "El cantante urbano Wampi confía en Go! Odontic para mantener su sonrisa siempre lista para el escenario.",
  },
  {
    name: "Pepito Menis - Grupo 5",
    image: "/blog/pepito-menis.png",
    desc: "Integrante de Grupo 5, Pepito Menis nos visitó para su control dental y limpieza profesional.",
  },
  {
    name: "Manuel Donayre",
    image: "/blog/manuel-donayre.png",
    desc: "El 'Diamante Negro' de la música criolla confía en nuestro equipo para su cuidado dental.",
  },
  {
    name: "Monica Adaro",
    image: "/blog/monica-adaro.png",
    desc: "La reconocida actriz y cantante peruana visitó Go! Odontic para su tratamiento de estética dental.",
  },
  {
    name: "Kelly Dávila",
    image: "/blog/kelly-davila.png",
    desc: "Kelly Dávila, artista y modelo, mantiene su sonrisa impecable con nuestros tratamientos personalizados.",
  },
  {
    name: "Sofía Cavero",
    image: "/blog/sofia-cavero.png",
    desc: "Nuestra paciente Sofía Cavero, modelo y actriz, confía en Go! Odontic para cuidar su sonrisa profesional.",
  },
  {
    name: "Joa Geraldine - Amaya Hermanos",
    image: "/blog/joa-geraldine.png",
    desc: "Parte del grupo Amaya Hermanos, visitaron Go! Odontic para sus revisiones dentales.",
  },
  {
    name: "Paolo Camacho - Yo Soy Gian Marco",
    image: "/blog/gianmarco.png",
    desc: "El imitador de Gian Marco agradeció a Go! Odontic por su atención y profesionalismo.",
  },
  {
    name: "Mister Perú 2024",
    image: "/blog/mister-peru.png",
    desc: "El representante de la belleza masculina peruana eligió Go! Odontic para cuidar su sonrisa de pasarela.",
  },
  {
    name: "Miss Teen Lima Norte",
    image: "/blog/miss-teen-lima-norte.png",
    desc: "Nuestra paciente Miss Teen Lima Norte 2024 confía en Go! Odontic para su cuidado dental.",
  },
  {
    name: "Miss Teen Región Lima",
    image: "/blog/miss-teen-region-lima.png",
    desc: "Miss Teen Región Lima 2024 visitó la clínica para su control dental y estética de sonrisa.",
  },
];

export default function Blog() {
  return (
    <Section id="blog" className="bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Artistas y figuras públicas"
          subtitle="Ellos confían en Go! Odontic para cuidar su sonrisa"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{post.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
