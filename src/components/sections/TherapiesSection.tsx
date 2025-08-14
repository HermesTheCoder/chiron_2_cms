"use client";

import { useEffect, useState } from 'react';
import TherapyCard from '../ui/TherapyCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { Media } from '@/payload-types';

type TherapySectionProps = {
  data: {
    title: string;
    description: SerializedEditorState;
    therapies: {
      title: string;
      description: SerializedEditorState;
      image: Media;
      link: string;
    }[];
  }
}

export default function TherapiesSection({data}: TherapySectionProps) {
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

  const therapies = data?.therapies;

  return (
    <section id="therapies-section" className="py-20 md:py-28 bg-gradient-to-b from-background to-gray-50">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR THERAPIES" 
            title={data?.title}
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-lg text-text-light leading-relaxed">
              <RichText data={data?.description}/>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-10 md:gap-16 mb-16">
            {therapies?.map((therapy, index) => (
              <div 
                key={therapy?.title}
                className={`
                  transform transition-all duration-1000 ${getDelayClass(index + 1)}
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
              >
                <TherapyCard
                  title={therapy?.title}
                  description={therapy?.description}
                  imageSrc={therapy?.image}
                  link={therapy?.link}
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