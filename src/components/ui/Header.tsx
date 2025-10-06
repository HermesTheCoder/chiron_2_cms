"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Cosmetics", href: "/cosmetics" },
  { label: "Our Therapies", href: "/therapies" },
  { label: "Investors", href: "/investors" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if a nav item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on a page with a contact section, navigate to the contact page
      window.location.href = '/#contact-section';
    }
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="relative z-50">
          <div className='relative'>
            <Image 
              src={scrolled ? "/assets/chiron_new_logo.svg" : "/assets/chiron_new_logo_white.svg"} 
              alt="Chiron Therapeutics" 
              width={160} 
              height={55} 
              className={`h-10 md:h-12 w-auto ${!scrolled ? 'scale-130' : ''}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-lg font-medium relative group
                ${scrolled ? 'text-foreground' : 'text-white drop-shadow-sm'}
                transition-colors duration-200
              `}
            >
              <span className={`relative z-10 ${isActive(item.href) ? 'text-primary' : 'group-hover:text-primary'} transition-colors duration-300`}>
                {item.label}
              </span>
              <span className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'} ${scrolled ? 'bg-black' : 'bg-white'}`}></span>
            </Link>
          ))}
          <Link 
            href="/#contact-section" 
            onClick={handleContactClick}
            className={`
              btn btn-primary py-3 px-8 text-base tracking-wide shadow-md
              transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] hover:scale-[1.02]
            `}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-6">
            <span
              className={`absolute h-0.5 w-7 transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-3 bg-foreground" : scrolled ? "bg-foreground translate-y-0" : "bg-white translate-y-0 drop-shadow-md"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-7 transform transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              } top-2.5 ${scrolled ? 'bg-foreground' : 'bg-white drop-shadow-md'}`}
            ></span>
            <span
              className={`absolute h-0.5 w-7 transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 translate-y-3 bg-foreground" : scrolled ? "bg-foreground translate-y-5" : "bg-white translate-y-5 drop-shadow-md"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col`}
          style={{ top: 0, height: '100vh' }}
        >
          <div className="container h-full flex flex-col pt-24 px-8 overflow-y-auto">
            <nav className="flex flex-col space-y-8 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-2xl font-medium relative group overflow-hidden ${isActive(item.href) ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-out ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <a 
                href="#contact-section" 
                onClick={(e) => {
                  handleContactClick(e);
                  setIsOpen(false);
                }}
                className="btn btn-primary mt-6 self-start text-lg px-8 py-4 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 