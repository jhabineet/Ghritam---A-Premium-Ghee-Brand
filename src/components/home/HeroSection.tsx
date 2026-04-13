import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto min-h-[calc(100vh-4rem)] px-4">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="z-10 max-w-xl space-y-6 text-center md:text-left">
            <h1 className="font-headline text-7xl font-bold tracking-tight sm:text-9xl lg:text-[10rem] text-primary -rotate-3 drop-shadow-lg">
              G<span className="underline decoration-wavy decoration-primary/50 decoration-4 underline-offset-8">hritam</span>
            </h1>
            <p className="font-headline text-2xl text-muted-foreground sm:text-3xl">
              Premium Pure Ghee
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Made with traditional bilona process, the ancient art of handmade ghee using A2 cow milk.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact">Contact for Booking</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#product-catalog">
                  View Product Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-full w-full min-h-[300px] md:min-h-[500px]">
             {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                priority
                className="rounded-lg object-cover shadow-2xl"
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
