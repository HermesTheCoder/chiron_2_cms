"use client";

import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function HistorySection() {
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

    const section = document.getElementById('history-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="history-section" className="py-20 md:py-28 bg-white ">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR STORY" 
            title="Our History & Vision"
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className={`text-lg leading-relaxed mb-6 transition-all duration-1000 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                At Chiron Therapeutics, we are reimagining what is possible in cell therapy. Inspired by the legendary healer Chiron, we harness the body&apos;s own regenerative power to tackle some of today&apos;s most urgent medical challenges.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Our mission is bold and focused: to deliver safe, scalable, and life-changing adult stem cell therapies. Backed by decades of expertise in stem cell biology and clinical translation, our founding team built Chiron around a breakthrough platform—the Suspension-Induced Stem Cell Transition (SIST) method. This patented technology enables unprecedented expansion of adult stem cells, unlocking their full clinical potential.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Unlike the complexity and risk of iPSC-based approaches, our adult stem cell platform offers a faster, safer, and more direct path to the clinic.
              </p>
              
              <p className={`text-lg leading-relaxed font-medium transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                From orthopedic injuries to chronic diseases, we are committed to turning advanced science into real-world healing—bridging the gap between innovation and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 