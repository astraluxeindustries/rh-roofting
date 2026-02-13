import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "We are very pleased that we had your company do the roof on our home over four years ago. It has withstood all wind, rain, and yes, even snow. We would be happy to be a referral for any potential customers.",
    author: "T. Derrick",
    role: "Home Owner"
  },
  {
    id: '2',
    quote: "Our roof looks awesome! We were really pleased with our new roof. The workers were very nice, worked hard, did a great job, and cleaned up everything before they left. We would highly recommend RH Roofing.",
    author: "Nancy",
    role: "Home Owner"
  },
  {
    id: '3',
    quote: "Wow, I didn't expect such a great job, at a great price, in the time that it took for you to complete my roof. You made everything look great, and in time for our family reunion...",
    author: "Jen",
    role: "Home Owner"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-rh-brown relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-rh-rust/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-rh-gold font-bold uppercase tracking-widest mb-3">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/5 hover:bg-white/15 transition-colors duration-300"
            >
              <Quote className="text-rh-rust w-10 h-10 mb-6 opacity-80" />
              <p className="text-rh-beige italic leading-loose mb-8 text-lg font-light">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 bg-rh-gold rounded-full flex items-center justify-center text-rh-brown font-bold font-serif text-xl">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-bold">{item.author}</h5>
                  <span className="text-white/60 text-sm uppercase tracking-wider">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};