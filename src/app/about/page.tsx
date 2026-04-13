import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Ghritam</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ghritam was born from a desire to reconnect with our roots and bring the purest essence of nature to every home. We are a family-run business dedicated to reviving the ancient Indian tradition of ghee-making. Our commitment is to health, purity, and the well-being of our community and cattle.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">Meet Our Team</h2>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => {
              const image = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.id} className="text-center">
                  <CardContent className="p-6">
                    <div className="relative mx-auto h-32 w-32">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={`Photo of ${member.name}`}
                          fill
                          className="rounded-full object-cover"
                           data-ai-hint={image.imageHint}
                           sizes="128px"
                        />
                      )}
                    </div>
                    <h3 className="mt-6 font-headline text-lg font-semibold leading-7 tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm leading-6 text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
