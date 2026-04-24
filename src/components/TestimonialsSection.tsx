import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Basem took the time to understand my retirement goals and built a strategy that gave me absolute peace of mind. Highly recommended.",
    author: "Richard & Sarah M.",
    role: "Retirees"
  },
  {
    quote: "Finding the right life insurance felt overwhelming until we met Basem. Honest, transparent, and completely focused on our family's needs.",
    author: "James T.",
    role: "Business Owner"
  },
  {
    quote: "The level of personalized attention is unmatched. I finally feel confident about my investment portfolio and wealth protection plan.",
    author: "Elena R.",
    role: "Medical Professional"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Client Success</h2>
          <h3 className="text-4xl font-serif text-white mb-6">
            Trusted by Families & Professionals
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl border-l-[3px] border-l-brand-gold flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-brand-gold/30 mb-6" />
                <p className="text-slate-300 font-serif text-lg leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
