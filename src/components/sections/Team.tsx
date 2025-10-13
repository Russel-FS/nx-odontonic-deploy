"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Francis Alarcón Olivera",
    specialty: "Rehabilitación Oral",
    image: "/teams/dr-rancis-alarcon.webp",
    credentials: [
      "Egresado de la UNMSM",
      "Especialista en Rehabilitación por la UNMSM",
      "Maestría en Docencia e Investigación por la UNMSM",
      "Miembro titular de la SPPDMF",
      "Exdocente de pre y posgrado de la UNMSM",
    ],
  },
  {
    name: "Dr. Beethoven Durero Ponce Oscco",
    specialty: "Implantología Oral",
    image: null,
    credentials: [
      "Egresado de UNMSM",
      "Especialidad de Implantología Oral",
      "Universidad Castello Branco Brasil",
      "Miembro Asociación Peruana de Periodoncia y Oseointegracion (APPO)",
      "Miembro Asociación Peruana de Implantología Oral Integral (ASPIOI)",
    ],
  },
];

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
              Nuestros especialistas
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Profesionales altamente calificados con formación en las mejores
              universidades del país
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    {member.image ? (
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover z-10"
                          priority={true}
                          onError={(e) => {
                            console.error("Error loading image:", member.image);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 bg-[#0e5d88]/10 rounded-2xl flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#0e5d88] rounded-xl flex items-center justify-center">
                          <span className="text-white font-medium text-lg">
                            {member.name.split(" ")[1]?.[0] || "D"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#0e5d88] font-medium mb-4">
                        {member.specialty}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {member.credentials
                        .slice(0, 3)
                        .map((credential, credIndex) => (
                          <div
                            key={credIndex}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-[#0e5d88] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                              {credential}
                            </p>
                          </div>
                        ))}
                      {member.credentials.length > 3 && (
                        <p className="text-xs text-gray-500 font-light italic">
                          +{member.credentials.length - 3} certificaciones más
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0e5d88] to-[#1a73a8] rounded-2xl p-8 text-white text-center"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-light">
                Formación de excelencia
              </h3>
              <p className="text-lg font-light opacity-90 max-w-3xl mx-auto">
                Nuestros especialistas se forman en las mejores universidades
                del país y mantienen certificaciones internacionales para
                brindarte el mejor cuidado dental
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm opacity-80">
                <span>• UNMSM</span>
                <span>• Universidad Castello Branco Brasil</span>
                <span>• SPPDMF</span>
                <span>• APPO</span>
                <span>• ASPIOI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
