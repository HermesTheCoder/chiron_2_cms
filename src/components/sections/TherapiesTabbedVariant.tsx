"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface Therapy {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  features: string[];
  applications: string[];
}

export default function TherapiesTabbedVariant() {
  const [activeTab, setActiveTab] = useState<string>('cartilage');
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

    const section = document.getElementById('therapies-tabbed-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const therapies: Therapy[] = [
    {
      id: 'cartilage',
      title: "Cartilage Regeneration Therapy",
      description: 
        "Our innovative, patented method generates functional chondrocytes from readily accessible somatic skin cells, eliminating the need for invasive bone marrow procedures. This breakthrough approach offers a minimally invasive and highly scalable method for effective cartilage repair.",
      imageSrc: "/assets/experiment.png",
      link: "/therapies/cartilage-regeneration",
      features: [
        "Non-invasive cell sourcing",
        "Enhanced chondrocyte production",
        "Minimized immune rejection",
        "Scalable manufacturing process"
      ],
      applications: [
        "Knee osteoarthritis",
        "Joint injuries",
        "Sports medicine recovery",
        "Age-related cartilage degeneration"
      ]
    },
    {
      id: 'wound',
      title: "Wound Healing Therapy",
      description: 
        "Our Suspension-Induced Stem Cell Transition (SIST) technology enables the generation of human keratinocyte stem cells for wound repair, addressing critical challenges in burn treatment, diabetic ulcers, and chronic wound management. This approach revolutionizes skin wound repair therapies.",
      imageSrc: "/assets/hero_image2.png",
      link: "/therapies/wound-healing",
      features: [
        "100x increased stem cell yield",
        "Patient-specific compatibility",
        "Reduced healing time",
        "Minimal scarring"
      ],
      applications: [
        "Diabetic ulcers",
        "Severe burn treatment",
        "Post-surgical wound healing",
        "Chronic non-healing wounds"
      ]
    },
    {
      id: 'tissue',
      title: "Tissue Engineering",
      description: 
        "Our advanced tissue engineering platform uses the SIST technology to create complex three-dimensional tissue structures for repair and replacement applications, addressing organ shortages and transplant rejection issues.",
      imageSrc: "/assets/experiment.png",
      link: "/therapies/tissue-engineering",
      features: [
        "Biocompatible scaffolds",
        "Vascularized tissue formation",
        "Multi-tissue integration",
        "Extended tissue viability"
      ],
      applications: [
        "Organ replacement",
        "Transplant medicine",
        "Research models",
        "Personalized drug testing"
      ]
    }
  ];

  const currentTherapy = therapies.find(therapy => therapy.id === activeTab) || therapies[0];

  return (
    <section id="therapies-tabbed-section" className="py-20 md:py-28 bg-white dark:bg-black/20">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="THERAPEUTIC PIPELINE" 
            title="Leading-Edge Regenerative Medicine" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-text-light leading-relaxed">
              Our SIST technology platform enables multiple regenerative medicine applications through a safe, scalable approach to adult stem cell production.
            </p>
          </div>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center border-b border-b-border-light mb-10">
            {therapies.map((therapy) => (
              <button
                key={therapy.id}
                onClick={() => setActiveTab(therapy.id)}
                className={`px-6 py-4 font-medium text-lg transition-all relative ${
                  activeTab === therapy.id 
                    ? 'text-primary' 
                    : 'text-text-light hover:text-foreground'
                }`}
              >
                {therapy.title}
                {activeTab === therapy.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-y-0.5"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6">{currentTherapy.title}</h3>
              <p className="text-text-light mb-8 leading-relaxed">{currentTherapy.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-primary">Key Features</h4>
                  <ul className="space-y-2">
                    {currentTherapy.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 text-primary">Applications</h4>
                  <ul className="space-y-2">
                    {currentTherapy.applications.map((application, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button href={currentTherapy.link} size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-80 md:h-96 lg:h-[32rem] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={currentTherapy.imageSrc}
                  alt={currentTherapy.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg z-10">
                <div className="text-4xl font-bold text-primary">100x</div>
                <div className="text-sm font-medium">Increased yield</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button href="/pipeline" variant="outline" size="lg">
              View Full Pipeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 