"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { Media } from '@/payload-types';

type MissionSectionProps = {
  data: {
    title: string,
    description: SerializedEditorState;
    missionValues: {
      title: string;
      description: SerializedEditorState;
      image: Media;
    }[];
    SISTProcess: {
      title: string;
      description: SerializedEditorState;
      image: Media;
      imageCaption: string;
    };
  }
}

export default function MissionSection({data}: MissionSectionProps) {
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
            title={data?.title}
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              <div className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                <RichText 
                  data={data?.description} />
              </div>
              <div className={`h-1 w-24 bg-primary/20 mx-auto mt-6 rounded-full transform transition-all duration-1000 delay-300 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data?.missionValues?.map((missionValue: {title: string, description: SerializedEditorState, image: Media}, idx: number) => (
                <div key={idx} className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <img src={missionValue?.image?.url ?? ""} alt={missionValue?.image?.alt} />
                      {/* {missionValue?.image?.url} */}
                    </div>
                    <h3 className="text-lg font-medium mb-3">{missionValue?.title}</h3>
                    <div className="text-text-light">
                      <RichText data={missionValue?.description}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SIST Process Visualization */}
          <div className={`max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 delay-750' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3">{data?.SISTProcess?.title}</h3>
              <div className="text-text-light max-w-3xl mx-auto">
                <RichText data={data?.SISTProcess?.description}/>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="relative w-full" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Image
                  src={data?.SISTProcess?.image?.url ?? ""}
                  alt={data?.SISTProcess?.image?.alt}
                  width={800}
                  height={500}
                  className="mx-auto"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-6 text-center text-sm text-text-light">
                <p>{data?.SISTProcess?.imageCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
