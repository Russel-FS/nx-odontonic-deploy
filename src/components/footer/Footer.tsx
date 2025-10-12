"use client";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";
import Logo from "../icons/Logo";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: MessageCircle, // Using MessageCircle as placeholder for TikTok
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0e5d88] to-[#0a4a6b]">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center gap-3">
                <Logo darkMode />
              </div>
              <p className="text-white/80 font-light leading-relaxed max-w-md">
                Transformamos sonrisas con tecnología de vanguardia y el cuidado
                más humano. Tu bienestar dental es nuestra pasión.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 font-light">
                    {site.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90 font-light">{site.phone}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-medium text-white">Navegación</h4>
              <ul className="space-y-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white font-light transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-3 transition-all duration-200" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-medium text-white">Síguenos</h4>

              {/* Social Links */}
              <div className="flex gap-3">
                {Object.entries(site.socials).map(([platform, url]) => {
                  const IconComponent =
                    socialIcons[platform as keyof typeof socialIcons] ||
                    MessageCircle;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <IconComponent className="h-5 w-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white text-[#0e5d88] px-6 py-4 rounded-2xl font-medium hover:bg-white/90 hover:shadow-xl transition-all duration-300 w-full justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos ahora
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70 font-light">
              © {new Date().getFullYear()} {site.shortName}. Todos los derechos
              reservados.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/70 font-light">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para tu sonrisa</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
