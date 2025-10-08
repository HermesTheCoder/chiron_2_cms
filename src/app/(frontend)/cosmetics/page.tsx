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
                className="filter blur-[2px] scale-105 brightness-[0.7] animate-spin-slow"
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
            </div>
          </div>
        </section>

        

        {exosomePoweredTherapiesSection.map((therapy, idx:number) => (
          <section key={idx} id={toId(therapy?.title)} className={`py-16 md:py-24 ${idx%2===1 ? 'bg-white' : 'bg-gray-50'}`}>
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
