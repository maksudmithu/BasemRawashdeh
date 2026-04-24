import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">
            Request Your Free Consultation
          </h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 shadow-sm">
              <h4 className="text-2xl font-serif text-white mb-6">Direct Contact</h4>
              
              <div className="space-y-6">
                <a href="tel:+17802387454" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shadow-sm border border-white/10 group-hover:border-brand-gold transition-colors">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 font-medium">Call Us Directly</p>
                    <p className="text-white font-semibold text-lg">+1 780-238-7454</p>
                  </div>
                </a>

                <a href="mailto:basemrawashdah@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shadow-sm border border-white/10 group-hover:border-brand-gold transition-colors">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 font-medium">Email Us</p>
                    <p className="text-white font-semibold">basemrawashdah@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/17802387454" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shadow-sm border border-white/10 group-hover:border-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 font-medium">WhatsApp</p>
                    <p className="text-white font-semibold">Message Us</p>
                  </div>
                </a>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shadow-sm border border-white/10">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 font-medium">Area Served</p>
                    <p className="text-white font-semibold">Canada & USA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-2xl font-serif text-white mb-8">Send a Message</h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-gold/50 outline-none transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-gold/50 outline-none transition-all placeholder:text-slate-600"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-gold/50 outline-none transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">How can we help you?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-gold/50 outline-none transition-all resize-none placeholder:text-slate-600"
                  placeholder="I am interested in discussing..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-5 text-sm uppercase tracking-widest font-bold rounded-2xl text-white bg-brand-blue hover:bg-brand-blue/80 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Request Free Consultation
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">Safe, secure, and confidential.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
