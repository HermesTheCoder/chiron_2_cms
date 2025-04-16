import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ContactSection from "@/components/sections/ContactSection";
import TeamSection from "@/components/sections/about/TeamSection";

export const metadata = {
  title: "Investors | Chiron Therapeutics",
  description: "Investment opportunities in Chiron Therapeutics. Learn about our revolutionary stem cell technology, market potential, and connect with our team.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero/Banner */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero_image1.png"
              alt="Investor opportunities"
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
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-shadow">
              Join us in revolutionizing regenerative medicine with breakthrough stem cell technologies
            </p>
            <div className="mt-8">
              <Button href="#contact-section" size="lg">Connect With Us</Button>
            </div>
          </div>
        </section>
        
        {/* Join the Regenerative Revolution Section */}
        <section id="revolution-section" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <SectionTitle 
                subtitle="INVESTMENT OPPORTUNITY" 
                title="Join the Regenerative Revolution with Chiron Therapeutics"
                accent={true}
                alignment="center"
              />
              
              <div className="mt-12 max-w-4xl mx-auto">
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  Chiron Therapeutics presents a transformative investment opportunity at the forefront of regenerative medicine, where validated science meets vast commercial potential.
                </p>
                
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  While iPSC-based therapies continue to face critical challenges in safety, consistency, and scalability, Chiron&apos;s proprietary SIST technology offers a practical and clinically viable alternative.
                </p>
                
                <p className="text-lg text-text-light leading-relaxed mb-6">
                  By harnessing the innate regenerative capacity of adult stem cells, SIST bridges the gap between scientific promise and therapeutic reality.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary my-8">
                  <p className="text-lg font-medium">
                    With the global regenerative medicine market projected to reach $48.83 billion by 2034 (Precedence Research), Chiron is uniquely positioned to capture significant market share—delivering both near-term impact and long-term value.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
                <div>
                  <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/assets/SIST-v3.png"
                      alt="SIST Technology"
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="rounded-xl p-4 bg-white"
                    />
                  </div>
                </div>
                
                <div className="align-start">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Addressing Critical Market Needs</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-text-light">
                        <strong className="text-gray-900">Safety First:</strong> Non-genetic reprogramming eliminates tumor risks associated with iPSCs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-text-light">
                        <strong className="text-gray-900">Scalability:</strong> 100X expansion of adult stem cells enables commercial-scale production
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-text-light">
                        <strong className="text-gray-900">Clinical Efficiency:</strong> Accelerated regulatory pathway compared to genetically modified cells
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-text-light">
                        <strong className="text-gray-900">Cost-Effectiveness:</strong> Lower manufacturing costs translate to improved profit margins
                      </span>
                    </li>
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
              title="Why Invest in Chiron Therapeutics"
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-text-light">
                Our unique approach to stem cell technology offers compelling advantages for investors seeking both scientific innovation and commercial potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Advantage 1 - Market Fit */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="p-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Market Fit</h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-text-light">
                    $12.35 billion market (2023) is projected to grow at a CAGR of 11.2% by 2030, positioning Chiron to lead the adult stem cells market.
                  </p>
                </div>
              </div>
              
              {/* Advantage 2 - De-Risked */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="p-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">De-Risked</h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-text-light">
                    Corning sponsorship and SIST technology avoids safety concerns plaguing stem cell therapy, providing a faster path into the clinic.
                  </p>
                </div>
              </div>
              
              {/* Advantage 3 - Upside */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="p-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Upside</h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-text-light">
                    Ontario offers a 30% cost advantage compared to the U.S., and coupled with proven data-driven performance, projects lean growth and maximizes potential returns for investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Strategic Market Advantage Section */}
        <section id="market-advantage" className="py-16 md:py-24 bg-white">
          <div className="container">
            <SectionTitle 
              subtitle="MARKET ANALYSIS" 
              title="Strategic Market Advantage"
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-text-light">
                The rapidly growing adult stem cells market presents a substantial opportunity for Chiron&apos;s innovative technologies and treatments.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Adult Stem Cells Market Growth</h3>
                <p className="text-text-light mb-6">
                  The adult stem cells market is projected to reach $12.4 billion by 2023, with steady growth to 2030 at a CAGR of 11.2%. This trend highlights the increasing demand for regenerative medicine solutions like those offered by Chiron Therapeutics.
                </p>
              </div>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/assets/stretagy.png"
                  alt="Adult Stem Cells Market Size Chart showing growth from 2020 to 2030"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-primary">11.2%</h4>
                  <p className="text-sm text-text-light">Global Market CAGR, 2024-2030</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-primary">Autologous Focus</h4>
                  <p className="text-sm text-text-light">Fastest growing segment in the market</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Key Market Drivers
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Increasing prevalence of chronic diseases</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Growing aging population worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advancements in stem cell technology</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Rising demand for regenerative treatments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Chiron&apos;s Competitive Edge
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SIST technology enables 100X higher yield than competitors</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Focused on autologous market segment with highest growth</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strategic partnership with Corning provides manufacturing edge</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lower cost base in Ontario creates sustainable margins</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Licensed Therapies Section */}
        <section id="licensed-therapies" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <SectionTitle 
              subtitle="TECHNOLOGY & INNOVATION" 
              title="Our Licensed Therapies"
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-text-light">
                There is a huge gap between the availability and clinical demand for Adult Stem Cells in the Regenerative Medicine market.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                {/* First Chart - MSC Gap */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Adult Stem Cell Scarcity vs Growing Demand</h3>
                  <p className="text-text-light mb-6">
                    Current methods can only provide a fraction of the adult stem cells needed for clinical applications, with a 10,000x gap between supply and demand.
                  </p>
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/assets/adult_stem_cell.png"
                      alt="Chart showing 10,000x gap between available MSCs and projected clinical demand"
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Second Chart - SIST 100x yield */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">SIST Technology Yield Advantage</h3>
                  <p className="text-text-light mb-6">
                    Our technology delivers a 100x increase in stem cell yield compared to traditional isolation methods, dramatically improving manufacturing economics.
                  </p>
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/assets/sist_tech.png"
                      alt="Chart showing 100x yield increase with SIST technology compared to traditional MSC isolation"
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* SIST Breakthrough Box */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 shadow-lg mb-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-center">SIST™ Breakthrough: IP-Licensed Innovation with Unmatched Potential</h3>
                  <p className="text-lg text-text-light leading-relaxed mb-6 text-center">
                    Chiron&apos;s SIST™ technology offers a clinically validated, transgene-free solution to the expansion of adult stem cells—100x more efficient than traditional methods—while avoiding the complex FDA hurdles of iPSC-based therapies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Safety Advantage
                      </h4>
                      <p className="text-text-light">
                        Avoids iPSC FDA hurdles (e.g., tumorigenicity risks delaying approvals) by using transgene-free approach with adult stem cells
                      </p>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Production Efficiency
                      </h4>
                      <p className="text-text-light">
                        100x expansion of adult stem cells enables cost-effective manufacturing at scale, addressing the massive gap in clinical demand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Strategic Collaboration with Corning */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Strategic Collaboration with Corning</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border-l-4 border-primary p-4 bg-gray-50 rounded-r-lg">
                    <h4 className="font-bold mb-2">Sponsorship</h4>
                    <p className="text-sm text-text-light">
                      Corning will be providing support via the supply of Elplasia plates for adult stem cell manufacturing.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary p-4 bg-gray-50 rounded-r-lg">
                    <h4 className="font-bold mb-2">Elplasia Plates</h4>
                    <p className="text-sm text-text-light">
                      Enables us to optimize the scale up of SIST based production of adult stem cells. They cost-effectively drive Chiron&apos;s ability to manufacture adult stem cells at scale.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary p-4 bg-gray-50 rounded-r-lg">
                    <h4 className="font-bold mb-2">Regulatory Impact</h4>
                    <p className="text-sm text-text-light">
                      Critical for preclinical data generation and eventual FDA/Health Canada filings.
                    </p>
                  </div>
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
              title="Our Pipeline Focus"
              accent={true}
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-text-light">
                Chiron is advancing adult stem cell therapies with our proprietary SIST technology platform to address significant unmet medical needs.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Cartilage Regeneration */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-primary/30 to-primary/10 relative p-8">
                    <div className="absolute inset-0 bg-[url('/assets/hero_image2.png')] bg-cover bg-center"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cartilage Regeneration</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-text-light mb-6">
                      Articular cartilage injuries affect up to 36% of athletes, while osteoarthritis impacts over 53 million adults in the U.S. alone—creating an urgent need for advanced, less invasive regenerative therapies. Chiron&apos;s SIST technology offers a game-changing solution, positioning us to meet this unmet clinical need with a scalable and effective regenerative approach.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Preclinical Stage</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">IND Filing: 2025</span>
                    </div>
                  </div>
                </div>
                
                {/* Wound Healing */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-accent/30 to-accent/10 relative p-8">
                    <div className="absolute inset-0  bg-[url('/assets/experiment.png')] bg-cover bg-center"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Enhancing Wound Healing</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-text-light mb-6">
                      Chiron&apos;s SIST™ platform enables the rapid, scalable generation of human keratinocyte stem cells, providing a highly effective, minimally invasive method for wound healing, offering a significant improvement over traditional treatments.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm font-medium">Preclinical Stage</span>
                      </div>
                      <span className="text-sm text-accent font-semibold">IND Filing: 2026</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Regulatory Strategy</h3>
                </div>
                <div className="pl-8">
                  <p className="text-text-light mb-4">
                    Our adult stem cell approach benefits from a clearer regulatory pathway compared to genetic modification technologies:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">No need for extensive genetic safety studies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Established precedent with multiple adult stem cell approvals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Significant reduction in tumorigenic risk</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Streamlined clinical trial design</span>
                    </li>
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
              title="Our Investment Journey"
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
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Seed Round</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <p><span className="font-medium">Raise:</span> $4M</p>
                    <p><span className="font-medium">Valuation:</span> $20M pre-money</p>
                    <p><span className="font-medium">Allocation:</span></p>
                    <ul className="pl-4 list-disc text-xs space-y-1">
                      <li>$2M IND preparation</li>
                      <li>$1M manufacturing</li>
                      <li>$1M operations</li>
                    </ul>
                  </div>
                </div>
                
                {/* Next: IND/Phase I */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:w-1/4 border-l-4 border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">IND/Phase I</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <p><span className="font-medium">Timeline:</span> 18 months</p>
                    <p><span className="font-medium">Focus:</span> Preclinical data, regulatory filings</p>
                    <p><span className="font-medium">Key Milestone:</span> First-in-human trials</p>
                  </div>
                </div>
                
                {/* Future: Series A */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:w-1/4 border-l-4 border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Series A</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <p><span className="font-medium">Target:</span> $20M+</p>
                    <p><span className="font-medium">Timeline:</span> 2025</p>
                    <p><span className="font-medium">Focus:</span> Clinical advancement, manufacturing scale-up</p>
                  </div>
                </div>
                
                {/* Future: Series B */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:w-1/4 border-l-4 border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Series B</h3>
                  <div className="text-sm text-text-light space-y-1 sm:space-y-2">
                    <p><span className="font-medium">Target:</span> $50M+</p>
                    <p><span className="font-medium">Timeline:</span> 2026</p>
                    <p><span className="font-medium">Returns:</span> 10x potential from seed</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Timeline Indicator */}
              <div className="flex justify-between text-xs md:hidden text-text-light mb-6 px-2">
                <div>Current</div>
                <div>2025</div>
                <div>2026</div>
              </div>
              
              {/* CTA */}
              <div className="text-center mt-6">
                <Button href="#contact-section" size="lg" className="w-full sm:w-auto py-3 px-6 md:py-3 md:px-8">
                  Connect With Our Investor Team
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
                title="Who We Are"
                accent={true}
                alignment="center"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
                <div className="lg:col-span-3">
                  <p className="text-lg text-text-light leading-relaxed mb-6">
                    Chiron Therapeutics is a preclinical-stage biotech company based in Ontario, Canada, pioneering the next generation of regenerative medicine. We&apos;re redefining what&apos;s possible by making stem cell therapies safer, more scalable, and clinically practical.
                  </p>
                  
                  <div className="border-l-4 border-primary pl-6 my-8">
                    <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                    <p className="text-lg text-text-light leading-relaxed">
                      To transform lives through safe, accessible, and scalable regenerative therapies—empowering real-world impact for patients worldwide.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-3">Our Breakthrough Technology</h3>
                    <p className="text-lg text-text-light leading-relaxed mb-4">
                      Our proprietary SIST platform is a transgene-free, IP-licensed innovation that enables the robust expansion of adult stem cells without genetic modification.
                    </p>
                    <p className="text-lg text-text-light leading-relaxed">
                      In partnership with Corning, we leverage Elplasia™ 3D culture technology to enhance scalability and accelerate clinical readiness.
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
                        Company Highlights
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Founded in 2021</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Headquartered in Ontario, Canada</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>IP-licensed SIST technology</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Strategic partnership with Corning</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">Expert team with combined 50+ years in stem cell research</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <Button href="#contact-section" size="lg">
                        Request Investor Deck
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
          title="Meet Our Team"
          description="Our expert team combines world-class scientific expertise with proven business leadership to drive innovation and create value for our investors."
        />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 
