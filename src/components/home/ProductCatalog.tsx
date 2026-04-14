'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ProductCatalog() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section id="product-catalog" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover our range of premium ghee, crafted with care for your well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products.length > 6 && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View All Products'}
              {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
