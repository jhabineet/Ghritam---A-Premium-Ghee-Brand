'use client';

import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#1A1814] text-white/90">
      {/* Decorative Top Border - Subtle Gold Gradient */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 md:grid-cols-2">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="font-headline text-4xl font-bold tracking-tighter text-white">
                GHRITAM
              </h3>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-primary/80">
                Premium Pure Ghee
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/50 font-light">
              Preserving the 5000-year-old tradition of Bilona ghee, bringing the gold standard of purity to your home.
            </p>
          </div>

          {/* ADDRESS COLUMN */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Location</h4>
            <address className="flex flex-col items-center md:items-start gap-4 not-italic text-white/70">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary/60" />
                <span className="text-sm leading-relaxed">
                  49, Gandhi Sarak, <br />
                  Rishra, Hooghly, <br />
                  West Bengal - 712248
                </span>
              </div>
            </address>
          </div>

          {/* NAVIGATE COLUMN */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center justify-center md:justify-start gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & CONNECT COLUMN */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Get In Touch</h4>
              <div className="space-y-3">
                <a href="tel:+918240658689" className="group flex items-center justify-center md:justify-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-primary/60" />
                  <span>+91 8240658689</span>
                </a>
                <a href="mailto:ajitjha0502@gmail.com" className="group flex items-center justify-center md:justify-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-primary/60" />
                  <span>ajitjha0502@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Socials</h4>
              <div className="flex justify-center gap-3 md:justify-start">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.name} 
                    variant="outline" 
                    size="icon" 
                    className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-primary hover:border-primary transition-all duration-300" 
                    asChild
                  >
                    <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 text-white" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT AREA */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              &copy; {currentYear} Ghritam. Crafted with passion and tradition.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-white/30">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
    </footer>
  );}