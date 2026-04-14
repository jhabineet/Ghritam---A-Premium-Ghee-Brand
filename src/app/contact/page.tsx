import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16 sm:py-24">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl sm:text-4xl">Get in Touch</CardTitle>
          <CardDescription className="pt-2 text-base">
            If you need any assistance or wish to place a bulk order, contact us at:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="group rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 p-6 transition-colors hover:border-primary hover:bg-primary/10">
            <h3 className="flex items-center justify-center gap-3 font-headline text-2xl font-bold text-primary sm:text-3xl">
              <Phone className="h-7 w-7 transition-transform group-hover:scale-110" />
              <a href="tel:+911234567890">+91 82406 58689</a>
            </h3>
            <p className="mt-2 text-muted-foreground">Call us for direct inquiries</p>
          </div>
          
          <div className="group rounded-lg border bg-secondary/30 p-6 transition-shadow hover:shadow-md">
             <h3 className="flex items-center justify-center gap-3 font-headline text-xl font-bold text-foreground">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:info@ghritam.com" className="hover:underline">ajitjha0502@gmail.com</a>
            </h3>
             <p className="mt-2 text-muted-foreground">Email us for other questions</p>
          </div>
          
          <div className="pt-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
