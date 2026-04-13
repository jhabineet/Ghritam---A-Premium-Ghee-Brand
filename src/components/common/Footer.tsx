import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-bold text-foreground">Ghritam</h3>
            <p className="mt-2 text-muted-foreground">Premium Pure Ghee</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground">Address</h4>
            <address className="mt-2 not-italic text-muted-foreground">
              49, Gandhi Sarak,
              <br />
              Rishra, Hooghly,
              <br />
              Pin 712248
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Navigate</h4>
            <ul className="mt-2 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="mt-2 flex justify-center gap-2 md:justify-start">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
             <div className="mt-4">
                <h4 className="font-semibold text-foreground">Contact</h4>
                <a href="tel:+911234567890" className="mt-2 block text-muted-foreground transition-colors hover:text-primary">
                  +91 12345 67890
                </a>
                <a href="mailto:info@ghritam.com" className="mt-1 block text-muted-foreground transition-colors hover:text-primary">
                  info@ghritam.com
                </a>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ghritam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
