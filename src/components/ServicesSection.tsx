import { motion } from 'motion/react';
import React from 'react';

const IconLifeInsurance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 21.5C12 21.5 20.5 17.5 20.5 11.5V5.5L12 2.5L3.5 5.5V11.5C3.5 17.5 12 21.5 12 21.5Z" strokeWidth="1" opacity="0.3" fill="currentColor" />
    <path d="M12 21.5C12 21.5 20.5 17.5 20.5 11.5V5.5L12 2.5L3.5 5.5V11.5C3.5 17.5 12 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 8.5C12 8.5 14 10.5 14 13C14 14.5 12.5 16 12 16C11.5 16 10 14.5 10 13C10 10.5 12 8.5 12 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconHealthInsurance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.5 7.5C19.5 11 12 18 12 18C12 18 4.5 11 4.5 7.5C4.5 5 6.5 3 9 3C10.5 3 11.5 3.5 12 4.5C12.5 3.5 13.5 3 15 3C17.5 3 19.5 5 19.5 7.5Z" strokeWidth="1" opacity="0.3" fill="currentColor"/>
    <path d="M19.5 7.5C19.5 11 12 18 12 18C12 18 4.5 11 4.5 7.5C4.5 5 6.5 3 9 3C10.5 3 11.5 3.5 12 4.5C12.5 3.5 13.5 3 15 3C17.5 3 19.5 5 19.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V13M9.5 10.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconRetirement = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z" strokeWidth="1" opacity="0.3" fill="currentColor"/>
    <path d="M12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 16H21M7 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconInvestment = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" strokeWidth="1" opacity="0.3" fill="currentColor"/>
    <path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13L11 10L13 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconWealth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10Z" strokeWidth="1" opacity="0.3" fill="currentColor"/>
    <path d="M5 10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const services = [
  {
    icon: IconLifeInsurance,
    title: "Life Insurance Planning",
    description: "Secure your family's future with comprehensive life insurance policies tailored to your unique financial obligations."
  },
  {
    icon: IconHealthInsurance,
    title: "Health Insurance Solutions",
    description: "Access premium healthcare without financial burden through customized health coverage plans."
  },
  {
    icon: IconRetirement,
    title: "Retirement Income Planning",
    description: "Design a robust retirement strategy that ensures a steady, reliable income stream for your golden years."
  },
  {
    icon: IconInvestment,
    title: "Investment Advisory",
    description: "Grow your wealth steadily with expert investment management focused on your risk tolerance and goals."
  },
  {
    icon: IconWealth,
    title: "Wealth Protection Strategy",
    description: "Safeguard your hard-earned assets from market volatility, inflation, and unforeseen circumstances."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Expertise & Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Comprehensive Financial Services
          </h3>
          <p className="text-slate-300 text-lg font-light">
            We provide a holistic approach to your financial well-being, combining premium insurance products with strategic wealth management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group service-card"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl mb-6 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/50 transition-all duration-300">
                <service.icon className="w-6 h-6 text-brand-gold drop-shadow-md" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card in the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
            className="bg-gradient-to-br from-brand-gold to-yellow-600 p-8 rounded-3xl flex flex-col justify-center items-start shadow-xl"
          >
            <h4 className="text-2xl font-serif font-bold text-brand-navy mb-4">Need a Custom Strategy?</h4>
            <p className="text-brand-navy/80 mb-8 font-medium">Let's discuss your unique financial situation and build a plan that works for you.</p>
            <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand-navy hover:text-white transition-colors">
              Book a Consultation &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
