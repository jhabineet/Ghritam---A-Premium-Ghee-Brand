import { Suspense } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightSection } from '@/components/home/HighlightSection';
import { ProductCatalog } from '@/components/home/ProductCatalog';
import { SplitSection } from '@/components/home/SplitSection';
import { WhyChoose } from '@/components/home/WhyChoose';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSkeleton = () => (
  <div className="container mx-auto px-4 py-16 md:py-24">
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <Skeleton className="h-16 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-12 w-48" />
        </div>
      </div>
      <Skeleton className="aspect-square h-auto w-full rounded-lg" />
    </div>
  </div>
);

const HighlightSkeleton = () => (
  <div className="py-16 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Skeleton className="aspect-[4/3] w-full rounded-lg" />
        <div className="space-y-4 text-center md:text-left">
          <Skeleton className="mx-auto h-12 w-3/4 md:mx-0" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>
      </div>
    </div>
  </div>
);


export default function Home() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <SplitSection />
      <Suspense fallback={<HighlightSkeleton />}>
        <HighlightSection />
      </Suspense>
      <ProductCatalog />
      <WhyChoose />
    </>
  );
}
