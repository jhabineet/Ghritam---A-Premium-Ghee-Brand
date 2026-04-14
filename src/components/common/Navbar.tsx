'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle rich floating effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled 
          ? "bg-[#FAF8F4]/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-[0_2px_20px_-10px_rgba(139,94,60,0.1)]" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LOGO: Scaled and tracked like a luxury brand */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-headline text-2xl font-black tracking-[0.2em] text-primary transition-all group-hover:opacity-80">
            GHRITAM
          </span>
        </Link>

        {/* NAVIGATION: Minimalist with gold underline indicator */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground/70'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <div className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-primary/40 animate-in fade-in slide-in-from-left-2 duration-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA: Custom "Rich" Button Styling */}
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            className="group hidden md:flex rounded-full bg-primary px-8 py-6 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Contact for Booking
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          {/* MOBILE TOGGLE */}
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[400px] border-b border-primary/20 bg-[#FAF8F4]">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="font-headline text-2xl font-bold tracking-widest text-primary" onClick={() => setSheetOpen(false)}>
                        GHRITAM
                    </Link>
                    <X className="h-6 w-6 text-primary cursor-pointer" onClick={() => setSheetOpen(false)} />
                </div>
                <nav className="mt-12 flex flex-col items-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'text-xs font-bold uppercase tracking-[0.3em] transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full rounded-full bg-primary py-7 uppercase tracking-widest" onClick={() => setSheetOpen(false)}>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}