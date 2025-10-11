import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { CosmeticsPage } from "@/payload-types";
import { toId } from "@/utils/stringUtils";

export const metadata = {
  title: "Exosome-Powered Skincare & Rejuvenation | Chiron Therapeutics",
  description:
    "Discover Chiron Therapeutics' revolutionary MSC-derived exosome technology for advanced skin care, rejuvenation, and wound healing solutions.",
};

export default async function ExosomeSkincarePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/exosome-skincare`
  );
  const json = await res.json();
  const cosmeticsPage: CosmeticsPage = json?.docs?.[0];
  const banner = cosmeticsPage?.banner;
  const introduction = cosmeticsPage?.introduction;
  const benefitsSection = cosmeticsPage?.benefitsSection;
  const ctaSection = cosmeticsPage?.ctaSection;
  const exosomePoweredTherapiesSection =
    cosmeticsPage?.exosomePoweredTherapiesSection;

  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-500",
    "from-pink-500 to-red-500",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            {banner?.backgroundImage?.url && (
              <Image
                src={banner?.backgroundImage?.url}
                alt={banner?.backgroundImage?.alt}
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
              <p>
                {banner?.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <SectionTitle
                subtitle={introduction?.subtitle}
                title={introduction?.title}
                accent={true}
              />
              <div className="mt-8 max-w-3xl mx-auto">
                <div className="text-xl text-text-light leading-relaxed text-center mb-8">
                  <div className="mb-8">
                    <RichText data={introduction?.description} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                {exosomePoweredTherapiesSection?.map((therapy, idx: number) => (
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

        {exosomePoweredTherapiesSection.map((therapy, idx:number) => (
          <section key={idx} id={toId(therapy?.linkedButtonText)} className={`py-16 md:py-24 ${idx%2===1 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 space-y-8 ${(idx&1) ? 'lg:order-1' : 'order-2' }`}>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="relative h-64 w-full rounded-lg overflow-hidden">
                        {therapy?.image?.url && (
                          <Image
                            src={therapy?.image?.url}
                            alt={therapy?.image?.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                          />
                        )}
                      </div>
                      <p className="text-sm text-text-light text-center mt-4">
                        {therapy?.imageCaption}
                      </p>
                    </div>
                  </div>

                  <div className={`order-1 ${(idx&1) ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {therapy?.title}
                    </h2>
                    <div className="text-lg text-text-light mb-6">
                      <div>
                        <RichText data={therapy?.description} />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      {therapy?.primaryCTA?.text && (
                        <Button
                          href={therapy?.primaryCTA?.link}
                          size="lg"
                        >
                          {therapy?.primaryCTA?.text}
                        </Button>
                      )}
                      {therapy?.secondaryCTA?.text && (
                        <Button
                          href={therapy?.secondaryCTA?.link}
                          variant="outline"
                          size="lg"
                        >
                          {therapy?.secondaryCTA?.text}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Technology Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <SectionTitle
                  subtitle={benefitsSection?.subtitle}
                  title={benefitsSection?.title}
                  accent={true}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefitsSection?.benefits?.map((benefit, idx: number) => (
                  <div
                    key={idx}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br rounded-full flex items-center justify-center ${gradients[idx % 3]}`}
                    >
                      {benefit?.icon?.url && (
                        <img
                          src={benefit?.icon?.url}
                          alt={benefit?.icon?.alt}
                          className="object-contain p-4"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit?.title}</h3>
                    <div className="text-text-light">
                      <RichText data={benefit?.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                {/* Redefining Skin Health Section */}
                <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Redefining Skin Health
                </h2>
                <p className="text-lg text-text-light max-w-4xl mx-auto">
                  With MSC-derived exosomes from Chiron Therapeutics, skincare moves beyond surface-level cosmetics to a truly regenerative approach.
                  Our vision is to deliver next-generation solutions for skin rejuvenation—where science, safety, and efficacy meet to unlock the skin's
                  natural ability to heal, renew, and thrive.
                </p>
              </div>
              
              {/* Two cards side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Science Meets Beauty Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Science Meets Beauty
                    </h3>
                  </div>
                  <p className="text-text-light leading-relaxed">
                    Chiron Therapeutics is committed to advancing exosome-based cosmetics
                    that are not only effective but biologically meaningful. Explore our pipelines
                    and discover how cellular science can elevate your skincare and wound care
                    experience.
                  </p>
                </div>
                
                {/* Healing Meets Innovation Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Healing Meets Innovation
                    </h3>
                  </div>
                  <p className="text-text-light leading-relaxed">
                    Our cutting-edge exosome technology harnesses the power of mesenchymal stem cells
                    to deliver regenerative signals directly to skin cells, promoting natural healing
                    and rejuvenation at the cellular level.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {ctaSection?.title}
              </h2>
              <p className="text-lg md:text-xl text-text-light mb-10">
                {ctaSection?.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {ctaSection?.primaryCTA?.text && (
                  <Button href={ctaSection?.primaryCTA?.link} size="lg">
                    {ctaSection?.primaryCTA?.text}
                  </Button>
                )}
                {ctaSection?.secondaryCTA?.text && (
                  <Button
                    href={ctaSection?.secondaryCTA?.text}
                    variant="outline"
                    size="lg"
                  >
                    {ctaSection?.secondaryCTA?.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
