"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/config/site.config";

export default function ConveniosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Convenios
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Trabajamos con las empresas para brindarte la mejor atención
                dental
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Convenios Actuales */}
      <section className="py-32 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Convenio IMAX */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                <div className="md:w-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-32 md:h-52 w-full flex items-center justify-center bg-gray-50 rounded-3xl shadow-2xl p-6"
                  >
                    <Image
                      src="/convenios/imax.webp"
                      alt="IMAX"
                      width={500}
                      height={420}
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
