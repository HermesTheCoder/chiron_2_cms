"use client";

import { useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';

type AdvantagesSectionProps = {
  data: {
    title: string;
    description: SerializedEditorState;
    features: {
      title: string;
      description: SerializedEditorState;
      icon: Media;
    }[];
  }
}

type AdvantageProps = {
  isVisible: boolean;
  delay: string;
  icon: Media;
  title: string;
  description: SerializedEditorState
}

function Advantage({ isVisible, delay, icon, title, description }: AdvantageProps) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? `translate-y-0 opacity-100 ${delay}` : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex flex-col items-start">
        <div className="w-16 h-16 mb-5 p-3 bg-primary/10 rounded-lg text-primary">
          <img src={icon?.url ?? ""} alt={icon?.alt ?? ""} />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="text-text-light leading-relaxed"><RichText data={description}/></div>
      </div>
    </div>
  );
}

export default function AdvantagesSection({ data }: AdvantagesSectionProps) {
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

    const section = document.getElementById('advantages-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const advantages = data?.features;

  return (
    <section id="advantages-section" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="KEY ADVANTAGES" 
            title="Why Our Technology Stands Out" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-text-light leading-relaxed">
              Our proprietary Suspension-Induced Stem Cell Transition (SIST) technology offers significant advantages over traditional stem cell approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, idx: number) => (
              <Advantage
                key={advantage?.title}
                title={advantage?.title}
                description={advantage?.description}
                icon={advantage?.icon}
                isVisible={isVisible}
                delay={`delay-${Number(idx)*200}`}
              />
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-1/3 h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Transforming the Future of Regenerative Medicine</h3>
                <p className="text-text-light leading-relaxed">
                    ADVANCING THE FRONTIERS OF REGENERATIVE MEDICINE BY TRANSFORMING INNOVATIVE RESEARCH INTO PRACTICAL CLINICAL APPLICATIONS
                </p>
              </div>
              <Button 
                href="/therapies" 
                className="whitespace-nowrap shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                size="lg"
                variant='outline'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 