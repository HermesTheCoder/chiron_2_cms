"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PipelineSection() {
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

    const section = document.getElementById('pipeline-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="pipeline-section" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR PIPELINE" 
            title="Our Promising Stem Cell Therapy Pipelines"
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className={`text-lg text-center text-text-light leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Two cutting-edge autograft stem cell therapies in development. Backed by robust proof-of-concept data, 
              our SIST technology demonstrates promising safer, scalable solutions for diseases like Orthopedic Disorders 
              (cartilage regeneration) and Skin and Wound Healing (Burn injuries).
            </p>
            
            {/* Pipeline Image */}
            <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative w-full">
                <Image
                  src="/assets/Image_20250411_111551_298.jpeg"
                  alt="Chiron Therapeutics Clinical Pipeline"
                  width={1200}
                  height={600}
                  className="mx-auto"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            
            {/* Details Section */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold mb-6 text-center">Advancing the Future of Regenerative Medicine</h3>
              
              <p className="text-lg text-text-light leading-relaxed mb-6">
                Our pipeline features two next-generation autologous stem cell therapies, powered by our proprietary SIST platform. 
                Backed by strong proof-of-concept data, these therapies offer safer, scalable alternatives for high-need indications:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#F8B359]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#F8B359]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                      <path d="M16 8L2 22" />
                      <path d="M17.5 15H9" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Orthopedic Disorders</h4>
                  <p className="text-text-light">
                    Targeted cartilage regeneration for joint repair and mobility restoration
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#4AC4D4]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#4AC4D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <path d="M6 1v3" />
                      <path d="M10 1v3" />
                      <path d="M14 1v3" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Skin & Wound Healing</h4>
                  <p className="text-text-light">
                  Accelerated healing for burn injuries and chronic wounds
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-center font-medium">
                With a focus on real-world applicability and clinical readiness, Chiron is building a pipeline designed to move swiftly from lab to patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 