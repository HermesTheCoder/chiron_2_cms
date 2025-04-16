"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface TherapyStage {
  id: string;
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  statusText: string;
  imageSrc: string;
}

export default function TherapiesTimelineVariant() {
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

    const section = document.getElementById('therapies-timeline-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const therapyStages: TherapyStage[] = [
    {
      id: 'discovery',
      stage: 'Stage 1',
      title: 'Research & Discovery',
      description: 'Development of our proprietary SIST technology platform for generating tissue-specific adult stem cells from readily accessible somatic cells.',
      status: 'completed',
      statusText: 'Completed',
      imageSrc: '/assets/experiment.png'
    },
    {
      id: 'cartilage',
      stage: 'Stage 2',
      title: 'Cartilage Regeneration Therapy',
      description: 'Our first clinical application focused on generating functional chondrocytes for cartilage repair, currently in pre-clinical testing.',
      status: 'active',
      statusText: 'Pre-clinical',
      imageSrc: '/assets/experiment.png'
    },
    {
      id: 'wound',
      stage: 'Stage 3',
      title: 'Wound Healing Therapy',
      description: 'Development of keratinocyte stem cells for wound healing applications, with emphasis on burn treatment and chronic wounds.',
      status: 'active',
      statusText: 'Development',
      imageSrc: '/assets/hero_image2.png'
    },
    {
      id: 'tissue',
      stage: 'Stage 4',
      title: 'Advanced Tissue Engineering',
      description: 'Creating complex three-dimensional tissue structures for repair and replacement applications, addressing organ shortages and transplant rejection issues.',
      status: 'upcoming',
      statusText: 'Research Phase',
      imageSrc: '/assets/experiment.png'
    }
  ];

  return (
    <section id="therapies-timeline-section" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/10">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="DEVELOPMENT PIPELINE" 
            title="From Laboratory to Clinical Applications" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-text-light leading-relaxed">
              Our rigorous development process ensures that promising discoveries are efficiently translated into safe and effective clinical therapies.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 z-0 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-20 relative z-10">
              {therapyStages.map((stage, index) => (
                <div 
                  key={stage.id}
                  className={`
                    flex flex-col md:flex-row items-center md:items-start gap-8 
                    transform transition-all duration-1000 delay-${index * 100}
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  `}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-3 md:text-left md:pl-16'}`}>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-text-light mb-4">
                        {stage.stage}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                      <p className="text-text-light mb-4">{stage.description}</p>
                      <div className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                        ${stage.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                          stage.status === 'active' ? 'bg-primary/10 text-primary dark:bg-primary/20' : 
                          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}
                      `}>
                        {stage.statusText}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="md:w-0 relative flex justify-center">
                    <div className={`
                      w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10
                      ${stage.status === 'completed' ? 'bg-green-500 dark:bg-green-600' : 
                        stage.status === 'active' ? 'bg-primary' : 
                        'bg-blue-500 dark:bg-blue-600'}
                      shadow-md
                    `}>
                      {stage.status === 'completed' ? (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : stage.status === 'active' ? (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3 md:pl-16' : 'md:pr-16'}`}>
                    <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={stage.imageSrc}
                        alt={stage.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className={`
                        absolute inset-0 
                        ${stage.status === 'completed' ? 'bg-gradient-to-tr from-green-500/30 to-transparent' : 
                          stage.status === 'active' ? 'bg-gradient-to-tr from-primary/30 to-transparent' : 
                          'bg-gradient-to-tr from-blue-500/30 to-transparent'}
                        opacity-60
                      `}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Button href="/pipeline" size="lg" className="mx-auto">
              Explore Our Full Pipeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 