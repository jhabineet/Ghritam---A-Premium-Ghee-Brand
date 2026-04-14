'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowRight } from 'lucide-react';

type ProductCardProps = {
  product: {
    name: string;
    description: string;
    imageId: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find(p => p.id === product.imageId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="group relative overflow-hidden border-none bg-white shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem]">
        {/* Luxury Badge for specific items (Optional logic) */}
        <div className="absolute left-4 top-4 z-20">
            <span className="rounded-full bg-primary/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                A2 Certified
            </span>
        </div>

        <div className="relative aspect-square w-full overflow-hidden bg-[#FDFBF7]">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover p-4 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <CardContent className="relative space-y-3 p-8">
          <div className="space-y-1">
            <h3 className="font-headline text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-primary/80">
              {product.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground/80">
              {product.description}
            </p>
          </div>

          <div className="pt-2">
            <Button 
              variant="outline" 
              className="w-full rounded-full border-primary/20 bg-transparent py-6 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Enquire Now
              <ArrowRight className="ml-2 h-0 w-0 transition-all group-hover:ml-3 group-hover:h-4 group-hover:w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}