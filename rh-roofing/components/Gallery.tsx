import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop', // Big hotel
  'https://images.unsplash.com/photo-1520639824647-b86a37825b74?q=80&w=2070&auto=format&fit=crop', // Modern home
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2727&auto=format&fit=crop', // Commercial
  'https://images.unsplash.com/photo-1628109676579-34e8574384d9?q=80&w=2071&auto=format&fit=crop', // Tile roof
  'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop', // Detail
  'https://images.unsplash.com/photo-1627838784770-8d59473855a8?q=80&w=2070&auto=format&fit=crop'  // Worker
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h4 className="text-rh-rust font-bold uppercase tracking-widest mb-3">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rh-brown">Projects done by RH Roofing</h2>
          </div>
          <a href="#contact" className="hidden md:block text-rh-brown font-bold border-b-2 border-rh-rust pb-1 hover:text-rh-rust transition-colors">
            Start Your Project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative aspect-square overflow-hidden group rounded-sm cursor-pointer shadow-lg"
            >
              <img 
                src={src} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-rh-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Quality Execution</h3>
                <p className="text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 text-rh-gold">View Details</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="text-rh-brown font-bold border-b-2 border-rh-rust pb-1 hover:text-rh-rust transition-colors">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};