import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MissionSection from "@/components/sections/about/MissionSection";
import HistorySection from "@/components/sections/about/HistorySection";
import PipelineSection from "@/components/sections/about/PipelineSection";
import TeamSection from "@/components/sections/about/TeamSection";
import Image from "next/image";
import { About } from "@/payload-types";
import { RichText } from '@payloadcms/richtext-lexical/react';

export const metadata = {
  title: "About Us | Chiron Therapeutics",
  description: "Learn about Chiron Therapeutics' mission, history, innovative stem cell technology, and our expert team driving the future of regenerative medicine.",
};

export default async function AboutPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/about`);
  const json = await res.json();
  const aboutPage: About = json?.docs?.[0];
  const banner = aboutPage?.banner;
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner - Adjusted padding to avoid header collision */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            {banner?.backgroundImage?.url && <Image
              src={banner?.backgroundImage?.url ?? ""}
              alt={banner?.backgroundImage?.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              quality={90}
              className="filter blur-[2px] scale-105 brightness-[0.7]"
            />}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 backdrop-blur-sm"></div>
          </div>
          
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-lg mb-4">
              {banner?.title}
            </h1>
            <div className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              <RichText 
              data={banner?.description} />
            </div>
          </div>
        </section>
        
        {/* Main Content Sections */}
        <MissionSection data={aboutPage?.ourMission} />
        <HistorySection data={aboutPage?.ourStory} />
        <PipelineSection data={aboutPage?.therapeuticsIntro} />
        
        {/* Cosmetics/Exosome Skincare Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Cosmetics & Skincare</h2>
                <p className="text-xl text-text-light max-w-3xl mx-auto">
                  Discover our cutting-edge exosome-powered skincare solutions that go beyond traditional cosmetics
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Exosome-Powered Skincare & Rejuvenation</h3>
                  <div className="text-lg text-text-light mb-6 space-y-4">
                    <p>
                      Unlike traditional cosmetic ingredients that only act on the skin's surface, our MSC-derived exosomes penetrate deeply into the skin, delivering powerful regenerative signals that awaken the body's own repair mechanisms.
                    </p>
                    <p>
                      Experience next-generation solutions for skin rejuvenation where science, safety, and efficacy meet to unlock the skin's natural ability to heal, renew, and thrive.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/cosmetics" 
                      className="btn btn-primary py-3 px-8 text-base tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] hover:scale-[1.02]"
                    >
                      Explore Cosmetics
                    </a>
                    <a 
                      href="/cosmetics#skin-care-rejuvenation" 
                      className="btn btn-outline py-3 px-8 text-base tracking-wide transition-all duration-300 hover:bg-red-50"
                    >
                      Learn About Skincare
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold mb-3 text-primary">Skin Care & Rejuvenation</h4>
                    <p className="text-text-light mb-4">
                      MSC-derived exosomes rejuvenate skin at the cellular level, reducing wrinkles and enhancing hydration for sustained youthful radiance.
                    </p>
                    <a href="/cosmetics#skin-care-rejuvenation" className="text-primary font-medium hover:underline">
                      Learn More →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold mb-3 text-primary">Advanced Wound Care</h4>
                    <p className="text-text-light mb-4">
                      Exosomes accelerate healing of chronic wounds, diabetic ulcers, and post-surgical scars through powerful regenerative properties.
                    </p>
                    <a href="/cosmetics#advanced-wound-care" className="text-primary font-medium hover:underline">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection layout="three-column" />
      </main>
      <Footer />
    </>
  );
} 