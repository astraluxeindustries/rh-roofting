import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-rh-brown/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-rh-brown/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Hammer className="h-8 w-8 text-rh-rust transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-wider leading-none">
              RH<span className="text-rh-rust">ROOFING</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-rh-rust transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:435-652-9613" 
            className="flex items-center gap-2 bg-rh-rust hover:bg-rh-brown hover:border-rh-rust border border-transparent px-5 py-2 rounded-sm transition-all duration-300 font-bold uppercase text-xs tracking-wider"
          >
            <Phone className="w-4 h-4" />
            Free Estimate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-rh-brown border-t border-rh-beige/10 shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-serif hover:text-rh-rust transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:435-652-9613" 
            className="mt-4 flex items-center gap-2 bg-rh-rust text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider"
          >
             Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};