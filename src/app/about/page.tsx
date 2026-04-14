'use client';

import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F4] overflow-hidden">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Our Legacy</span>
            </div>
            
            <h1 className="font-headline text-6xl font-bold tracking-tight text-primary sm:text-8xl">
              About Ghritam
            </h1>
            
            <div className="relative mt-12">
              <Quote className="absolute -top-8 -left-4 h-12 w-12 text-primary/10" />
              <p className="text-2xl font-light leading-relaxed text-foreground/80 italic sm:text-3xl">
                Ghritam was born from a desire to reconnect with our roots and bring the purest essence of nature to every home.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION (RICHER CONTENT) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground/90">
            <p>
              We are a family-run business dedicated to reviving the ancient Indian tradition of ghee-making. Our journey began in the heart of rural India, where we witnessed the fading art of the <span className="text-primary font-medium italic">Bilona process</span>.
            </p>
            <p>
              Our commitment is to health, purity, and the well-being of our community and cattle. Every jar we produce represents a promise: a promise of transparency, from the free-roaming Gir cows to your dining table.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. TEAM SECTION */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-4xl font-bold text-primary sm:text-6xl tracking-tight">Meet Our Team</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-primary/60">The Artisans behind the purity</p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => {
              const image = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="group relative overflow-hidden border-none bg-transparent shadow-none text-center">
                    <CardContent className="p-0">
                      {/* Premium Circle Frame */}
                      <div className="relative mx-auto h-56 w-56 p-2">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 transition-transform duration-700 group-hover:rotate-180" />
                        <div className="relative h-full w-full overflow-hidden rounded-full shadow-2xl">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={`Photo of ${member.name}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="224px"
                            />
                          )}
                          <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </div>

                      <div className="mt-8 space-y-1">
                        <h3 className="font-headline text-2xl font-bold text-primary">
                          {member.name}
                        </h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                          {member.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Signature Footer line */}
      <div className="flex justify-center pb-20">
         <div className="h-px w-24 bg-primary/30" />
      </div>
    </div>
  );}