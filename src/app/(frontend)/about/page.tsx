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

const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/about`);
const json = await res.json();
const aboutPage: About = json?.docs?.[0];
const banner = aboutPage?.banner;


export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner - Adjusted padding to avoid header collision */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={banner?.backgroundImage?.url ?? ""}
              alt={banner?.backgroundImage?.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              quality={90}
              className="filter blur-[2px] scale-105 brightness-[0.7]"
            />
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
        <TeamSection layout="three-column" />
      </main>
      <Footer />
    </>
  );
} 