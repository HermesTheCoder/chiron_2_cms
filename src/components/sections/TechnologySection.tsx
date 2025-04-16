"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('technology-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="technology-section" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR TECHNOLOGY" 
            title="Suspension-Induced Stem Cell Transition" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-5">A Revolutionary Approach</h3>
              <p className="text-text-light leading-relaxed mb-6">
                Our proprietary Suspension-Induced Stem Cell Transition (SIST) technology represents a fundamental 
                breakthrough in stem cell research, offering a safer, more efficient alternative to conventional 
                induced pluripotent stem cell (iPSC) methods.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">The SIST Difference</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Transgene-free approach eliminating risks of genetic instability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Direct generation of tissue-specific adult stem cells</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Highly efficient, scalable production process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Enhanced safety profile with reduced tumorigenesis risk</span>
                </li>
              </ul>
              
              <Button href="/technology" size="lg">
                Explore Our Technology
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-white">
                  <Image
                    src="/assets/SIST-v3.png"
                    alt="SIST Technology Illustration"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-5">Advancing the Future of Regenerative Medicine</h3>
            <p className="text-text-light leading-relaxed max-w-3xl mx-auto mb-10">
              Our SIST technology platform enables us to develop an expansive pipeline of autologous stem cell 
              therapies across multiple indications, including orthopedic disorders, skin conditions, and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-primary hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">Orthopedic Applications</h4>
                <p className="text-text-light">Targeting cartilage regeneration for osteoarthritis and joint injuries</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-primary hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">Dermatological Treatments</h4>
                <p className="text-text-light">Addressing wound healing, burns, and skin rejuvenation</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-primary hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">Future Expansion</h4>
                <p className="text-text-light">Research underway for neurological and cardiovascular applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 