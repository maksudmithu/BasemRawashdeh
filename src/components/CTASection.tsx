import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050a18]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
          alt="Financial Future"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/90 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050a18] to-transparent" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Start Planning Your <span className="text-brand-gold italic">Financial Future</span> Today.
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
            Take the first step towards absolute financial clarity. Book a complimentary, no-obligation consultation to discuss your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full text-brand-navy bg-brand-gold hover:bg-white hover:text-brand-gold shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Free Consultation
            </a>
            <a
              href="tel:+17802387454"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 glass"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: +1 780-238-7454
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
