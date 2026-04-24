import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stethoscope, ShoppingBag, Clock, Phone, Calendar, ArrowRight, ShieldCheck, Instagram, Facebook, ChevronRight, Menu, X as CloseIcon, Star, Dog, Cat } from 'lucide-react';
import { SITE_CONFIG, ABOUT, TEAM, TESTIMONIALS, SERVICES, BOOKING_OPTIONS } from './siteConfig';

const S = SITE_CONFIG;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Nav */}
      <nav className={`fixed z-50 transition-all duration-300 px-6 py-4 md:px-12 ${isScrolled ? 'top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3' : 'top-4 left-4 right-4 bg-white/95 backdrop-blur-md shadow-lg border border-gray-100/50 rounded-2xl'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={S.logoUrl} alt={`${S.businessName} logo`} className="h-10 w-auto" referrerPolicy="no-referrer" />
            <span className="font-serif text-xl font-semibold text-dw-navy tracking-tight">{S.shortName}</span>
          </div>
          <div className="hidden md:flex items-center gap-10 font-display text-[13px] font-medium tracking-wide">
            <a href="#about" className="text-gray-500 hover:text-dw-coral transition-colors uppercase">About</a>
            <a href="#team" className="text-gray-500 hover:text-dw-coral transition-colors uppercase">The Team</a>
            <a href="#services" className="text-gray-500 hover:text-dw-coral transition-colors uppercase">Services</a>
            {S.storeEnabled && <a href={S.storeUrl} className="text-gray-500 hover:text-dw-coral transition-colors uppercase italic">{S.storePartnerName}</a>}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-3 min-h-[44px] bg-dw-emergency text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-emergency hover:brightness-110 transition-all cursor-pointer">After Hours</button>
            <button className="px-6 py-3 min-h-[44px] bg-dw-teal text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-book hover:brightness-110 transition-all cursor-pointer">Book Appointment</button>
          </div>
          <button className="md:hidden text-dw-ink cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[60] bg-dw-cream p-8 flex flex-col">
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close menu"><CloseIcon size={32} /></button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-8 text-3xl font-serif">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>The Team</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-4 bg-dw-teal text-white rounded-full text-sm font-semibold uppercase cursor-pointer">Book Now</button>
                <button className="w-full py-4 bg-dw-emergency text-white rounded-full text-sm font-semibold uppercase cursor-pointer">After Hours</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center py-32 md:py-40" aria-label="Hero">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop" alt="Happy dog in warm light" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-dw-navy/90 via-dw-navy/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-3xl w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-dw-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">{S.tagBadge}</span>
              <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6 drop-shadow-lg">{S.heroHeadline}</h1>
              <div className="inline-flex items-center gap-2 bg-dw-ink/40 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5 shadow-lg mb-8">
                <span className="text-white text-sm font-bold">{S.googleRating}</span>
                <div className="flex gap-0.5 text-dw-gold">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider ml-1">{S.googleReviewCount} Google Reviews</span>
              </div>
              <p className="font-display text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">{S.heroSubtext}</p>
              <div className="flex flex-wrap items-center gap-4">
                <motion.button whileHover={{ y: -2 }} className="w-full sm:w-auto px-8 py-4 min-h-[44px] bg-white text-dw-navy rounded-full text-xs font-bold uppercase tracking-widest shadow-xl cursor-pointer">Book Appointment</motion.button>
                <motion.button whileHover={{ y: -2 }} className="w-full sm:w-auto px-8 py-4 min-h-[44px] bg-dw-coral text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-xl cursor-pointer">New Client Registration</motion.button>
                {S.storeEnabled && <motion.button whileHover={{ y: -2 }} className="w-full sm:w-auto px-8 py-4 min-h-[44px] border border-white/30 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 cursor-pointer">Order Food &amp; Rx</motion.button>}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-dw-cream py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" alt="Vet caring for a pet" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="space-y-8">
              <h3 className="text-dw-gold font-display font-bold uppercase tracking-[0.2em] text-xs italic">Our Heritage</h3>
              <h2 className="font-serif text-4xl md:text-6xl text-dw-ink leading-tight">{ABOUT.headline}</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">{ABOUT.story}</p>
              <div className="bg-dw-teal/5 border border-dw-teal/10 rounded-2xl p-6 mt-4">
                <div className="flex items-center gap-2 mb-3"><ShieldCheck size={16} className="text-dw-gold" /><span className="text-[10px] font-bold uppercase tracking-widest text-dw-gold">Cat Friendly Practice — Gold Level</span></div>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{ABOUT.catStory}</p>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div><div className="text-3xl font-serif font-bold text-dw-coral">{ABOUT.stats.patients}</div><div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Reviews</div></div>
                <div><div className="text-3xl font-serif font-bold text-dw-coral">{ABOUT.stats.years}</div><div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Excellence</div></div>
                <div><div className="text-3xl font-serif font-bold text-dw-coral">Gold</div><div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">Cat Friendly</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
              <div>
                <h3 className="text-dw-teal font-display font-bold uppercase tracking-[0.3em] text-xs mb-6">Specialized Care</h3>
                <h2 className="font-serif text-5xl md:text-7xl">Two hospitals. One team.</h2>
              </div>
              <p className="max-w-md text-gray-500 text-lg font-light leading-relaxed">Separate cat-only and dog-only facilities with tailored medical pathways for each species.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Dog Card */}
              <motion.div whileHover={{ y: -8 }} className="card relative overflow-hidden p-8 sm:p-10 md:p-12 min-h-[450px] md:min-h-0 md:aspect-[4/3] flex flex-col justify-end group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop" alt="Dog" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-dw-cream rounded-full mb-8 flex items-center justify-center shadow-sm"><Dog size={28} className="text-dw-navy" /></div>
                  <h3 className="font-serif text-4xl mb-4">Dog Hospital</h3>
                  <div className="flex items-center gap-2 mb-4 text-[10px] uppercase font-bold text-dw-gold tracking-widest"><ShieldCheck size={12}/>Dedicated Canine Facility</div>
                  <p className="text-gray-500 mb-8 max-w-xs font-light">Preventative care, dentistry, surgery, radiology, ultrasound, acupuncture, and laser therapy.</p>
                  <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-dw-navy group-hover:gap-6 transition-all cursor-pointer">Dog Services <ArrowRight size={14} /></button>
                </div>
              </motion.div>
              {/* Cat Card */}
              <motion.div whileHover={{ y: -8 }} className="card relative overflow-hidden p-8 sm:p-10 md:p-12 min-h-[450px] md:min-h-0 md:aspect-[4/3] flex flex-col justify-end group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" alt="Cat" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-dw-cream rounded-full mb-8 flex items-center justify-center shadow-sm"><Cat size={28} className="text-dw-teal" /></div>
                  <h3 className="font-serif text-4xl mb-4">Cat-Only Hospital</h3>
                  <div className="flex items-center gap-2 mb-4 text-[10px] uppercase font-bold text-dw-gold tracking-widest"><ShieldCheck size={12}/>Gold Level Cat Clinic</div>
                  <p className="text-gray-500 mb-8 max-w-xs font-light">Low-stress diagnostics, feline dental excellence, and senior management in our cat-only ward.</p>
                  <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-dw-teal group-hover:gap-6 transition-all cursor-pointer">Cat Services <ArrowRight size={14} /></button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 px-6 md:px-12 bg-dw-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 space-y-6">
              <h3 className="text-dw-coral font-display font-bold uppercase tracking-[0.4em] text-[10px]">The Dundas West Team</h3>
              <h2 className="font-serif text-5xl md:text-7xl">Expert hands, gentle spirits.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {TEAM.map((member, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center group">
                  <div className="w-64 h-80 mb-8 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-serif text-3xl mb-2">{member.name}</h4>
                  <p className="text-dw-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[240px]">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="font-serif text-5xl md:text-8xl text-dw-teal/10 absolute -top-10 left-0 select-none">We are Dundas West.</h2>
            <div className="text-center mb-20 relative">
              <h3 className="text-dw-gold font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Client Stories</h3>
              <h2 className="font-serif text-5xl italic">Stories from our family.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card p-6 sm:p-8 md:p-10 bg-dw-cream/30 flex flex-col hover:bg-dw-cream hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer" role="article" aria-label={`Testimonial from ${t.name}`}>
                  <div className="flex gap-1 text-dw-gold mb-8">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                  <blockquote className="font-serif text-xl italic text-gray-700 leading-relaxed mb-8 flex-1">"{t.story}"</blockquote>
                  <div>
                    <h4 className="font-display font-bold text-sm text-dw-navy tracking-wide uppercase">— {t.name}</h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">{t.pet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store */}
        {S.storeEnabled && (
          <section id="store" className="py-24 px-6 md:px-12 bg-dw-cream">
            <div className="max-w-7xl mx-auto">
              <div className="card p-1 pb-1 border-dashed border-2 border-dw-teal/20 bg-white">
                <div className="p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="flex-1 space-y-8 text-center md:text-left">
                    <h3 className="text-dw-coral font-display font-bold uppercase tracking-[0.2em] text-[10px]">{S.storePartnerName} Partner</h3>
                    <h2 className="font-serif text-5xl md:text-7xl">Shop from home.</h2>
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">Browse our selection of clinical nutrition, wellness accessories, and pharmaceutical essentials. Order online and get it delivered to your door.</p>
                    <a href={S.storeUrl} className="inline-flex px-10 py-4 min-h-[44px] bg-dw-navy text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-dw-coral transition-all shadow-xl items-center gap-3 cursor-pointer">Shop {S.storePartnerName} <ShoppingBag size={14} /></a>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-64 h-64 bg-dw-cream rounded-[2rem] flex items-center justify-center shadow-inner">
                      <ShoppingBag size={64} className="text-dw-teal/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Booking CTA */}
        <section id="book" className="py-24 px-6 md:px-12 bg-dw-navy text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(42,123,136,0.15)_0%,transparent_50%)]"></div>
          <div className="max-w-3xl mx-auto relative z-10 space-y-8">
            <h3 className="text-dw-gold font-display font-bold uppercase tracking-[0.3em] text-[10px]">Your Pet Deserves The Best</h3>
            <h2 className="font-serif text-5xl md:text-7xl">Ready to join our family?</h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl mx-auto">Schedule your first consultation and experience veterinary care the way it was meant to be.</p>
            <form className="max-w-md mx-auto grid gap-4 mt-8 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div><label htmlFor="owner-name" className="sr-only">Your Name</label><input id="owner-name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-dw-gold focus:bg-white/10 transition-all font-display text-sm" /></div>
                <div><label htmlFor="pet-name" className="sr-only">Pet's Name</label><input id="pet-name" type="text" placeholder="Pet's Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-dw-gold focus:bg-white/10 transition-all font-display text-sm" /></div>
              </div>
              <div><label htmlFor="contact-email" className="sr-only">Email</label><input id="contact-email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-dw-gold focus:bg-white/10 transition-all font-display text-sm" /></div>
              <div><label htmlFor="service-type" className="sr-only">Service Type</label>
                <select id="service-type" required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:border-dw-gold focus:bg-white/10 transition-all font-display text-sm appearance-none cursor-pointer">
                  <option value="" disabled className="text-gray-900">Select Service Type...</option>
                  {BOOKING_OPTIONS.map(o => <option key={o.id} value={o.id} className="text-gray-900">{o.label}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full mt-4 bg-dw-gold text-dw-ink rounded-full py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg cursor-pointer min-h-[44px]">Request Appointment</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dw-ink pt-24 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-20 mb-24">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white/95 p-2 rounded-xl border border-white/20 shadow-sm">
                    <img src={S.logoUrl} alt={`${S.businessName} logo`} className="h-8 w-auto" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-serif text-2xl font-semibold text-white tracking-tight">{S.shortName}</span>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">An award-winning veterinary hospital in Toronto's west end with dedicated cat-only and dog-only facilities.</p>
                <div className="flex gap-4 text-dw-gold">
                  {S.socialLinks.instagram && <a href={S.socialLinks.instagram} aria-label="Instagram" className="hover:text-dw-coral cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Instagram size={18} /></a>}
                  {S.socialLinks.facebook && <a href={S.socialLinks.facebook} aria-label="Facebook" className="hover:text-dw-coral cursor-pointer transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><Facebook size={18} /></a>}
                </div>
              </div>
              <div className="space-y-8 pt-2">
                <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Discover</h5>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="text-white/70 hover:text-dw-gold transition-colors cursor-pointer">New Client Registration</a></li>
                  <li><a href="#" className="text-white/70 hover:text-dw-gold transition-colors cursor-pointer">Patient Portal</a></li>
                  <li><a href={S.storeUrl} className="text-white/70 hover:text-dw-gold transition-colors italic font-serif cursor-pointer">{S.storePartnerName}</a></li>
                </ul>
              </div>
              <div className="space-y-8 pt-2">
                <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Visit Us</h5>
                <ul className="space-y-4 text-sm font-medium text-white/70">
                  <li className="flex items-start gap-3"><Phone size={14} className="text-dw-gold shrink-0 mt-1" /><span>{S.phone}</span></li>
                  <li className="flex items-start gap-3"><Clock size={14} className="text-dw-gold shrink-0 mt-1" /><div><p>{S.hours.weekday}</p><p className="text-white/40 text-xs mt-1">{S.hours.weekend}</p></div></li>
                </ul>
              </div>
              <div className="space-y-8 pt-2">
                <h5 className="font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white/40">Newsletter</h5>
                <form className="relative"><label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input id="newsletter-email" type="email" placeholder="Email address" className="w-full bg-transparent border-transparent border-b-white/20 border rounded-none py-3 pr-10 text-white focus:outline-none focus:border-dw-gold italic text-sm placeholder:text-white/30 transition-colors" />
                  <button type="submit" className="absolute right-0 top-0 text-dw-gold cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Subscribe"><ArrowRight size={18} /></button>
                </form>
              </div>
            </div>
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              <div className="flex gap-12"><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</a></div>
              <p>&copy; 2026 {S.businessName}. All rights reserved.</p>
              <div className="flex items-center gap-2 text-white/30"><ShieldCheck size={14} /><span>Award-Winning Practice</span></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
