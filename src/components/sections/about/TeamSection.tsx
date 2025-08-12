"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';


type TeamSectionProps = {
  layout: string;
  maxMembers?: number; 
  subtitle?: string;
}

type TeamPayload = {
  title: string;
  description: SerializedEditorState;
  members: {
    name: string;
    title: string;
    image: Media;
    linkedinURL: string,
    bio: string;
  }[];
}

export default function TeamSection({ 
  layout = 'two-column',
  maxMembers = 0,
  subtitle = "OUR PEOPLE",
}: TeamSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});
  const [teamSectionData, setTeamSectionData] = useState<TeamPayload>();

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

    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/globals/leadershipTeam`);
      const data = await res.json();
      setTeamSectionData(data);
    };

  fetchData();

    const section = document.getElementById('team-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const toggleBio = (name: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Truncate bio for preview
  const getBioPreview = (bio: string) => {
    return bio.length > 100 ? bio.substring(0, 100) + '...' : bio;
  };

  const leadershipTeam = teamSectionData?.members;

  // Filter members if maxMembers is specified
  const displayedMembers = maxMembers > 0 ? leadershipTeam?.slice(0, maxMembers) : leadershipTeam;

  return (
    <section id="team-section" className="py-16 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle={subtitle} 
            title={teamSectionData?.title ?? ""} 
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="text-lg text-text-light leading-relaxed px-4 md:px-0">
              {teamSectionData?.description && (
                <RichText data={teamSectionData.description} />
              )}
            </div>
          </div>
          
          {/* Team Grid with configurable layout */}
          <div className={`grid grid-cols-1 ${
            layout === 'three-column' 
              ? 'sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12' 
              : 'md:grid-cols-2 gap-10 lg:gap-16'
          }`}>
            {displayedMembers?.map((member, index) => (
              <div 
                key={member?.name}
                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-1">
                  {/* Image Display with improved container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                    <Image
                      src={member?.image?.url ?? ""}
                      alt={member?.image?.alt}
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    
                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
                  </div>
                  
                  {/* Name, title and bio text */}
                  <div className="p-6 md:p-8 flex-grow">
                    <div className="flex justify-between">
                      {/* Name and title */}
                      <div className="border-b border-gray-100 pb-4 mb-4">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                        <p className="text-primary text-sm">{member?.title}</p>
                      </div>
                      {/* LinkedIn link at top right corner */}
                      {member?.linkedinURL && (
                        <a 
                          href={member?.linkedinURL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary transition-all duration-300 shadow-sm z-10 hover:shadow-md"
                          aria-label={`${member?.name}&apos;s LinkedIn`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    
                    {/* Bio text that expands in place */}
                    <div className="prose prose-sm max-w-none text-text-light">
                      <p className="leading-relaxed">
                        {expandedBios[member?.name] ? member?.bio : getBioPreview(member?.bio)}
                      </p>
                      {member?.bio.length > 100 && (
                        <button 
                          onClick={() => toggleBio(member?.name)}
                          className="mt-3 inline-flex items-center text-primary font-medium text-sm hover:underline focus:outline-none group"
                          aria-expanded={expandedBios[member?.name]}
                        >
                          {expandedBios[member?.name] ? (
                            <>
                              Show Less
                              <svg className="ml-1 w-4 h-4 transition-transform group-hover:-translate-y-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              Learn More
                              <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-y-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View Full Team Button (only shown when using maxMembers) */}
          {maxMembers > 0 && displayedMembers && leadershipTeam && displayedMembers.length < leadershipTeam.length && (
            <div className="text-center mt-16">
              <Link 
                href="/about#team-section" 
                className="btn btn-outline px-8 py-3 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                View Full Team
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
