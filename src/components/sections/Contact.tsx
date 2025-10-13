"use client";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos requeridos
    if (!formData.name.trim()) {
      alert("Por favor ingresa tu nombre");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Por favor ingresa tu teléfono");
      return;
    }

    if (!formData.message.trim()) {
      alert("Por favor ingresa tu mensaje");
      return;
    }

    // Crear mensaje para WhatsApp
    let whatsappMessage = `¡Hola! Me gustaría agendar una cita.\n\n`;
    whatsappMessage += `*Nombre:* ${formData.name}\n`;
    whatsappMessage += `*Teléfono:* ${formData.phone}\n`;

    if (formData.email.trim()) {
      whatsappMessage += `*Email:* ${formData.email}\n`;
    }

    whatsappMessage += `*Mensaje:* ${formData.message}\n\n`;
    whatsappMessage += `Enviado desde la web de GO Odontic`;

    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/51903072982?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Abrir WhatsApp
    window.open(whatsappURL, "_blank");

    // Limpiar formulario
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
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
                      Completa el formulario y te contactaremos por WhatsApp
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Tu teléfono"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email{" "}
                          <span className="text-gray-400">(opcional)</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0e5d88] focus:ring-2 focus:ring-[#0e5d88]/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#20b858] transition-all duration-300"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Enviar por WhatsApp
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      * Campos obligatorios. Tu mensaje se enviará directamente
                      por WhatsApp
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
                        <p>Lunes: 9:00 AM - 9:00 PM</p>
                        <p>Martes: 5:00 PM - 10:00 PM</p>
                        <p>Miércoles: 5:00 PM - 10:00 PM</p>
                        <p>Jueves: 5:00 PM - 10:00 PM</p>
                        <p>Viernes: 5:00 PM - 6:00 PM</p>
                        <p>Sábado: 7:00 AM - 7:00 PM</p>
                        <p>Domingo: 9:00 AM - 6:00 PM</p>
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
