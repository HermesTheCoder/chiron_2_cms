"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  links?: {
    linkedin?: string;
  };
}

interface TeamSectionProps {
  layout?: 'two-column' | 'three-column';
  maxMembers?: number;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function TeamSection({ 
  layout = 'two-column',
  maxMembers = 0, // 0 means show all
  title = "Meet the Team Behind Chiron Therapeutics",
  subtitle = "OUR PEOPLE",
  description = "Our talented team combines world-class scientific expertise with business acumen to transform innovative research into breakthrough therapies."
}: TeamSectionProps) {
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

    const section = document.getElementById('team-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const leadershipTeam: TeamMember[] = [
    {
      name: "Behzad Yeganeh, Ph.D.",
      title: "Chief Executive Officer & Founder",
      bio: "Dr. Yeganeh, with a Ph.D. in Cancer Biology and 15+ years in stem cell research, pioneered the Suspension-Induced Stem Cell Transition (SIST) technology—achieving 100x yield in adult stem cells without genetic modification. His two IP-licensed patents and Corning-sponsored research position Chiron for Phase I trials within 18 months, addressing critical needs in cartilage regeneration and wound healing.",
      imageSrc: "/assets/ceo.png",
      links: {
        linkedin: "https://www.linkedin.com/in/behzad-yeganeh-ph-d-58ab732b/"
      }
    },
    {
      name: "Amit Shrestha, Ph.D.",
      title: "Chief Operation Officer",
      bio: "Dr. Shrestha brings a decade of expertise in cell and gene therapy with a Ph.D. in Cellular and Molecular Medicine. His experience spans CRISPR/Cas9 gene editing, stem cell biology, and regulatory affairs from his work at Health Canada. His multidisciplinary background in biologic drug development and manufacturing scale-up is vital to Chiron's clinical translation strategy and operational excellence.",
      imageSrc: "/assets/coo.png",
      links: {
        linkedin: "https://www.linkedin.com/in/amitshrestha8/"
      }
    },
    {
      name: "Dr. James L. Sherley, M.D., Ph.D.",
      title: "Scientific Advisor",
      bio: "Harvard and Johns Hopkins-trained Dr. Sherley is founder and CEO of Asymmetrex®, which pioneered differential tissue stem cell counting for accurate dosage certification and manufacturing optimization. A recipient of NIH Director's Pioneer Award, he serves on committees for the American Society for Testing and Materials International and the Advanced Regenerative Manufacturing Institute, bringing invaluable expertise to Chiron's stem cell platform.",
      imageSrc: "/assets/advisor.png",
      links: {
        linkedin: "https://www.linkedin.com/in/james-l-sherley-m-d-ph-d-3b0b2045/"
      }
    }
  ];

  // Filter members if maxMembers is specified
  const displayedMembers = maxMembers > 0 ? leadershipTeam.slice(0, maxMembers) : leadershipTeam;

  return (
    <section id="team-section" className="py-16 md:py-28 bg-gray-50">
      <div className="container">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle={subtitle} 
            title={title} 
            accent={true}
            alignment="center"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-lg text-text-light leading-relaxed px-4 md:px-0">
              {description}
            </p>
          </div>
          
          {/* Team Grid with configurable layout */}
          <div className={`grid grid-cols-1 ${
            layout === 'three-column' 
              ? 'sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10' 
              : 'md:grid-cols-2 gap-8 lg:gap-16'
          }`}>
            {displayedMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  {/* Image Display */}
                  <div className="relative h-56 sm:h-64 w-full">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>
                  
                    {/* Name and title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm">{member.title}</p>
                    </div>
                    
                    {/* LinkedIn link */}
                    {member.links?.linkedin && (
                      <a 
                        href={member.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  {/* Bio text */}
                  <div className="p-4 sm:p-6">
                    <p className="text-text-light text-sm sm:text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View Full Team Button (only shown when using maxMembers) */}
          {maxMembers > 0 && displayedMembers.length < leadershipTeam.length && (
            <div className="text-center mt-12">
              <Link href="/about#team-section" className="btn btn-outline">
                View Full Team
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
