import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Exosome-Powered Skincare & Rejuvenation | Chiron Therapeutics",
  description: "Discover Chiron Therapeutics' revolutionary MSC-derived exosome technology for advanced skin care, rejuvenation, and wound healing solutions.",
};

export default function ExosomeSkincarePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/Pipeline 1.png"
              alt="Exosome-Powered Skincare & Rejuvenation"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              quality={90}
              className="filter blur-[2px] scale-105 brightness-[0.7] animate-spin-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 backdrop-blur-sm"></div>
          </div>
          
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-lg mb-4">
              Exosome-Powered Skincare & Rejuvenation
            </h1>
            <div className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              <p>
                MSC-derived exosome in Skin Care, rejuvenation and Wound Care
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle
                subtitle="REVOLUTIONARY TECHNOLOGY"
                title="Beyond Surface-Level Cosmetics"
                accent={true}
              />
              <div className="mt-8 max-w-3xl mx-auto">
                <div className="text-xl text-text-light leading-relaxed text-center mb-8">
                  <p className="mb-6">
                    Unlike traditional cosmetic ingredients that only act on the skin's surface, exosomes are natural nano-vesicles secreted by MSCs that penetrate deeply into the skin, delivering powerful regenerative signals that awaken the body's own repair mechanisms.
                  </p>
                  <p className="mb-8">
                    With MSC-derived exosomes from Chiron Therapeutics, skin and wound care moves beyond surface-level cosmetics to a truly regenerative approach. Our vision is to deliver next-generation solutions for skin rejuvenation—where science, safety, and efficacy meet to unlock the skin's natural ability to heal, renew, and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skin Care & Rejuvenation Section */}
        <section id="skin-care-rejuvenation" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Skin Care & Rejuvenation
                  </h2>
                  <div className="text-lg text-text-light mb-6">
                    <p>
                      MSC-derived exosomes rejuvenate skin at the cellular level, reducing wrinkles and enhancing hydration for sustained youthful radiance.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">
                      Get Started
                    </Button>
                    <Button href="/about" variant="outline" size="lg">
                    About Our Research
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Skin Care & Rejuvenation Image */}
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/media/Pipeline 1 Picture1.png"
                        alt="Skin Care & Rejuvenation - MSC-derived exosomes for cellular-level skin rejuvenation"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-text-light text-center mt-4">
                      Skin Care & Rejuvenation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Advanced Wound Care Section */}
        <section id="advanced-wound-care" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/media/Pipeline 1 Picture2.png"
                        alt="Advanced Wound Care - MSC-derived exosomes for accelerated healing of chronic wounds and diabetic ulcers"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-text-light text-center mt-4">
                      Advanced Wound Care
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Advanced Wound Care
                  </h2>
                  <div className="text-lg text-text-light mb-6">
                    <p>
                      Exosomes accelerate healing of chronic wounds, diabetic ulcers, and post-surgical scars through powerful regenerative properties.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">
                      Get Started
                    </Button>
                    <Button href="/about" variant="outline" size="lg">
                      About Our Research
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <SectionTitle
                  subtitle="WHY EXOSOMES?"
                  title="The Science Behind Regenerative Skincare"
                  accent={true}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Deep Penetration</h3>
                  <p className="text-text-light">
                    Natural nano-vesicles that penetrate deeply into the skin, reaching cellular levels for maximum effectiveness.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Natural Regeneration</h3>
                  <p className="text-text-light">
                    Awakens the body's own repair mechanisms through powerful regenerative signals from MSC-derived exosomes.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Proven Safety</h3>
                  <p className="text-text-light">
                    Science-backed approach combining safety and efficacy for next-generation skin rejuvenation solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-black/40">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Regenerative Skincare?</h2>
              <p className="text-lg md:text-xl text-text-light mb-10">
                Contact our team to learn more about our exosome-powered skincare and wound care solutions, 
                or explore potential collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/#contact-section" size="lg">Contact Us</Button>
                <Button href="/about" variant="outline" size="lg">Learn About Our Company</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
