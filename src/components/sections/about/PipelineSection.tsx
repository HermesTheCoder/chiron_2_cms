"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';

type PipelineSectionProps = {
  data: {
    title: string;
    description: SerializedEditorState;
    image: Media;
    clinicalDevelopmentPrograms: {
      title: string;
      description: SerializedEditorState;
      pipelines: {
        icon: Media;
        title: string;
        description: SerializedEditorState;
      }[]
    };
    closingText: string;
  }
}

export default function PipelineSection({data}: PipelineSectionProps) {
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

    const section = document.getElementById('pipeline-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="pipeline-section" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR PIPELINE" 
            title={data?.title}
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`text-lg text-center text-text-light leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <RichText data={data?.description}/>
            </div>
            
            {/* Pipeline Image */}
            <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative w-full">
                {data?.image?.url && <Image
                  src={data?.image?.url ?? ""}
                  alt={data?.image?.alt}
                  width={1200}
                  height={600}
                  className="mx-auto"
                  style={{ objectFit: 'contain' }}
                />}
              </div>
            </div>
            
            {/* Details Section */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold mb-6 text-center">{data?.clinicalDevelopmentPrograms?.title}</h3>
              
              <div className="text-lg text-text-light leading-relaxed mb-6">
                <RichText data={data?.clinicalDevelopmentPrograms?.description} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {
                  data?.clinicalDevelopmentPrograms?.pipelines?.map((pipeline, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="w-12 h-12 rounded-full bg-[#F8B359]/20 flex items-center justify-center mb-4">
                        {pipeline?.icon?.url &&
                        <Image src={pipeline?.icon?.url ?? ""} alt={pipeline?.icon?.alt} />}
                      </div>
                      <h4 className="text-lg font-medium mb-2">{pipeline?.title}</h4>
                      <div className="text-center">
                        <RichText data={pipeline?.description}/>
                      </div>
                    </div>
                  ))
                }
              </div>
              
              <p className="text-lg text-center font-medium">
                {data?.closingText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 