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
  {
    name: "Dr. Benny Bustillo Pashanase",
    specialty: "Endodoncia",
    image: "/teams/dr-benny-bustillo.webp",
    credentials: [
      "Egresado en Estomatología por la UIGV",
      "Especialidad en Endodoncia por la UPCH",
      "Mayor de la Fuerza Aérea del Perú",
      "Endodoncista en el Hospital Central FAP",
      "Jefe del Departamento de Sanidad del Ala Aérea N°4",
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

          {/* Team Cards - Horizontal Layout */}
          <div className="space-y-16 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="md:w-1/2">
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-[#0e5d88]/10">
                        <div className="w-32 h-32 bg-[#0e5d88] rounded-2xl flex items-center justify-center">
                          <span className="text-white font-medium text-4xl">
                            {member.name.split(" ")[1]?.[0] || "D"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#0e5d88] font-medium mb-2">
                        {member.specialty}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Formación y experiencia
                    </h4>
                    <div className="space-y-3">
                      {member.credentials.map((credential, credIndex) => (
                        <div key={credIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#0e5d88] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">
                            {credential}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Formación de excelencia
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                Nuestros especialistas se forman en las mejores universidades
                del país y mantienen certificaciones internacionales para
                brindarte el mejor cuidado dental
              </p>

              {/* Institution badges */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-light">
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
