"use client";
import { site } from "@/config/site.config";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed right-6 bottom-6 z-50"
    >
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {/* WhatsApp Icon */}
        <WhatsAppIcon className="h-8 w-8" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            ¡Chatea con nosotros!
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
