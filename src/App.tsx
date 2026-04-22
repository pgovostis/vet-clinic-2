/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Stethoscope, 
  ShoppingBag, 
  Clock, 
  Phone, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  Menu,
  X as CloseIcon,
  Star
} from 'lucide-react';

const TEAM = [
  {
    name: "Dr. Elena Vance",
    role: "Founding Veterinarian",
    bio: "Passionate about integrative medicine and feline behavior.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
  },
  {
    name: "Mark Thorne",
    role: "Senior Surgeon",
    bio: "Specializing in orthopedic surgery and trauma care.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Head Vet Tech",
    bio: "Ensuring every patient feels safe and loved during their stay.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Jameson Blake",
    story: "When Luna needed emergency surgery, Haven didn't just save her life—they kept me calm and informed every step of the way. Truly partners in care.",
    pet: "Luna, Golden Retriever"
  },
  {
    name: "Sophia Martinez",
    story: "Finding a vet that understands high-anxiety cats is rare. Dr. Elena has a magical touch that made Oliver's checkup completely stress-free.",
    pet: "Oliver, Siamese"
  },
  {
    name: "David Aris",
    story: "The online store is a lifesaver. Getting prescription diet delivered directly to my door means one less thing to worry about for my senior dog.",
    pet: "Buster, Beagle"
  }
];

const PRODUCTS = [
  { name: "Organic Paw Balm", price: "$18", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop" },
  { name: "Herbal Calming Drops", price: "$24", image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=1974&auto=format&fit=crop" },
  { name: "Premium Flax Treats", price: "$12", image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=2070&auto=format&fit=crop" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-polish-sage flex items-center justify-center rounded-full shadow-md">
              <div className="w-4 h-4 rounded-sm border-2 border-white rotate-45 flex items-center justify-center">
                <Heart size={8} fill="white" className="rotate-[-45deg]" />
              </div>
            </div>
            <span className="font-serif text-2xl font-semibold text-polish-sage tracking-tight">Kindred Paws</span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-display text-[13px] font-medium tracking-wide">
            <a href="#about" className="text-gray-500 hover:text-polish-clay transition-colors uppercase">Our Story</a>
            <a href="#team" className="text-gray-500 hover:text-polish-clay transition-colors uppercase">Our Team</a>
            <a href="#services" className="text-gray-500 hover:text-polish-clay transition-colors uppercase">Services</a>
            <a href="#store" className="text-gray-500 hover:text-polish-clay transition-colors uppercase italic">Shop</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-polish-emergency text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-emergency hover:brightness-110 transition-all">
              Emergency Care
            </button>
            <button className="px-6 py-2.5 bg-polish-clay text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-book hover:brightness-110 transition-all">
              Book Appointment
            </button>
          </div>

          <button className="md:hidden text-polish-ink" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-polish-cream p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <CloseIcon size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-8 text-3xl font-serif">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>The Team</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#store" onClick={() => setMobileMenuOpen(false)}>The Store</a>
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-4 bg-polish-clay text-white rounded-full text-sm font-semibold uppercase">Book Now</button>
                <button className="w-full py-4 bg-polish-emergency text-white rounded-full text-sm font-semibold uppercase">Emergency</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" 
            alt="Venerable Vet" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Hero Mask Styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-polish-sage/90 via-polish-sage/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(197,160,89,0.3)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 px-12 md:px-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-polish-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block drop-shadow-sm">Est. 1982 • Family Owned</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8 drop-shadow-lg">
              Treating every heart that beats as if it were our own.
            </h1>
            <p className="font-display text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">
              Kindred Paws began in a small sunlit barn with a simple mission: to offer premium, personal care for your closest companions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto px-10 py-4 bg-white text-polish-sage rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all"
              >
                Book Appointment
              </motion.button>
              <motion.button 
                whileHover={{ y: -2 }}
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Learn Our History
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-12 md:left-24 text-white/40 flex flex-col items-start gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
          <div className="w-px h-12 bg-white/20 relative">
            <motion.div 
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 w-full bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Origin Story / About */}
      <section id="about" className="bg-polish-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <h3 className="text-polish-gold font-display font-bold uppercase tracking-[0.2em] text-xs italic">Our Heritage</h3>
              <h2 className="font-serif text-4xl md:text-6xl text-polish-ink leading-tight">
                Quality care, locally cultivated.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                What started as a dream in 2014 has blossomed into Haven—a premier medical sanctuary. We combine cutting-edge technology with the gentle intuition of doctors who truly listen. Every patient here is treated with the same reverence we hold for our own families.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">12k+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">10yr</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-polish-clay">8k+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h3 className="text-polish-sage font-display font-bold uppercase tracking-[0.3em] text-xs mb-6">Specialized Care</h3>
              <h2 className="font-serif text-5xl md:text-7xl">Species-specific wellness.</h2>
            </div>
            <p className="max-w-md text-gray-500 text-lg font-light leading-relaxed">
              Tailored medical pathways designed for the unique physiological and behavioral needs of your canine and feline family members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Dog Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="card relative overflow-hidden p-12 aspect-[4/3] flex flex-col justify-end group cursor-pointer border-gray-100/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop" 
                alt="Canine" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-polish-cream rounded-full mb-8 flex items-center justify-center text-3xl shadow-sm border border-gray-50">🐕</div>
                <h3 className="font-serif text-4xl mb-4">Canine Health</h3>
                <p className="text-gray-500 mb-8 max-w-xs font-light">Comprehensive orthopedic care, clinical nutrition, and behavior consultation.</p>
                <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-polish-sage group-hover:gap-6 transition-all">
                  Dog Services <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Cat Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="card relative overflow-hidden p-12 aspect-[4/3] flex flex-col justify-end group cursor-pointer border-gray-100/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" 
                alt="Feline" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-polish-cream rounded-full mb-8 flex items-center justify-center text-3xl shadow-sm border border-gray-50">🐈</div>
                <h3 className="font-serif text-4xl mb-4">Feline Wellness</h3>
                <p className="text-gray-500 mb-8 max-w-xs font-light">Specialized low-stress diagnostics, dental excellence, and senior management.</p>
                <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-polish-sage group-hover:gap-6 transition-all">
                  Cat Services <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team" className="py-24 px-6 md:px-12 bg-polish-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h3 className="text-polish-clay font-display font-bold uppercase tracking-[0.4em] text-[10px]">The Kindred Team</h3>
            <h2 className="font-serif text-5xl md:text-7xl">Expert hands, gentle spirits.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-64 h-80 mb-8 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-3xl mb-2">{member.name}</h4>
                <p className="text-polish-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[240px]">
                  {member.bio}
                </p>
                <div className="flex gap-4 mt-6 text-gray-300">
                  <Instagram size={16} className="hover:text-polish-clay cursor-pointer transition-colors" />
                  <Facebook size={16} className="hover:text-polish-clay cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-8xl text-polish-sage/10 absolute -top-10 left-0 select-none">Kindness Echoes.</h2>
          <div className="text-center mb-20 relative">
            <h3 className="text-polish-gold font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Client Stories</h3>
            <h2 className="font-serif text-5xl italic">Stories from our home.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card p-10 bg-polish-cream/30 flex flex-col hover:shadow-lg transition-all border-gray-100/30">
                <div className="flex gap-1 text-polish-gold mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="font-serif text-xl italic text-gray-700 leading-relaxed mb-8 flex-1">
                  "{t.story}"
                </blockquote>
                <div>
                  <h4 className="font-display font-bold text-sm text-polish-sage tracking-wide uppercase">— {t.name}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apothecary / Store Preview */}
      <section id="store" className="py-24 px-6 md:px-12 bg-polish-cream">
        <div className="max-w-7xl mx-auto">
          <div className="card p-1 pb-1 border-dashed border-2 border-polish-sage/20 bg-white">
            <div className="p-16 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8 text-center md:text-left">
                <h3 className="text-polish-clay font-display font-bold uppercase tracking-[0.2em] text-[10px]">The Apothecary</h3>
                <h2 className="font-serif text-5xl md:text-7xl">Curated for their comfort.</h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  Browse our selection of clinical nutrition, designer wellness accessories, and pharmaceutical essentials—delivered with care.
                </p>
                <button className="px-10 py-4 bg-polish-sage text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-polish-clay transition-all shadow-xl flex items-center gap-3 mx-auto md:mx-0">
                  Visit The Store <ShoppingBag size={14} />
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {PRODUCTS.slice(0, 3).map((prod, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`card overflow-hidden bg-white group cursor-pointer ${i === 2 ? 'col-span-2' : ''}`}
                  >
                    <div className={`${i === 2 ? 'h-48' : 'h-40'} w-full relative`}>
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                    <div className="p-4 flex justify-between items-center bg-white">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wide">{prod.name}</h4>
                        <p className="text-[9px] text-gray-400 italic">Vetted Selection</p>
                      </div>
                      <span className="text-xs font-bold text-polish-gold">{prod.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-polish-sage flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rotate-45"></div>
                </div>
                <span className="serif text-2xl font-semibold text-polish-sage tracking-tight">Kindred Paws</span>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                A destination for modern veterinary medicine, locally rooted and family owned since 1982.
              </p>
              <div className="flex gap-4 text-polish-gold">
                <Instagram size={18} className="hover:text-polish-clay cursor-pointer" />
                <Twitter size={18} className="hover:text-polish-clay cursor-pointer" />
                <Facebook size={18} className="hover:text-polish-clay cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gray-300">Discover</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="text-gray-600 hover:text-polish-clay transition-colors underline-offset-4 hover:underline">Medical Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-polish-clay transition-colors underline-offset-4 hover:underline">Surgical Excellence</a></li>
                <li><a href="#" className="text-gray-600 hover:text-polish-clay transition-colors underline-offset-4 hover:underline">Dental Care</a></li>
                <li><a href="#" className="text-gray-600 hover:text-polish-clay transition-colors italic underline-offset-4 hover:underline font-serif">The Apothecary</a></li>
              </ul>
            </div>

            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gray-300">Visit Us</h5>
              <ul className="space-y-4 text-sm font-medium text-gray-600">
                <li className="flex items-start gap-3">
                  <Phone size={14} className="text-polish-gold shrink-0 mt-1" />
                  <span>(555) 782-9012</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={14} className="text-polish-gold shrink-0 mt-1" />
                  <div>
                    <p>Mon - Fri: 8:00 - 19:00</p>
                    <p className="text-gray-400 text-xs">Sat: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8 pt-2">
              <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-gray-300">Newsletter</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-widest font-bold">Local updates \u0026 healing stories</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-polish-cream border-transparent border-b-gray-200 border rounded-none py-3 pr-10 focus:outline-none focus:border-polish-clay italic text-sm placeholder:text-gray-300"
                />
                <button className="absolute right-0 top-3 text-polish-gold">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <div className="flex gap-12">
              <a href="#" className="hover:text-polish-ink transition-colors">Privacy</a>
              <a href="#" className="hover:text-polish-ink transition-colors">Ethical Standards</a>
            </div>
            <p>© 2026 Kindred Paws Veterinary. All rights reserved.</p>
            <div className="flex items-center gap-2 text-polish-sage/40">
              <ShieldCheck size={14} />
              <span>Certified Care Practice</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
