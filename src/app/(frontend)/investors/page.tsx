import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ContactSection from "@/components/sections/ContactSection";
import TeamSection from "@/components/sections/about/TeamSection";
import { type InvestorsPage } from "@/payload-types";
import { RichText } from '@payloadcms/richtext-lexical/react';

export const metadata = {
  title: "Investors | Chiron Therapeutics",
  description: "Investment opportunities in Chiron Therapeutics. Learn about our revolutionary stem cell technology, market potential, and connect with our team.",
};

export default async function InvestorsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/investors`);
  const json = await res.json();
  const investorPage: InvestorsPage = json?.docs?.[0];
  const banner = investorPage?.banner;
  const investmentOpportunity = investorPage?.investmentOpportunity;
  const invest = investorPage?.invest;
  const marketAnalysis = investorPage?.marketAnalysis;
  const technologyAndInnovation = investorPage?.technologyAndInnovation;
  const corning = investorPage?.corning;
  const clinicalApplications = investorPage?.clinicalApplications;
  const companyProfile = investorPage?.companyProfile;
  const growthPath = investorPage?.growthPath;
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner */}
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
              <RichText data={banner?.description} />
            </div>
            <div className="mt-8">
              <Button href={banner?.CTA?.link} size="lg">{banner?.CTA?.text}</Button>
            </div>
          </div>
        </section>
        
        {/* Join the Regenerative Revolution Section */}
        <section id="revolution-section" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <SectionTitle 
                subtitle="INVESTMENT OPPORTUNITY" 
                title={investmentOpportunity?.title}
                accent={true}
                alignment="center"
              />
              
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="text-lg text-text-light leading-relaxed mb-6">
                  <RichText data={investmentOpportunity?.description} />
                </div>
                
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary my-8">
                  <div className="text-lg font-medium">
                    <RichText data={investmentOpportunity?.cardData}/>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
                <div>
                  <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
                    {investmentOpportunity?.marketNeeds?.image?.url && <Image
                      src={investmentOpportunity?.marketNeeds?.image?.url ?? ""}
                      alt={investmentOpportunity?.marketNeeds?.image?.alt}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="rounded-xl p-4 bg-white"
                    />}
                  </div>
                </div>
                
                <div className="align-start">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">{investmentOpportunity?.marketNeeds?.title}</h3>
                  <ul className="space-y-4">
                    {investmentOpportunity?.marketNeeds?.pointers?.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-text-light">
                        <strong className="text-gray-900">{point?.title}:</strong> {point?.description}
                      </span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Invest in Chiron Therapeutics Section */}
        <section id="why-invest" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <SectionTitle 
              subtitle="WHY INVEST" 
              title={invest?.title}
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-lg text-text-light">
                <RichText data={invest?.description} />
              </div>
            </div>
            
            {/* Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
              {
                invest?.cards?.map((card, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
                  >
                    <div className="p-6 border-b border-gray-100">
                      <div className="relative w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                        {card?.icon?.url && <Image
                          src={card?.icon?.url ?? ""}
                          alt={card?.icon?.alt || ""}
                          fill
                          priority
                          quality={90}
                          className="object-contain"
                        />}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{card?.title}</h3>
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-text-light">
                        <RichText data={card?.description} />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        
        {/* Strategic Market Advantage Section */}
        <section id="market-advantage" className="py-16 md:py-24 bg-white">
          <div className="container">
            <SectionTitle 
              subtitle="MARKET ANALYSIS" 
              title={marketAnalysis?.title}
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-lg text-text-light">
                <RichText data={marketAnalysis?.description}/>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{marketAnalysis?.primaryCard?.title}</h3>
                <div className="text-text-light mb-6">
                  <RichText data={marketAnalysis?.primaryCard?.description} />
                </div>
              </div>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                {marketAnalysis?.primaryCard?.image?.url && <Image
                  src={marketAnalysis?.primaryCard?.image?.url ?? ""}
                  alt={marketAnalysis?.primaryCard?.image?.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />}
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                  marketAnalysis?.primaryCard?.feature?.map((feature, idx: number) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold text-primary">{feature?.title}</h4>
                      <p className="text-sm text-text-light">{feature?.text}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                  marketAnalysis?.secondaryCard?.map((card, cardIdx) => (
                    <div key={cardIdx} className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-4 flex gap-2 items-center">
                        {card?.icon?.url && <img 
                        src={card?.icon?.url} 
                        alt={card?.icon?.alt} />}
                        {card?.title}
                      </h3>
                      <ul className="space-y-3">
                        {card.point?.map((point, pointIdx) => (
                          <li key={`card-${cardIdx}-feature-${pointIdx}`} className="flex gap-2 items-start">
                            <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{point?.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Licensed Therapies Section */}
        <section id="licensed-therapies" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <SectionTitle 
              subtitle="TECHNOLOGY & INNOVATION" 
              title={technologyAndInnovation?.title}
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-lg text-text-light">
                <RichText data={technologyAndInnovation?.description} />
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center auto-rows-fr">
                {/* Charts - Tech & Innovation*/}
                {technologyAndInnovation?.card?.map((card, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <h3 className="text-2xl font-bold mb-4">{card?.title}</h3>
                  <div className="text-text-light mb-6">
                    <RichText data={card?.description} />
                  </div>
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    {card?.image?.url && <Image
                      src={card?.image?.url ?? ""}
                      alt={card?.image?.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />}
                  </div>
                </div>
                ))}
              </div>
              
              {/* SIST Breakthrough Box */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 shadow-lg mb-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-center">{technologyAndInnovation?.card2?.title}</h3>
                  <div className="text-lg text-text-light leading-relaxed mb-6 text-center">
                    <RichText data={technologyAndInnovation?.card2?.description}/>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {technologyAndInnovation?.card2?.features?.map((feature, idx) => (
                      <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg mb-3 flex gap-2 items-center">
                        {feature?.icon?.url && <img src={feature?.icon?.url} alt={feature?.icon?.alt} />}
                        {feature?.title}
                      </h4>
                      <div className="text-text-light">
                        <RichText data={feature?.description} />
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Strategic Collaboration with Corning */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-48 h-16 relative mb-6">
                    <Image 
                      src="/assets/Corning_logo.png"
                      alt="Corning logo"
                      fill
                      objectFit="contain"
                      priority
                    />
                  </div>
                    <h3 className="text-2xl font-bold">{corning?.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {corning?.cards?.map((card, idx) => (
                    <div key={idx} className="border-l-4 border-primary p-4 bg-gray-50 rounded-r-lg">
                    <h4 className="font-bold mb-2">{card?.title}</h4>
                    <div className="text-sm text-text-light">
                      <RichText data={card?.description}/>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Pipeline Focus Section */}
        <section id="pipeline-focus" className="py-16 md:py-24 bg-white">
          <div className="container">
            <SectionTitle 
              subtitle="CLINICAL APPLICATIONS" 
              title={clinicalApplications?.title}
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-lg text-text-light">
                <RichText data={clinicalApplications?.description} />
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {clinicalApplications?.card?.map((card, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-primary/30 to-primary/10 relative p-8">
                    <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${card?.image?.url})` }}></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4">
                        {card?.icon?.url && <Image
                          src={card?.icon?.url}
                          alt={card?.icon?.alt}
                          fill
                          className="object-contain p-4"
                        />}

                      </div>
                      <h3 className="text-2xl font-bold text-white">{card?.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-text-light mb-6">
                      <RichText data={card?.description} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">{card?.stage}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{card?.filing}</span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{clinicalApplications?.regulatoryStrategy?.title}</h3>
                </div>
                <div className="pl-8">
                  <div className="text-text-light mb-4">
                    <RichText data={clinicalApplications?.regulatoryStrategy?.description} />
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                      clinicalApplications?.regulatoryStrategy?.points?.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{point?.text}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Journey Section - Condensed Version */}
        <section id="investment-journey" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <SectionTitle 
              subtitle="GROWTH PATH" 
              title={growthPath?.title}
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 mb-6 md:mb-8 relative rounded-full overflow-hidden">
                <div className="absolute w-1/3 h-full bg-primary"></div>
              </div>
              
              {/* Timeline Cards */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-between mb-8">
                {/* Current: Seed Round */}
                <div className="bg-primary/5 rounded-xl p-4 sm:p-6 md:w-1/4 relative border-l-4 border-primary">
                  <div className="absolute -top-4 left-4 sm:left-6 bg-primary text-white text-xs px-3 py-1 rounded-full">CURRENT</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{growthPath?.phases?.[0]?.title}</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <RichText data={growthPath?.phases?.[0]?.description} />
                  </div>
                </div>
                
                {/* Next: IND/Phase I */}
                {growthPath?.phases.slice(1).map((phase, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-6 md:w-1/4 border-l-4 border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{phase?.title}</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <RichText data={phase?.description} />
                  </div>
                </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="text-center mt-6">
                <Button href={growthPath?.cta?.link} size="lg" className="w-full sm:w-auto py-3 px-6 md:py-3 md:px-8">
                  {growthPath?.cta?.title}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who We Are Section */}
        <section id="who-we-are" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <SectionTitle 
                subtitle="COMPANY PROFILE" 
                title={companyProfile?.title}
                accent={true}
                alignment="center"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
                <div className="lg:col-span-3">
                  <div className="text-lg text-text-light leading-relaxed mb-6">
                    <RichText data={companyProfile?.description} />
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 my-8">
                    <h3 className="text-xl font-bold mb-3">{companyProfile?.mission?.title}</h3>
                    <p className="text-lg text-text-light leading-relaxed">
                      {companyProfile?.mission?.description}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-3">{companyProfile?.mission2?.title}</h3>
                    <p className="text-lg text-text-light leading-relaxed mb-4">
                      {companyProfile?.mission2?.description}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="sticky top-20">
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg mb-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {companyProfile?.companyHighlights?.title}
                      </h3>
                      <ul className="space-y-3">
                        {
                          companyProfile?.companyHighlights?.highlights?.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{highlight?.highlight}</span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="text-center">
                      <Button href={companyProfile?.CTA?.link} size="lg">
                        {companyProfile?.CTA?.text}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <TeamSection 
          layout="three-column"
          maxMembers={3}
          subtitle="LEADERSHIP"
        />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 
