import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import TherapiesSection from "@/components/sections/TherapiesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <AdvantagesSection />
        
        {/* Original Therapies Section */}
        <TherapiesSection />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
