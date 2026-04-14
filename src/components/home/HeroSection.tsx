import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-primary/80">
              Premium Pure Ghee
            </p>
            <h1 className="font-headline text-6xl font-bold tracking-tight text-primary sm:text-7xl">
              Ghritam
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Experience the authentic taste of tradition. Our ghee is handcrafted with care from pure A2 cow milk using the ancient bilona method to ensure rich aroma and unmatched nutritional benefits.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#product-catalog">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
             {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                priority
                className="rounded-xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
