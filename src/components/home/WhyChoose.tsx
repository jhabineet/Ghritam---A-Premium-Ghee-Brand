'use client';

import { motion, Variants } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { whyChooseItems } from '@/lib/data';
import { Sparkles } from 'lucide-react';

export function WhyChoose() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] py-24 sm:py-32">
      {/* Decorative background "Golden Glow" */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Centered Header Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">The Ghritam Standard</span>
          </div>
          
          <h2 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-7xl">
            Why Choose Ghritam?
          </h2>
          
          <p className="mt-6 text-lg text-muted-foreground/80 font-light">
            Experience the difference that purity, tradition, and quality make.
          </p>
        </motion.div>

        {/* Centered Dropdown Area */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.id * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${item.id}`} 
                  className="group border-b border-primary/10 px-2 transition-all duration-300 hover:bg-primary/[0.02]"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-primary/5 text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-300">
                        <item.icon className="h-5 w-5 stroke-[1.5]" />
                      </div>
                      <span className="font-headline text-2xl font-bold text-primary sm:text-3xl">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-[4.5rem] pr-4">
                    <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}