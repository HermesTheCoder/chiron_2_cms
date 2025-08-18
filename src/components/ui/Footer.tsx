"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Footer } from "@/payload-types";


export default function Footer() {
  
  const [footerData, setFooterData] = useState<Footer>();

  useEffect(() => {
  
      const fetchData = async () => {
        const res = await fetch(`api/globals/footer`);
        const data = await res.json();
        setFooterData(data);
      };
  
    fetchData();
    }, []);

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 relative overflow-hidden pt-16 pb-10 border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-0"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo and About */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link href="/" className="block mb-6">
              <div>
                <Image 
                  src="/assets/chiron_new_logo_white.svg" 
                  alt="Chiron Therapeutics" 
                  width={160} 
                  height={55} 
                  className="h-12 w-auto scale-125"
                />
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footerData?.description}
            </p>
            
            <div className="flex space-x-4 mb-8">
              {
                footerData?.socialMediasData?.map((socialMedia, idx) => (
                  <a 
                    key={idx}
                    href={socialMedia?.link} 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-sm"
                  >
                    {socialMedia?.icon?.url && <img src={socialMedia?.icon?.url} alt={socialMedia?.icon?.alt} />}
                  </a>
                ))
              }
            </div>
          </div>
          
          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Link Groups */}
          <div className="md:col-span-3 lg:col-span-3 md:ml-auto">
            
                <h3 className="text-lg font-bold mb-5 text-white">Company</h3>
                <ul className="space-y-3">
                  {footerData?.footerLinks
                    ?.filter((footerLink) => footerLink?.link) 
                    .map((footerLink) => (
                      <li key={footerLink?.label}>
                        <Link
                          href={footerLink?.link}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          {footerLink?.label}
                        </Link>
                      </li>
                  ))}
                </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-3 lg:col-span-3 text-right">
            <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <div className="flex items-start justify-end">
                <div className="text-right mr-3">
                  <p>{footerData?.footerData?.address}</p>
                </div>
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex items-start justify-end">
                <div className="text-right mr-3">
                  <p>{footerData?.footerData?.number}</p>
                </div>
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex items-start justify-end">
                <div className="text-right mr-3">
                  <a href={"mailto:" + footerData?.footerData?.mail} className="text-primary hover:text-white transition-colors">{footerData?.footerData?.mail}</a>
                </div>
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chiron Therapeutics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 