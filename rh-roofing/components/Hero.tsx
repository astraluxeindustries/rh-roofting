import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern residential roof" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rh-brown/90 to-rh-brown/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-rh-rust px-4 py-1 mb-6">
             <span className="text-white font-bold uppercase tracking-[0.2em] text-xs">Since 2005 • Southern Utah</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 shadow-sm">
            Quality Roofing <br/>
            <span className="text-rh-gold italic">Professionals</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">
            Dedicated to providing the highest quality roofing services for commercial and residential buildings in St. George and Southern Utah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-white text-rh-brown hover:bg-rh-rust hover:text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-rh-brown px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all duration-300 text-center"
            >
              Our Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-2 text-white/80">
            <div className="h-[1px] w-12 bg-rh-gold"></div>
            <p className="uppercase text-sm tracking-widest">Trustworthy • Experienced • Local</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};