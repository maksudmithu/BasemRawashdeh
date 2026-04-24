import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';

export function TrustSection() {
  const badges = [
    { icon: ShieldCheck, text: "Trusted Advisor" },
    { icon: TrendingUp, text: "Retirement Expert" },
    { icon: Lock, text: "Wealth Protection Specialist" }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Elegant image mask */}
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQGo3cxgg6tkBQ/profile-displayphoto-scale_400_400/B56Z2UatXWHEAg-/0/1776311545597?e=1778716800&v=beta&t=K00u9bO4BorQK3s948VS_hPWRQCUpJ5RQ5deR8X1pHw" 
                alt="Basem Rawashdeh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-[2rem] pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-navy rounded-[2rem] -z-10 blur-2xl opacity-20" />
            
            {/* Trust badge overlaid on image */}
            <div className="absolute -bottom-8 left-8 bg-[#050a18]/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-brand-gold/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-gold drop-shadow-md" />
                </div>
                <div>
                  <p className="text-xl font-serif font-bold text-white drop-shadow-md">15+ Years</p>
                  <p className="text-sm text-brand-gold-light font-medium drop-shadow-sm">Of Trusted Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">About Basem Rawashdeh</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
              Your Partner in <span className="italic text-brand-gold">Long-Term Wealth</span> & Clarity
            </h3>
            <p className="text-lg text-slate-400 mb-8 font-light leading-relaxed">
              As a professional financial advisor and insurance broker, I specialize in creating personalized strategies that protect your family and grow your assets. My client-first approach ensures that your unique life goals are at the center of every financial decision.
            </p>
            
            <div className="space-y-4 mb-10">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="p-1.5 bg-brand-blue/20 rounded-full text-brand-blue">
                    <badge.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-slate-300 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mt-6 pt-6 border-t border-white/10">Basem Rawashdeh</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
