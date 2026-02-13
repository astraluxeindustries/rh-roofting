import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-rh-beige">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info (Left Side) */}
          <div className="lg:w-2/5 bg-rh-brown text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
             {/* Abstract background shape */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
             <div className="absolute bottom-10 left-10 w-60 h-60 bg-rh-rust/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h4 className="text-rh-gold font-bold uppercase tracking-widest mb-4">Get In Touch</h4>
              <h2 className="text-4xl font-serif font-bold mb-8">Contact Us</h2>
              <p className="text-white/80 mb-12 leading-relaxed">
                RH Roofing Company is your go-to choice for quality roofing services in Southern Utah. We proudly serve South Washington, Utah and surrounding areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-rh-rust mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Address</h5>
                    <p className="text-white/80">275 North 100 West<br/>Washington, Utah 84780</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-rh-rust mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Phone</h5>
                    <a href="tel:435-652-9613" className="text-white/80 hover:text-white transition-colors">435-652-9613</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-rh-rust mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Email</h5>
                    <a href="mailto:inforhroofing@gmail.com" className="text-white/80 hover:text-white transition-colors">inforhroofing@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-rh-rust mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg">Hours</h5>
                    <p className="text-white/80">Mon - Fri: 9:00 am - 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex gap-4">
              {/* Social placeholders */}
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(s => (
                <div key={s} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rh-rust cursor-pointer transition-colors">
                  <span className="sr-only">{s}</span>
                  <div className="w-4 h-4 bg-white/80"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
            <h3 className="text-3xl font-serif font-bold text-rh-brown mb-2">Request A Free Quote</h3>
            <p className="text-slate-500 mb-10">Fill out the form below and we will get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-rh-brown mb-2 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full bg-rh-light border border-gray-200 p-4 focus:outline-none focus:border-rh-rust focus:bg-white transition-all rounded-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-rh-brown mb-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full bg-rh-light border border-gray-200 p-4 focus:outline-none focus:border-rh-rust focus:bg-white transition-all rounded-sm" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-rh-brown mb-2 uppercase tracking-wide">Phone</label>
                  <input type="tel" className="w-full bg-rh-light border border-gray-200 p-4 focus:outline-none focus:border-rh-rust focus:bg-white transition-all rounded-sm" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-rh-brown mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-rh-light border border-gray-200 p-4 focus:outline-none focus:border-rh-rust focus:bg-white transition-all rounded-sm" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-rh-brown mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={5} className="w-full bg-rh-light border border-gray-200 p-4 focus:outline-none focus:border-rh-rust focus:bg-white transition-all rounded-sm" placeholder="Tell us about your roofing needs..."></textarea>
              </div>

              <button type="button" className="w-full bg-rh-brown text-white font-bold uppercase tracking-widest py-5 px-10 hover:bg-rh-rust transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};