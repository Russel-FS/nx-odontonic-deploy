"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const trustedClients = [
  {
    name: "Wampi",
    category: "Música Urbana",
    image: "/blog/wampi.webp",
  },
  {
    name: "Manuel Donayre",
    category: "Música Criolla",
    image: "/blog/manuel-donayre-2.webp",
  },
  {
    name: "Monica Adaro",
    category: "Actriz y Cantante",
    image: "/blog/monica-adaro.webp",
  },
  {
    name: "Mister Perú 2024",
    category: "Concurso Nacional",
    image: "/blog/mister-peru.webp",
  },
  {
    name: "Miss Teen Lima Norte",
    category: "Concurso Regional",
    image: "/blog/miss-teen-lima-norte.webp",
  },
  {
    name: "Sofía Cavero",
    category: "Modelo y Actriz",
    image: "/blog/sofia-cavero.webp",
  },
];

export default function Trust() {
  return (
    <section className="py-32 bg-gray-50">
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
              Figuras públicas que
              <span className="block text-gray-600 font-extralight">
                confían en nosotros
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Artistas, modelos y personalidades eligen GO Odontic para cuidar
              su sonrisa profesional
            </p>
          </motion.div>

          {/* Grid de Clientes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          >
            {trustedClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-center space-y-3">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {client.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light">
                      {client.category}
                    </p>
                  </div>
                </div>
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
            <Link href="/pacientes">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 font-light text-lg transition-colors duration-200"
              >
                Ver todos nuestros pacientes
                <div className="w-6 h-px bg-gray-400 group-hover:bg-gray-600 transition-colors duration-200"></div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
