import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Map from "@/components/sections/Map";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <Team />
      <Map />
      <Contact />
    </main>
  );
}
