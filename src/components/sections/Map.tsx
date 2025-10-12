"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

function getMapSrc(value: string) {
  if (!value) return "";
  // Si ya es un embed oficial, úsalo tal cual
  if (value.includes("/maps/embed?")) return value;
  // Si es una dirección o una URL de búsqueda, generamos un embed válido
  return `https://www.google.com/maps?q=${encodeURIComponent(
    value
  )}&output=embed`;
}

const directions = [
  {
    icon: Car,
    title: "En auto",
    desc: "Estacionamiento disponible en la zona",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Navigation,
    title: "Transporte público",
    desc: "Múltiples líneas de bus cercanas",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Clock,
    title: "Tiempo promedio",
    desc: "15-20 min desde el centro",
    color: "from-amber-500 to-orange-400",
  },
];

export default function Map() {
  const src = getMapSrc(site.googleMap);

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="¿Cómo llegar?"
          subtitle="Nos encontramos en una ubicación céntrica y de fácil acceso"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Directions Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                Fácil
                <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent">
                  acceso
                </span>
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nuestra clínica está estratégicamente ubicada para tu comodidad
              </p>
            </div>

            <div className="space-y-4">
              {directions.map((direction, index) => {
                const IconComponent = direction.icon;
                return (
                  <motion.div
                    key={direction.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${direction.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {direction.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-light">
                        {direction.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0e5d88] to-blue-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Nuestra dirección</h4>
                  <p className="font-light opacity-90 leading-relaxed">
                    {site.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-100 h-[500px]">
              {src ? (
                <iframe
                  src={src}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-2xl flex items-center justify-center mx-auto">
                      <MapPin className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">
                        Mapa no disponible
                      </h4>
                      <p className="text-gray-500 font-light">
                        Próximamente integraremos el mapa interactivo
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
