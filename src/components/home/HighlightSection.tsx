'use client';

import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const ItalicizedText = ({ text }: { text: string }) => {
  if (!text) return null;
  const parts = text.replace(/^"|"$/g, '').split(/(?=\*)|(?<=\*)/g);

  return (
    <p className="font-headline text-3xl italic leading-relaxed text-primary/90 md:text-4xl">
      &ldquo;
      {parts.map((part, index) => {
        if (part === '*') return null;
        const isEm = parts[index - 1] === '*' && parts[index + 1] === '*';
        return isEm ? (
          <em key={index} className="not-italic text-primary font-bold">
            {part}
          </em>
        ) : (
          part
        );
      })}
      &rdquo;
    </p>
  );
};

export function HighlightSection() {
  const highlightText = '"*Purity at its peak* – crafted with tradition and care to deliver the finest quality ghee"';
  const highlightImage = PlaceHolderImages.find((p) => p.id === 'highlight-ghee-jar');

  return (
    <section className="relative overflow-hidden bg-[#F9F6F0] py-24 sm:py-32">
      {/* Decorative Gold Leaf / Radial Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          
          {/* IMAGE SIDE WITH FLOATING EFFECT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Elegant Border Frame */}
            <div className="absolute -inset-4 rounded-3xl border border-primary/20 transition-transform duration-500 group-hover:scale-105" />
            
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
              {highlightImage && (
                <Image
                  src={highlightImage.imageUrl}
                  alt={highlightImage.description}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* Subtle Golden Vignette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/60">The GHRITAM Promise</span>
              <h2 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                The Essence of Purity
              </h2>
            </div>

            <ItalicizedText text={highlightText} />

            {/* Premium Animated Badges */}
            <div className="pt-6">
               <div className="animate-slide-reveal flex flex-nowrap items-center justify-center md:justify-start gap-2 sm:gap-4 px-2">
                {["Purity", "Tradition", "Quality"].map((item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary rounded-full border border-primary/10 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
                <span className="whitespace-nowrap bg-primary px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white italic rounded-full shadow-lg shadow-primary/20">
                  GHRITAM
                </span>
              </div>
            </div>
            
            {/* Signature Divider */}
            <div className="flex justify-center md:justify-start pt-4">
                <div className="h-px w-24 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}