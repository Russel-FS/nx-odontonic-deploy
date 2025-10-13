"use client";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Contacto
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Agenda tu cita o envíanos un mensaje
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-gray-900">
                      Envíanos un mensaje
                    </h3>
                    <p className="text-gray-600 font-light">
                      Completa el formulario y nos pondremos en contacto contigo
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#0e5d88] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0a4a6b] transition-all duration-300"
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
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-gray-900">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#0e5d88]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Dirección
                      </h4>
                      <p className="text-gray-600 font-light">{site.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#0e5d88]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Teléfono
                      </h4>
                      <p className="text-gray-600 font-light">{site.phone}</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={site.whatsapp}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  className="block bg-[#25D366] rounded-xl p-6 shadow-sm text-white hover:bg-[#20b858] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">WhatsApp</h4>
                      <p className="font-light opacity-90">
                        Agenda tu cita ahora
                      </p>
                    </div>
                  </div>
                </motion.a>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0e5d88]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#0e5d88]" />
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
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
