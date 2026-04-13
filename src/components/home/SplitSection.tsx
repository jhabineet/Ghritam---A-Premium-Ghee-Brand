import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SplitSection() {
    const image = PlaceHolderImages.find(p => p.id === 'split-section-image');

    return (
        <section className="bg-card py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="relative aspect-[4/3] w-full">
                        {image && (
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="rounded-lg object-cover shadow-lg"
                            data-ai-hint={image.imageHint}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        )}
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
                            Rooted in Tradition, Crafted with Purity
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            At Ghritam, we honor the ancient wisdom of Ayurveda. Our ghee is a tribute to the time-honored Bilona process, a meticulous method passed down through generations.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We begin with the finest A2 milk from free-roaming Gir cows, turning it into curd, which is then hand-churned to separate the butter. This butter is slowly simmered over a low flame to create pure, golden, and aromatic ghee. This process ensures that every jar of Ghritam is rich in nutrients and authentic flavor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
