import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { whyChooseItems } from '@/lib/data';

export function WhyChoose() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">Why Choose Ghritam?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference that purity, tradition, and quality make.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-1">
            {whyChooseItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-left font-headline text-xl hover:no-underline">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-6 w-6 text-primary" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12 text-base text-muted-foreground">{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
