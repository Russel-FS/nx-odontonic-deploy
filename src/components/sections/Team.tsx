"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="py-32 bg-white">
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
              Especialistas certificados
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo combina años de experiencia con formación continua
              en las técnicas más avanzadas
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0e5d88]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#0e5d88] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Dr. María González
              </h3>
              <p className="text-[#0e5d88] font-light mb-2">Ortodoncista</p>
              <p className="text-sm text-gray-500 font-light">
                Especialista en ortodoncia invisible y estética dental
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#25D366] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Dr. Carlos Mendoza
              </h3>
              <p className="text-[#25D366] font-light mb-2">Implantólogo</p>
              <p className="text-sm text-gray-500 font-light">
                Experto en cirugía oral e implantología avanzada
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0e5d88]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#0e5d88] rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Dra. Ana Ruiz
              </h3>
              <p className="text-[#0e5d88] font-light mb-2">Endodoncista</p>
              <p className="text-sm text-gray-500 font-light">
                Especialista en endodoncia y tratamientos conservadores
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-light text-[#0e5d88] mb-2">15+</div>
              <div className="text-sm text-gray-600 font-light">
                Años de experiencia
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#0e5d88] mb-2">8</div>
              <div className="text-sm text-gray-600 font-light">
                Especialistas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#0e5d88] mb-2">
                12K+
              </div>
              <div className="text-sm text-gray-600 font-light">Pacientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-[#0e5d88] mb-2">98%</div>
              <div className="text-sm text-gray-600 font-light">
                Satisfacción
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
