"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Heart } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. María González",
    specialty: "Ortodoncista",
    experience: "12 años",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    description:
      "Especialista en ortodoncia invisible y tratamientos estéticos",
  },
  {
    name: "Dr. Carlos Mendoza",
    specialty: "Implantólogo",
    experience: "15 años",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    description: "Experto en cirugía oral e implantología avanzada",
  },
  {
    name: "Dra. Ana Ruiz",
    specialty: "Endodoncista",
    experience: "10 años",
    image:
      "https://images.unsplash.com/photo-1594824475317-8b7b0c8b8e8e?w=400&h=400&fit=crop&crop=face",
    description: "Especialista en endodoncia y tratamientos conservadores",
  },
];

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Años de experiencia",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: GraduationCap,
    number: "8",
    label: "Especialistas certificados",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    number: "10K+",
    label: "Pacientes atendidos",
    color: "from-rose-500 to-pink-400",
  },
  {
    icon: Heart,
    number: "98%",
    label: "Satisfacción del paciente",
    color: "from-amber-500 to-orange-400",
  },
];

export default function Team() {
  return (
    <Section className="bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nuestro Equipo"
          subtitle="Especialistas apasionados por transformar sonrisas con excelencia y calidez humana"
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light text-[#0e5d88] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-light">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Photo */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0e5d88] to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-[#0e5d88] font-medium">
                      {member.specialty}
                    </p>
                    <p className="text-sm text-gray-500">
                      {member.experience} de experiencia
                    </p>
                  </div>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#0e5d88]/5 to-blue-500/5 rounded-[3rem] p-12 md:p-16 border border-[#0e5d88]/10">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                Conoce a todo nuestro
                <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent">
                  equipo especializado
                </span>
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Próximamente podrás conocer los perfiles completos de todos
                nuestros especialistas, sus certificaciones y áreas de expertise
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
