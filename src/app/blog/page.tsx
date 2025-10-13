"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "5 consejos para mantener una sonrisa saludable",
    category: "Prevención",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Descubre los hábitos diarios que te ayudarán a mantener tus dientes y encías en perfecto estado.",
    date: "15 Oct 2024",
    readTime: "5 min",
    slug: "consejos-sonrisa-saludable",
  },
  {
    title: "Blanqueamiento dental: Todo lo que necesitas saber",
    category: "Estética",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Conoce los diferentes tipos de blanqueamiento dental y cuál es el más adecuado para ti.",
    date: "12 Oct 2024",
    readTime: "7 min",
    slug: "blanqueamiento-dental-guia",
  },
  {
    title: "Ortodoncia invisible: La revolución en brackets",
    category: "Tratamientos",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Descubre cómo la ortodoncia invisible puede transformar tu sonrisa sin afectar tu estilo de vida.",
    date: "10 Oct 2024",
    readTime: "6 min",
    slug: "ortodoncia-invisible",
  },
  {
    title: "Implantes dentales: Recupera tu sonrisa completa",
    category: "Tratamientos",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Todo sobre los implantes dentales: proceso, beneficios y cuidados posteriores.",
    date: "8 Oct 2024",
    readTime: "8 min",
    slug: "implantes-dentales-guia",
  },
  {
    title: "Cuidado dental en niños: Guía para padres",
    category: "Prevención",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Aprende cómo establecer buenos hábitos dentales desde temprana edad.",
    date: "5 Oct 2024",
    readTime: "6 min",
    slug: "cuidado-dental-ninos",
  },
  {
    title: "Tecnología 3D en odontología moderna",
    category: "Innovación",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    excerpt:
      "Conoce cómo la tecnología 3D está revolucionando los tratamientos dentales.",
    date: "3 Oct 2024",
    readTime: "5 min",
    slug: "tecnologia-3d-odontologia",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                Blog
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Consejos, tratamientos y novedades en salud dental
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="pb-32">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="text-[#0e5d88] font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-medium text-gray-900 group-hover:text-[#0e5d88] transition-colors duration-200">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 font-light leading-relaxed">
                        {post.excerpt}
                      </p>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-[#0e5d88] font-medium group-hover:gap-3 transition-all duration-200"
                      >
                        <span>Leer más</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                Mantente informado
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Recibe consejos de salud dental y novedades directamente en tu
                correo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0e5d88] focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#0e5d88] text-white rounded-full font-medium hover:bg-[#0a4a6b] transition-colors duration-200"
              >
                Suscribirse
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
