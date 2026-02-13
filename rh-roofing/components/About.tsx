import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rh-beige z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rh-rust/20 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1627838784770-8d59473855a8?q=80&w=2070&auto=format&fit=crop" 
              alt="Roofer working" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-sm"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h4 className="text-rh-rust font-bold uppercase tracking-widest mb-2">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rh-brown mb-6">Committed to Excellence</h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At RH Roofing, we are dedicated to providing the highest quality roofing services for commercial and residential buildings in St. George and the surrounding Southern Utah area. 
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our team of experts are committed to ensuring that your roofing needs are met with the utmost care and attention to detail. Whether you need a new roof installed or a re-roofing job, we're here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Commercial Expertise', 'Residential Specialists', 'Free Estimates', 'Local Professionals'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-rh-rust w-6 h-6" />
                  <span className="font-semibold text-rh-brown">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="text-rh-brown font-bold border-b-2 border-rh-rust pb-1 hover:text-rh-rust transition-colors inline-block">
              Schedule Your Free Estimate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};