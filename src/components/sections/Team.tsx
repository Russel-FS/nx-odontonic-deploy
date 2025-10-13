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
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#0e5d88]/5 rounded-full mb-6">
              <span className="text-sm font-medium text-[#0e5d88] tracking-wide">
                NUESTRO EQUIPO
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Especialistas de
              <span className="block text-[#0e5d88] font-light">
                excelencia
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Profesionales altamente calificados con formación en las mejores
              universidades, comprometidos con tu bienestar dental
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                className="group relative"
              >
                {/* Glass morphism card */}
                <div
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 
                              shadow-[0_8px_32px_rgba(0,0,0,0.06)] 
                              border border-white/20
                              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                              transition-all duration-500 ease-out
                              overflow-hidden"
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0e5d88]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                    {/* Enhanced Avatar */}
                    <div className="relative">
                      {member.image ? (
                        <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-1">
                          <div className="w-full h-full rounded-[22px] overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              priority={true}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-32 h-32 bg-gradient-to-br from-[#0e5d88]/10 to-[#0e5d88]/5 rounded-3xl flex items-center justify-center group-hover:from-[#0e5d88]/15 group-hover:to-[#0e5d88]/8 transition-all duration-500">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-medium text-2xl">
                              {member.name.split(" ")[1]?.[0] || "D"}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Floating accent */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 w-full">
                      <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight tracking-tight">
                          {member.name}
                        </h3>
                        <div className="inline-flex items-center px-4 py-2 bg-[#0e5d88]/8 rounded-full">
                          <p className="text-[#0e5d88] font-medium text-sm tracking-wide">
                            {member.specialty.toUpperCase()}
                          </p>
                        </div>
                      </div>

                      {/* Credentials with enhanced styling */}
                      <div className="space-y-4 bg-gray-50/50 rounded-2xl p-6 border border-gray-100/50">
                        <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-3">
                          Formación y Certificaciones
                        </h4>
                        <div className="space-y-3">
                          {member.credentials
                            .slice(0, 3)
                            .map((credential, credIndex) => (
                              <motion.div
                                key={credIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1 + credIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 group/item"
                              >
                                <div className="w-2 h-2 bg-gradient-to-br from-[#0e5d88] to-[#1a73a8] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                                <p className="text-sm text-gray-700 font-light leading-relaxed">
                                  {credential}
                                </p>
                              </motion.div>
                            ))}
                          {member.credentials.length > 3 && (
                            <div className="pt-2 border-t border-gray-200/50">
                              <p className="text-xs text-[#0e5d88] font-medium">
                                +{member.credentials.length - 3} certificaciones
                                adicionales
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-[#0e5d88] via-[#1a73a8] to-[#0e5d88] rounded-3xl p-8 md:p-12 text-white">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12" />
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full opacity-50" />
              </div>

              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-white/90 tracking-wide">
                    EXCELENCIA ACADÉMICA
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light leading-tight">
                  Formación de clase mundial
                </h3>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
                  Nuestros especialistas mantienen certificaciones
                  internacionales y se actualizan constantemente en las últimas
                  técnicas y tecnologías para brindarte el mejor cuidado dental
                </p>

                {/* Institution badges */}
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  {[
                    "UNMSM",
                    "Universidad Castello Branco",
                    "SPPDMF",
                    "APPO",
                    "ASPIOI",
                  ].map((institution, idx) => (
                    <motion.div
                      key={institution}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    >
                      <span className="text-sm font-medium text-white/90">
                        {institution}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
