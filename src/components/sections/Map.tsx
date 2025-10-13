"use client";
import Container from "@/components/ui/Container";
import { site } from "../../config/site.config";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

/**
 * Acepta:
 * - URL embed oficial: https://www.google.com/maps/embed?pb=...
 * - Short links: https://maps.app.goo.gl/... o https://goo.gl/maps/...
 * - Dirección normal: "Duque de la Torre 130, Lima 15049, Perú"
 * - Coordenadas: "-12.1375,-77.0198" o "-12.1375, -77.0198"
 */
function getMapSrc(value: string, coords?: string, zoom = 16) {
  if (!value && !coords) return "";

  // Si ya es un embed oficial, úsalo tal cual
  if (value && /google\.com\/maps\/embed\?/.test(value)) return value.trim();

  // Si vienen coordenadas "lat,lng" → forzamos pin con loc:
  if (coords && /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(coords.trim())) {
    const [lat, lng] = coords.split(",").map((s) => s.trim());
    return `https://www.google.com/maps?q=loc:${lat},${lng}&z=${zoom}&output=embed`;
  }

  // Si es una URL de Google Maps (short link o normal), embébelo como búsqueda
  if (
    value &&
    /https?:\/\/(maps\.app\.goo\.gl|goo\.gl\/maps|google\.[^/]+\/maps)/.test(
      value
    )
  ) {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      value
    )}&output=embed`;
  }

  // Dirección como texto
  return `https://www.google.com/maps?q=${encodeURIComponent(
    value
  )}&output=embed`;
}

export default function Map() {
  const src = getMapSrc(site.googleMap, site.googleCoords, 16);

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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Ubicación
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Nos encontramos en una ubicación céntrica y de fácil acceso
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info lateral */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Dirección */}
              <div className="bg-[#0e5d88] rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Dirección</h3>
                    <p className="font-light opacity-90 leading-relaxed">
                      {site.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Información de acceso */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0e5d88]/10 rounded-lg flex items-center justify-center">
                      <Car className="h-5 w-5 text-[#0e5d88]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">En auto</h4>
                      <p className="text-sm text-gray-600 font-light">
                        Estacionamiento disponible
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center">
                      <Navigation className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Transporte público
                      </h4>
                      <p className="text-sm text-gray-600 font-light">
                        Múltiples líneas cercanas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0e5d88]/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#0e5d88]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Tiempo promedio
                      </h4>
                      <p className="text-sm text-gray-600 font-light">
                        15-20 min desde el centro
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[400px] shadow-lg">
                {src ? (
                  <iframe
                    src={src}
                    title="Ubicación en Google Maps"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto">
                        <MapPin className="h-8 w-8 text-gray-400" />
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
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
