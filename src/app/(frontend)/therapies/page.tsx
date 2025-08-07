import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our Therapies | Chiron Therapeutics",
  description: "Explore Chiron Therapeutics&apos; innovative stem cell therapies for cartilage regeneration and wound healing, powered by our revolutionary SIST technology.",
};

export default function TherapiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner - Similar to About page with adjusted content */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/experiment.png"
              alt="Stem cell therapy research"
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
              Our Innovative Therapies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              Transforming regenerative medicine through breakthrough stem cell technologies
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle 
                subtitle="OUR APPROACH" 
                title="Revolutionary Stem Cell Therapies"
                accent={true}
              />
              <div className="mt-8 max-w-3xl mx-auto">
                <p className="text-xl text-text-light leading-relaxed text-center mb-8">
                At Chiron Therapeutics, we&apos;re developing cutting-edge autograft stem cell therapies 
                powered by our proprietary Suspension-Induced Stem Cell Transition (SIST) technology. 
                Our pipelines focus on transforming patient cells into targeted therapies for cartilage 
                regeneration and wound healing.
              </p>
              </div>
              <div className="flex justify-center">
                <Button href="#cartilage-regeneration" variant="outline" className="mr-4">Cartilage Regeneration</Button>
                <Button href="#wound-healing" variant="outline">Wound Healing</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pipeline 1: Cartilage Regeneration */}
        <section id="cartilage-regeneration" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Pipeline 1 – Cartilage Regeneration</h2>
                  <p className="text-lg text-text-light mb-6">
                    Using our unique SIST technology, we can reprogram human skin fibroblasts to generate 
                    cartilage-producing chondrocytes. This innovative approach offers a promising solution for 
                    treating joint injuries and degenerative conditions.
                  </p>
                  <p className="text-lg text-text-light mb-6">
                    Our preclinical data demonstrates successful transformation of skin cells into functional 
                    chondrocytes, providing a more accessible and less invasive alternative to traditional methods.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">Contact Us</Button>
                    <Button href="#wound-healing" variant="outline" size="lg">Next Therapy</Button>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* First image for Cartilage Regeneration */}
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="relative h-64 w-full">
                      <Image
                        src="/assets/pipeline_1.png" 
                        alt="SIST-derived Chondrocytes - Alcian blue staining"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="relative h-64 w-full mb-4">
                      <Image
                        src="/assets/pipeline3.png" 
                        alt="SIST-derived Chondrocytes - Immunostaining"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-sm text-text-light text-center">
                    Generating human cartilage-producing cells (chondrocytes) from human skin fibroblasts 
                    confirmed by Alcian blue staining (top) and Immunostaining (bottom).
                  </p>
                  </div>
                  {/* Shared caption for both images */}
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pipeline 2: Wound Healing */}
        <section id="wound-healing" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="relative h-64 w-full mb-4">
                      <Image
                        src="/assets/pipeline2.1.png" 
                        alt="SIST-derived spheroids for wound healing"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-sm text-text-light text-center">
                      Using the SIST platform, we can derive spheroids from dermal fibroblasts (top) and 
                      keratinocytes (bottom) that express mesenchymal stem cell (MSC)- and keratinocyte 
                      stem cell (KSC)-like properties that are favorable for wound healing in a clinical setting.
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Pipeline 2 – Enhancing Wound Healing</h2>
                  <p className="text-lg text-text-light mb-6">
                    Our second pipeline focuses on accelerating wound healing through innovative cell therapy. 
                    The SIST platform enables us to develop cells with properties ideal for treating complex 
                    wounds, including burn injuries and chronic ulcers.
                  </p>
                  <p className="text-lg text-text-light mb-6">
                    These cells provide an alternate safe and efficiently scalable source for wound healing 
                    therapy that can overcome the challenges currently presented with the use of MSCs and KSCs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">Contact Us</Button>
                    <Button href="#pipeline-1" variant="outline" size="lg">Previous Therapy</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-black/40">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More?</h2>
              <p className="text-lg md:text-xl text-text-light mb-10">
                Contact our team to discuss potential collaborations or investment opportunities in our 
                groundbreaking stem cell therapies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/#contact-section" size="lg">Contact Us</Button>
                <Button href="/about" variant="outline" size="lg">About Our Technology</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 