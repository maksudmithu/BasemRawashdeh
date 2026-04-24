import { PhoneCall } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Basem <span className="text-brand-gold">Rawashdeh</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-brand-navy bg-brand-gold hover:bg-white hover:text-brand-gold shadow-md transition-all font-bold text-sm tracking-wide">
              Book Consultation
            </a>
            <a href="tel:+17802387454" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group">
              <PhoneCall className="w-4 h-4 mr-2 text-brand-gold transition-colors" />
              +1 780-238-7454
            </a>
          </div>
          {/* Mobile menu button could go here if needed, but keeping it simple for now */}
        </div>
      </div>
    </nav>
  );
}
