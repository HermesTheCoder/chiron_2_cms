import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our Therapies | Chiron Therapeutics",
  description: "Explore Chiron Therapeutics&apos; innovative stem cell therapies for cartilage regeneration and wound healing, powered by our revolutionary SIST technology.",
};
/**
 * Fetch the 'Therapies' collection data from PayloadCMS 
 */
const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/therapies`);
const json = await res.json();
const section = json?.docs?.[0];
const banner = section?.banner;
const ourApproach = section?.ourApproach;
const therapies = section?.therapies;

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
              src={banner?.image?.url}
              alt={banner?.image?.alt}
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
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              {banner?.description}
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle
                subtitle="OUR APPROACH"
                title={ourApproach?.title}
                accent={true}
              />
              <div className="mt-8 max-w-3xl mx-auto">
                <p className="text-xl text-text-light leading-relaxed text-center mb-8">
                  {ourApproach?.description}
                </p>
              </div>
              <div className="flex justify-center">
                <Button href="#cartilage-regeneration" variant="outline" className="mr-4">{ourApproach?.primaryCTA}</Button>
                <Button href="#wound-healing" variant="outline">{ourApproach?.secondaryCTA}</Button>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {therapies[0]?.title}
                  </h2>
                  <p className="text-lg text-text-light mb-6">
                    {therapies[0]?.primaryDescription}
                  </p>
                  <p className="text-lg text-text-light mb-6">
                    {therapies[0]?.secondaryDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">
                      {therapies[0]?.primaryCTA}
                    </Button>
                    <Button href="#wound-healing" variant="outline" size="lg">
                      {therapies[0]?.secondaryCTA}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* First image for Cartilage Regeneration */}
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="relative h-64 w-full">
                      <Image
                        src={therapies[0]?.image1?.url}
                        alt={therapies[0]?.image1?.alt}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="relative h-64 w-full mb-4">
                      <Image
                        src={therapies[0]?.image2?.url}
                        alt={therapies[0]?.image1?.alt}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-sm text-text-light text-center">
                      {therapies[0]?.caption}
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
                        src={therapies[1]?.image1?.url}
                        alt={therapies[1]?.image1?.alt}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-sm text-text-light text-center">
                      {therapies[1]?.caption}
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {therapies[1]?.title}
                  </h2>
                  <p className="text-lg text-text-light mb-6">
                    {therapies[1]?.primaryDescription}
                  </p>
                  <p className="text-lg text-text-light mb-6">
                    {therapies[1]?.secondaryDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button href="/#contact-section" size="lg">
                      {therapies[1]?.primaryCTA}
                    </Button>
                    <Button href="#pipeline-1" variant="outline" size="lg">
                      {therapies[1]?.secondaryCTA}
                    </Button>
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