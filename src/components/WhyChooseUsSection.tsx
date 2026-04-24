import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Personalized Strategies",
    description: "Every client has unique goals. We build tailored financial plans, never relying on a one-size-fits-all approach."
  },
  {
    title: "Transparent & Honest",
    description: "Integrity is at our core. We clearly explain your options, costs, and potential outcomes without confusing jargon."
  },
  {
    title: "Long-Term Focus",
    description: "We aren't here for quick transactions. We are your financial partners for life, adapting to your changing needs."
  },
  {
    title: "Dedicated Support",
    description: "Whenever you have a question or need to adjust your plan, our premium client support is just a direct call away."
  }
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              A Relationship Built on <span className="italic text-brand-gold">Trust & Results</span>
            </h3>
            <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
              Choosing a financial advisor is one of the most important decisions you will make. We pride ourselves on offering a private, premium service that places your security and prosperity above all else.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {reasons.map((reason, idx) => (
                <div key={idx}>
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-10 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center text-brand-blue font-bold tracking-wider uppercase text-sm hover:text-brand-gold transition-colors"
              >
                Request a Free Consultation <span className="ml-2 text-xl leading-none">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://fitsmallbusiness.com/wp-content/uploads/2020/09/FeatureImage_client_meeting.jpg" 
                alt="Client meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
