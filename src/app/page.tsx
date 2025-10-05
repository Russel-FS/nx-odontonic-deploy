import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Map from "@/components/sections/Map";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
        <Map />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
