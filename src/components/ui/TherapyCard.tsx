import { Media } from '@/payload-types';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import Link from 'next/link';

interface TherapyCardProps {
  title: string;
  description: SerializedEditorState;
  imageSrc: Media;
  link: string;
  imagePosition?: 'left' | 'right';
  accent?: boolean;
}

export default function TherapyCard({
  title,
  description,
  imageSrc,
  link,
  imagePosition = 'left',
  accent = false,
}: TherapyCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${accent ? 'bg-primary/5' : 'bg-white'}`}>
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          {imageSrc?.url && <Image
            src={imageSrc?.url ?? ""}
            alt={imageSrc?.alt}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 hover:scale-105"
          />}
        </div>
        
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{title}</h3>
            <div className="text-text-light mb-6 leading-relaxed"><RichText data={description}/></div>
          </div>
          
          {link && <Link
            href={link}
            className="inline-flex items-center group"
          >
            <span className="text-primary font-medium mr-2 group-hover:mr-3 transition-all">Learn More</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              className="text-primary transform transition-transform group-hover:translate-x-1"
            >
              <path 
                d="M1 8H15M15 8L8 1M15 8L8 15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>}
        </div>
      </div>
    </div>
  );
} 