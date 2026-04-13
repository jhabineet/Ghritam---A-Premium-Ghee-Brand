import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const ItalicizedText = ({ text }: { text: string }) => {
  if (!text) return null;

  const parts = text.replace(/^"|"$/g, '').split(/(?=\*)|(?<=\*)/g);
  
  return (
    <p className="font-headline text-2xl italic leading-relaxed text-foreground/80 md:text-3xl">
      &ldquo;
      {parts.map((part, index) => {
        if (part === '*') {
          return null;
        }
        const isEm = parts[index - 1] === '*' && parts[index + 1] === '*';
        return isEm ? <em key={index} className="not-italic text-foreground">{part}</em> : part;
      })}
      &rdquo;
    </p>
  );
};


export function HighlightSection() {
  const highlightText = '"*Purity at its peak* – crafted with tradition and care to deliver the finest quality ghee"';
  const highlightImage = PlaceHolderImages.find(p => p.id === 'highlight-ghee-jar');

  return (
    <section className="overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full">
            {highlightImage && (
              <Image
                src={highlightImage.imageUrl}
                alt={highlightImage.description}
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={highlightImage.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
              The Essence of Purity
            </h2>
            <ItalicizedText text={highlightText} />
          </div>
        </div>
      </div>
    </section>
  );
}
