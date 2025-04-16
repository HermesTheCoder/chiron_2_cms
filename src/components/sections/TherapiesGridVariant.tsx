"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface TherapyGridItemProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  isVisible: boolean;
  index: number;
}

function TherapyGridItem({ title, description, imageSrc, link, isVisible, index }: TherapyGridItemProps) {
  const getDelayClass = (idx: number) => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
    return delays[idx % delays.length];
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isVisible 
          ? `translate-y-0 opacity-100 ${getDelayClass(index)}` 
          : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative h-60 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-primary text-white text-xs uppercase font-bold tracking-wider py-1 px-2 rounded">New Therapy</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-text-light mb-5 line-clamp-3">{description}</p>
        <Button href={link} variant="text" className="px-0 py-0 hover:text-primary-dark">
          Learn More →
        </Button>
      </div>
    </div>
  );
}

export default function TherapiesGridVariant() {
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

    const section = document.getElementById('therapies-grid-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const therapies = [
    {
      title: "Cartilage Regeneration Therapy",
      description: 
        "Our innovative, patented method generates functional chondrocytes—specialized cartilage-producing cells—from readily accessible somatic skin cells, eliminating the need for invasive bone marrow procedures.",
      imageSrc: "/assets/experiment.png",
      link: "/therapies/cartilage-regeneration"
    },
    {
      title: "Wound Healing Therapy",
      description: 
        "Our scalable, patient-friendly method meets the growing need for generating human keratinocyte stem cells, which are essential for effective wound repair and skin regeneration.",
      imageSrc: "/assets/hero_image2.png",
      link: "/therapies/wound-healing"
    },
    {
      title: "Tissue Engineering",
      description: 
        "Leveraging our SIST technology to create three-dimensional tissue structures for complex organ repair and replacement applications.",
      imageSrc: "/assets/experiment.png",
      link: "/therapies/tissue-engineering"
    },
    {
      title: "Neuronal Regeneration",
      description: 
        "Developing targeted therapies to regenerate neuronal tissues for patients with degenerative neurological conditions and injuries.",
      imageSrc: "/assets/hero_image2.png",
      link: "/therapies/neuronal-regeneration"
    }
  ];

  return (
    <section id="therapies-grid-section" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/30">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR PIPELINE" 
            title="Revolutionary Stem Cell Therapies" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-lg text-text-light leading-relaxed">
              Our cutting-edge SIST technology enables a new generation of regenerative medicine treatments with unprecedented scale and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {therapies.map((therapy, index) => (
              <TherapyGridItem
                key={therapy.title}
                title={therapy.title}
                description={therapy.description}
                imageSrc={therapy.imageSrc}
                link={therapy.link}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button href="/therapies" size="lg" className="shadow-md hover:shadow-lg">
              Explore Our Pipeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 