import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Twitter, 
  Linkedin, 
  Mail,
  Sun,
  Moon,
  ArrowUp
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from "@/lib/utils";

const LOGO_URL = "https://i.imgur.com/Rv6dZ9C.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-green/20 selection:text-brand-green flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || location.pathname !== '/' ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={LOGO_URL} 
              alt="HFAI Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.href ? 'text-brand-green' : 'text-brand-green dark:text-white hover:text-brand-green dark:hover:text-brand-green'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            <Link to="/donate" className={cn(buttonVariants({ variant: 'default' }), "bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-6")}>
              Donate Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-medium ${
                      location.pathname === link.href ? 'text-brand-green' : 'text-brand-green dark:text-white hover:text-brand-green'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/donate" className={cn(buttonVariants({ variant: 'default' }), "bg-brand-red hover:bg-brand-red/90 text-white w-full mt-2")}>
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 bg-brand-green text-white rounded-full shadow-lg hover:bg-brand-green/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Strategic Partners Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-red">Strategic Partners</h1>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              "https://i.imgur.com/PeycQkc.jpeg",
              "https://i.imgur.com/QYdB6qw.png",
              "https://i.imgur.com/oW9okuH.png"
            ].map((logo, i) => (
              <div key={i} className="h-32 w-64 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm">
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-16 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={LOGO_URL} 
                  alt="HFAI Logo" 
                  className="h-12 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
                Dedicated to curbing the 4,000+ annual deaths caused by hepatitis-related liver cancer. Discover our mission to reach 18 million undiagnosed Nigerians.
              </p>
              <div className="space-y-3 text-gray-400 mb-8">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a href="mailto:hfai.info@gmail.com" className="hover:text-brand-green">hfai.info@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span>+234 903 628 1782</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span>Luvu road, Masaka Area 1, Karu LGA, Nasarawa State.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://x.com/official_HFAI" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/hepatitis-free-africa-initiative/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:hfai.info@gmail.com" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="hover:text-brand-green transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />
          
          <div className="flex flex-col items-center gap-6 text-sm text-gray-500 text-center">
            <p>
              Built with ❤️ by{' '}
              <a 
                href="https://www.scaleupfoundation.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:underline"
              >
                Scaleup Foundation
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
