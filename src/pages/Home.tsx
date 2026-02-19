import AboutSection from "../components/AboutSection";
import ServicesSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";
import HeroCarousel from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection
        title="Our Services"
        description="LEAP offers comprehensive, multidisciplinary project management solutions."
      />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
