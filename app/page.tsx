import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Media from "@/components/Media";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Events />
      <Media />
      <Community />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
