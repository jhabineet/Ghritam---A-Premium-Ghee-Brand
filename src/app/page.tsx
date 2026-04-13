import { HeroSection } from '@/components/home/HeroSection';
import { HighlightSection } from '@/components/home/HighlightSection';
import { ProductCatalog } from '@/components/home/ProductCatalog';
import { SplitSection } from '@/components/home/SplitSection';
import { WhyChoose } from '@/components/home/WhyChoose';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SplitSection />
      <HighlightSection />
      <ProductCatalog />
      <WhyChoose />
    </>
  );
}
