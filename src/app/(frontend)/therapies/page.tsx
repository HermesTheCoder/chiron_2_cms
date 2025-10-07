import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Therapies } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { toId } from "@/utils/stringUtils";

export const metadata = {
  title: "Our Therapies | Chiron Therapeutics",
  description:
    "Explore Chiron Therapeutics&apos; innovative stem cell therapies for cartilage regeneration and wound healing, powered by our revolutionary SIST technology.",
};
/**
 * Fetch the 'Therapies' collection data from PayloadCMS
 */

export default async function TherapiesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/therapies`);
  const json = await res.json();
  const section: Therapies = json?.docs?.[0];
  const banner = section?.banner;
  const ourApproach = section?.ourApproach;
  const therapies = section?.therapies;
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner - Similar to About page with adjusted content */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            {banner?.image?.url && (
              <Image
                src={banner?.image?.url ?? ""}
                alt={banner?.image?.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
                quality={90}
                className="filter blur-[2px] scale-105 brightness-[0.7]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 backdrop-blur-sm"></div>
          </div>

          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-lg mb-4">
              {banner?.title}
            </h1>
            <div className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              <RichText data={banner?.description} />
            </div>
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
                <div className="text-xl text-text-light leading-relaxed text-center mb-8">
                  <RichText data={ourApproach?.description} />
                </div>
              </div>
              <div className="flex justify-center">
                {therapies?.map((therapy, idx: number) => (
                  <Button
                    key={idx}
                    href={"#" + toId(therapy?.linkedButtonText)}
                    variant="outline"
                    className="mr-4 last:mr-0"
                  >
                    {therapy?.linkedButtonText}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {therapies?.map((therapy, idx: number) => (
          <section
            key={idx}
            id={toId(therapy?.linkedButtonText)}
            className={`py-16 md:py-24 ${idx & 1 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`space-y-8 order-2 ${idx & 1 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      {therapy?.image1?.url && (
                        <div className="relative h-64 w-full mb-4">
                          <Image
                            src={therapy?.image1?.url ?? ""}
                            alt={therapy?.image1?.alt}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                      {therapy?.image2?.url && (
                        <div className="relative h-64 w-full mb-4">
                          <Image
                            src={therapy?.image2?.url ?? ""}
                            alt={therapy?.image2?.alt}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                      <p className="text-sm text-text-light text-center">
                        {therapy?.caption}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`order-1 ${idx & 1 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {therapy?.title}
                    </h2>
                    <div className="text-lg text-text-light mb-6">
                      <RichText data={therapy?.description} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button href={therapy?.primaryCTA?.link} size="lg">
                        {therapy?.primaryCTA?.text}
                      </Button>
                      <Button
                        href={therapy?.secondaryCTA?.link}
                        variant="outline"
                        size="lg"
                      >
                        {therapy?.secondaryCTA?.text}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-black/40">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Learn More?
              </h2>
              <p className="text-lg md:text-xl text-text-light mb-10">
                Contact our team to discuss potential collaborations or
                investment opportunities in our groundbreaking stem cell
                therapies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/#contact-section" size="lg">
                  Contact Us
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  About Our Technology
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
