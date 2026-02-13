import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'flat',
    title: 'Flat Roofing EPDM',
    description: 'Special expertise in roofing flat commercial buildings with durable EPDM solutions designed for longevity.',
    image: 'https://images.unsplash.com/photo-1599619585752-c38f2963628e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'shingle',
    title: 'Shingle Roofing',
    description: 'High-quality shingle roofing for commercial buildings and residential homes. A classic, reliable choice.',
    image: 'https://images.unsplash.com/photo-1624625299863-12885994191d?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'metal',
    title: 'Metal Roofing',
    description: 'Premium metal roofing for businesses and residential homes. Durable, energy-efficient, and stylish.',
    image: 'https://images.unsplash.com/photo-1517163068573-042de1138803?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: 'tile',
    title: 'Tile Roofing',
    description: 'Elegant tile roofing for residential homes and businesses. Enhances curb appeal with superior durability.',
    image: 'https://images.unsplash.com/photo-1628109676579-34e8574384d9?q=80&w=2071&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-rh-light relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-rh-rust font-bold uppercase tracking-widest mb-3">What We Do</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-rh-brown">Our Premium Services</h2>
          <div className="w-24 h-1 bg-rh-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white group hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-2xl overflow-hidden rounded-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-rh-brown mb-4 group-hover:text-rh-rust transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-rh-gold hover:text-rh-brown transition-colors flex items-center gap-1">
                  Get Quote <span className="text-lg">›</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};