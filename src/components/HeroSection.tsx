import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Modern financial building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-[#050a18]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue font-bold tracking-widest text-[10px] uppercase mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse mr-2"></span>
            Licensed in Canada & USA
          </span>
          <h1 className="text-5xl md:text-[3.5rem] font-serif text-white leading-[1.1] tracking-[-0.02em] mb-6 font-medium">
            Build a <span className="text-brand-gold italic">Secure</span> and<br />
            Stress-Free Financial Future
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert insurance and financial planning tailored to your life goals and long-term wealth protection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-bold tracking-wide rounded-full text-brand-navy bg-brand-gold hover:bg-white hover:text-brand-gold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+17802387454"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-bold tracking-wide rounded-full text-white bg-transparent border border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="ml-2 w-5 h-5 mr-3" />
              Call Now: +1 780-238-7454
            </a>
          </div>
        </motion.div>
      </div>

      {/* Removed old gradient accent as body already has gradient-overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a18] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
