"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_image1.png"
          alt="Stem cell therapy"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={100}
        />
        <div className="hero-overlay bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-lg transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-shadow-lg">Redefining Stem Cell Based Therapy</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-10 text-white/90 max-w-2xl leading-relaxed drop-shadow-md transition-all delay-300 duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Our technology addresses one of the biggest challenges in regenerative medicine
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-6 transition-all delay-500 duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link 
              href="/therapies"
              className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:translate-y-[-2px] hover:scale-[1.02]"
            >
              Explore Our Therapies
            </Link>
            
            <Link 
              href="/about"
              className="btn bg-white/10 backdrop-blur-sm border-2 border-white/70 text-white hover:bg-white/20 text-lg px-8 py-4 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2 opacity-80">Scroll Down</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white opacity-80"
        >
          <path 
            d="M12 4V20M12 20L18 14M12 20L6 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
} 