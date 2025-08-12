import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import TherapiesSection from "@/components/sections/TherapiesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ContactSection from "@/components/sections/ContactSection";
import type { Home } from "@/payload-types";

const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/home`);
const json = await res.json();
const homePage: Home = json?.docs?.[0];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero data={homePage?.banner}/>
        <AdvantagesSection data={homePage?.advantages} />
        
        {/* Original Therapies Section */}
        <TherapiesSection data={homePage?.therapySection}/>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
