"use client";

import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface VideoSectionProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    videoUrl?: string;
    primaryCTA?: {
      text: string;
      link: string;
    };
    secondaryCTA?: {
      text: string;
      link: string;
    };
  };
}

export default function VideoSection({ data }: VideoSectionProps) {
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

    const section = document.getElementById('video-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Default data if not provided
  const defaultData = {
    title: "Discover Chiron Therapeutics",
    subtitle: "OUR STORY",
    description: "Watch our company overview to learn about our revolutionary stem cell technology and our mission to transform regenerative medicine.",
    videoUrl: "/assets/Chiron_Therapeutics_SIST.mp4",
    primaryCTA: {
      text: "Learn More",
      link: "/about"
    },
    secondaryCTA: {
      text: "Our Technology",
      link: "/therapies"
    }
  };

  const videoData = { ...defaultData, ...data };

  return (
    <section id="video-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionTitle
              subtitle={videoData.subtitle}
              title={videoData.title}
              accent={true}
            />
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-lg text-text-light leading-relaxed">
                {videoData.description}
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full aspect-video object-cover"
                controls
                poster='/assets/VideoThumbnail.jpg'
                preload="metadata"
              >
                <source src={videoData?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Description */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Company Overview
              </h3>
              <p className="text-lg text-text-light mb-8 max-w-3xl mx-auto">
                Learn about our mission, technology, and vision for the future of regenerative medicine.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {videoData.primaryCTA?.link && (
                  <Button 
                    href={videoData.primaryCTA.link}
                    size="lg"
                  >
                    {videoData.primaryCTA.text}
                  </Button>
                )}
                {videoData.secondaryCTA?.link && (
                  <Button 
                    href={videoData.secondaryCTA.link}
                    variant="outline"
                    size="lg"
                  >
                    {videoData.secondaryCTA.text}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Innovative Technology</h4>
              <p className="text-text-light text-sm">
                Our SIST technology revolutionizes stem cell therapy delivery
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Proven Results</h4>
              <p className="text-text-light text-sm">
                Clinical trials show significant improvements in patient outcomes
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Expert Team</h4>
              <p className="text-text-light text-sm">
                Leading scientists and researchers driving innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
