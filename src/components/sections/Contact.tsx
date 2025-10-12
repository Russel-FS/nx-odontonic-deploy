"use client";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contacto" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Contacto"
          subtitle="Estamos aquí para ayudarte. Agenda tu cita o envíanos un mensaje"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200/50 shadow-xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                    Envíanos un
                    <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent">
                      mensaje
                    </span>
                  </h3>
                  <p className="text-gray-600 font-light">
                    Completa el formulario y nos pondremos en contacto contigo
                    lo antes posible
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="Tu teléfono"
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={4}
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#0e5d88] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#0a4a6b] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    * Formulario ilustrativo. Para agendar citas usa WhatsApp
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                Información de
                <span className="block bg-gradient-to-r from-[#0e5d88] to-blue-500 bg-clip-text text-transparent">
                  contacto
                </span>
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0e5d88] to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Dirección
                    </h4>
                    <p className="text-gray-600 font-light">{site.address}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600 font-light">{site.phone}</p>
                  </div>
                </motion.div>

                <motion.a
                  href={site.whatsapp}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p className="font-light opacity-90">
                      Agenda tu cita ahora
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Horarios de atención
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600 font-light">
                      <p>Lunes - Viernes: 8:00 AM - 7:00 PM</p>
                      <p>Sábados: 8:00 AM - 2:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
