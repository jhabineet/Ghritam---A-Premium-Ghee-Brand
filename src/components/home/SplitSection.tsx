'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SplitSection() {
    const image = PlaceHolderImages.find(p => p.id === 'split-section-image');

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative overflow-hidden bg-[#FCF9F1] py-20 sm:py-32">
            {/* Decorative background "Golden Glow" */}
            <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute -left-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[100px]" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 md:grid-cols-2">
                    
                    {/* IMAGE SIDE WITH DECORATIVE FRAME */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative background rectangle behind image */}
                        <div className="absolute -bottom-6 -left-6 h-full w-full rounded-2xl border-2 border-primary/10 shadow-sm" />
                        
                        <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
                            {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            )}
                            {/* Subtle warm overlay */}
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        </div>
                        
                        {/* Small decorative label */}
                        <div className="absolute -right-4 top-10 hidden rotate-90 rounded-full bg-white px-6 py-2 shadow-md md:block">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Est. 1994 Tradition</span>
                        </div>
                    </motion.div>

                    {/* TEXT CONTENT SIDE */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h2 className="font-headline text-5xl font-bold leading-tight text-primary sm:text-6xl tracking-tighter">
                                Rooted in Tradition, <br />
                                <span className="italic font-light text-foreground/80">Crafted with Purity</span>
                            </h2>
                            <div className="h-1 w-20 bg-primary/30" />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <p className="text-xl font-medium leading-relaxed text-foreground/80">
                                At Ghritam, we honor the ancient wisdom of Ayurveda. Our ghee is a tribute to the time-honored Bilona process.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">1</div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We begin with the finest A2 milk from free-roaming <span className="text-primary font-semibold">Gir cows</span>, turning it into fresh curd.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">2</div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Hand-churned to separate the butter, then slowly simmered over a low flame to create pure, golden, aromatic ghee.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-4">
                            <div className="rounded-2xl bg-white p-6 shadow-sm border border-primary/5">
                                <p className="text-sm italic text-muted-foreground">
                                    &quot;This process ensures that every jar of Ghritam is rich in nutrients and authentic flavor.&quot;
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}