"use client";

import { useEffect, useState } from 'react';
import TherapyCard from '../ui/TherapyCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function TherapiesSection() {
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

    const section = document.getElementById('therapies-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const getDelayClass = (index: number) => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
    return delays[index % delays.length] || 'delay-0';
  };

  const therapies = [
    {
      title: "Cartilage Regeneration Therapy",
      description: 
        "Our innovative, patented method generates functional chondrocytes—specialized cartilage-producing cells—from readily accessible somatic skin cells, eliminating the need for invasive bone marrow procedures.",
      imageSrc: "/assets/experiment.png",
      link: "/therapies/#cartilage-regeneration"
    },
    {
      title: "Wound Healing Therapy",
      description: 
        "Our scalable, patient-friendly method meets the growing need for generating human keratinocyte stem cells, which are essential for effective wound repair and skin regeneration.",
      imageSrc: "/assets/hero_image2.png",
      link: "/therapies/#wound-healing"
    }
  ];

  return (
    <section id="therapies-section" className="py-20 md:py-28 bg-gradient-to-b from-background to-gray-50">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR THERAPIES" 
            title="Multiple pipelines of autograft stem cell therapies in development" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-lg text-text-light leading-relaxed">
              Our cutting-edge Suspension-Induced Stem Cell Transition (SIST) technology delivers a remarkable 100X increase in ASC yield, offering a highly scalable and safe solution for treating many diseases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 md:gap-16 mb-16">
            {therapies.map((therapy, index) => (
              <div 
                key={therapy.title}
                className={`
                  transform transition-all duration-1000 ${getDelayClass(index + 1)}
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
              >
                <TherapyCard
                  title={therapy.title}
                  description={therapy.description}
                  imageSrc={therapy.imageSrc}
                  link={therapy.link}
                  imagePosition={index % 2 === 0 ? 'left' : 'right'}
                  accent={index % 2 === 0}
                />
              </div>
            ))}
          </div>
          
          <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button href="/therapies" size="lg" className="shadow-md hover:shadow-lg" variant='outline'>
              View All Therapies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 