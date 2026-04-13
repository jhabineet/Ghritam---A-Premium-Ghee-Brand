import { generateHeroImage } from '@/ai/flows/generate-hero-image';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export async function HeroSection() {
  const { imageDataUri } = await generateHeroImage({});

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto min-h-[calc(100vh-4rem)] px-4">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="z-10 max-w-xl space-y-6 text-center md:text-left">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ghritam
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
             {imageDataUri && (
              <Image
                src={imageDataUri}
                alt="A realistic rural Indian village scene with a bowl of golden ghee"
                fill
                priority
                className="rounded-lg object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
