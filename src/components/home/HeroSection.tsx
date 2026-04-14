'use client';

import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');
  const containerRef = useRef(null);

  // Parallax effect for the image on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background pt-8 sm:pt-12">
      {/* Dynamic Background Design Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute -right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:gap-20 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 space-y-8 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-primary">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Authentic Bilona Process</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="font-headline text-7xl font-bold tracking-tight text-primary sm:text-8xl lg:text-9xl leading-[0.9]">
                GHRITAM
              </h1>
              <p className="font-body text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/80">
                Premium Pure Cow Ghee
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-muted-foreground/90 font-light"
            >
              Experience the authentic taste of tradition. Our ghee is handcrafted with care from <span className="text-primary font-semibold">pure A2 cow milk</span> using the ancient bilona method to ensure rich aroma and unmatched nutritional benefits.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 pt-6 sm:flex-row sm:justify-center md:justify-start"
            >
              <Button size="lg" className="h-14 rounded-full px-10 text-base shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 active:scale-95" asChild>
                <Link href="#product-catalog">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full px-8 text-base border-2 hover:bg-primary/5 group" asChild>
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Floating Stats or Trust Badges */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-8 pt-8 border-t border-primary/10">
              <div>
                <p className="text-2xl font-bold text-primary font-headline">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Natural</p>
              </div>
              <div className="h-10 w-px bg-primary/10" />
              <div>
                <p className="text-2xl font-bold text-primary font-headline">A2</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Fixed Height & Responsive Aspect */}
          <motion.div
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? y : 0 }}
            className="relative w-full max-w-[500px] mx-auto lg:max-w-none"
          >
            {/* Soft decorative ring behind image */}
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/10 [mask-image:linear-gradient(to_bottom,black,transparent)] hidden sm:block" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              /* CHANGED: aspect-square and max-h to prevent it from being too long */
              className="relative z-10 aspect-square md:aspect-[4/3] lg:aspect-square max-h-[450px] lg:max-h-[550px] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] group"
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* Luxury gradient overlay - subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
            </motion.div>

            {/* Floating Badge - Adjusted position */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 z-20 hidden sm:flex h-20 w-20 items-center justify-center rounded-full bg-background border border-primary/10 p-2 shadow-xl text-center md:flex"
            >
              <span className="text-[9px] font-black leading-tight text-primary uppercase tracking-tighter">
                Handcrafted <br /> In <br /> Tradition
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}