export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 pt-16 pb-8 text-center text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-serif text-3xl font-bold tracking-tight text-white">
            Basem <span className="text-brand-gold">Rawashdeh</span>
          </span>
          <p className="mt-4 text-slate-300 font-light max-w-md mx-auto">
            Helping you achieve financial security and peace of mind through expert, personalized advisory.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#services" className="hover:text-brand-gold transition-colors text-sm">Services</a>
          <a href="#about" className="hover:text-brand-gold transition-colors text-sm">About</a>
          <a href="#testimonials" className="hover:text-brand-gold transition-colors text-sm">Testimonials</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors text-sm">Contact</a>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Basem Rawashdeh Financial Advisory. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
