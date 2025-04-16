"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function MissionSection() {
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

    const section = document.getElementById('mission-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="mission-section" className="py-10 md:py-28 bg-gradient-to-b from-white to-gray-50  relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR MISSION" 
            title="We Are On A Bold Mission"
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                To deliver safe, scalable, and effective adult stem cell therapies for patients.
              </p>
              <div className={`h-1 w-24 bg-primary/20 mx-auto mt-6 rounded-full transform transition-all duration-1000 delay-300 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform duration-500 ${
                isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-3">Safety First</h3>
                  <p className="text-text-light">
                    Current stem cell methods risk patient safety, creating an urgent need for safer, non-transgenic and virus-free approach to produce scalable adult stem cells for therapy.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform duration-500 ${
                isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-3">High-Yield Production</h3>
                  <p className="text-text-light">
                    Our IP-licensed method generates large quantities of tissue-specific adult stem cells from somatic cells without transgenes or viruses.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform duration-500 ${
                isVisible ? 'translate-y-0 opacity-100 delay-450' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-3">Enhanced Safety</h3>
                  <p className="text-text-light">
                    By eliminating genetic manipulation, our approach significantly reduces the risk of tumorigenesis and genetic instabilities.
                  </p>
                </div>
              </div>
              
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform duration-500 lg:col-span-3 ${
                isVisible ? 'translate-y-0 opacity-100 delay-600' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 13v-1m4 1v-3m4 3V8M12 21a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium mb-1">Minimally Invasive</h3>
                    <p className="text-text-light">
                      Our technology allows for the generation of therapeutic cells from easily accessible tissues like skin, reducing patient discomfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* SIST Process Visualization */}
          <div className={`max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 delay-750' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3">Our SIST Technology Process</h3>
              <p className="text-text-light max-w-3xl mx-auto">
                The Suspension-Induced Stem Cell Transition (SIST) technology is our proprietary method for generating 
                tissue-specific adult stem cells without genetic modification or viral vectors.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="relative w-full" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Image
                  src="/assets/SIST-v3.png"
                  alt="SIST Reprogramming Process"
                  width={800}
                  height={500}
                  className="mx-auto"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-6 text-center text-sm text-text-light">
                <p>Our closed-loop process takes cells from collection to treatment with our revolutionary SIST reprogramming method.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
