"use client";

import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { SerializedEditorState } from 'lexical';
import { Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
interface VideoSectionProps {
  data: {
      title: string;
      subtitle: string;
      description: SerializedEditorState;
      videoSection: {
        title: string;
        description: SerializedEditorState;
        primaryCTA: {
          text: string;
          link: string;
        };
        secondaryCTA: {
          text: string;
          link: string;
        };
      };
      cards: {
        icon: Media;  
        title: string;
        description: SerializedEditorState;
      }[];
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
    videoUrl: "/assets/Chiron_Therapeutics_SIST.mp4",
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
              {videoData?.description && <div className="text-lg text-text-light leading-relaxed">
                <RichText data={videoData?.description} />
              </div>}
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
              {videoData?.videoSection?.title && <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {videoData.videoSection.title}
              </h3>}
              {videoData?.videoSection?.description && <div className="text-lg text-text-light mb-8 max-w-3xl mx-auto">
                <RichText data={videoData.videoSection.description} />
              </div>}
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {videoData?.videoSection?.primaryCTA?.link && (
                  <Button 
                    href={videoData.videoSection.primaryCTA.link}
                    size="lg"
                  >
                    {videoData?.videoSection?.primaryCTA?.text}
                  </Button>
                )}
                {videoData?.videoSection?.secondaryCTA?.link && (
                  <Button 
                    href={videoData.videoSection.secondaryCTA.link}
                    variant="outline"
                    size="lg"
                  >
                    {videoData?.videoSection?.secondaryCTA?.text}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          {
            videoData?.cards && videoData.cards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {videoData.cards.map((card, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      {card?.icon?.url && <img src={card.icon.url} alt={card.icon?.alt} />}
                    </div>
                    {card?.title && <h4 className="text-lg font-bold mb-2">{card.title}</h4>}
                    {card?.description && <div className="text-text-light text-sm"><RichText data={card.description} /></div>}
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}
