import React from 'react';
import { Hammer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1612] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Hammer className="h-6 w-6 text-rh-rust transform -rotate-45" />
            <span className="text-xl font-serif font-bold tracking-wider">
              RH<span className="text-rh-rust">ROOFING</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} RH Roofing. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Roofing Solutions in Southern Utah</p>
        </div>
      </div>
    </footer>
  );
};