"use client";

import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';

type HistorySectionProps = {
  data: {
    title: string,
    description: SerializedEditorState;
  }
}

export default function HistorySection({data}: HistorySectionProps) {
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

    const section = document.getElementById('history-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="history-section" className="py-20 md:py-28 bg-white ">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="OUR STORY" 
            title={data?.title}
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <div className={`text-lg leading-relaxed mb-6 transition-all duration-1000 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <RichText data={data?.description}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 