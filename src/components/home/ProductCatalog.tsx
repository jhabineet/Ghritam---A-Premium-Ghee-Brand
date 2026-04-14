'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export function ProductCatalog() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section id="product-catalog" className="relative bg-[#FAF8F4] py-24 sm:py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Collection</span>
          </div>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-7xl">
            Our Products
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 font-light">
            Discover our range of premium ghee, handcrafted using <span className="text-primary font-medium italic">ancient methods</span> for your modern well-being.
          </p>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {products.length > 6 && (
          <motion.div 
            layout
            className="mt-20 text-center"
          >
            <Button 
              variant="ghost" 
              size="lg"
              className="rounded-full px-12 text-primary hover:bg-primary/5 font-bold tracking-widest text-xs uppercase"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'View Less' : 'View All Products'}
              {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}