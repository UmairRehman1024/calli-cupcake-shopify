import { Instagram } from 'lucide-react';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <section className="flex w-full items-center justify-center px-4 py-12 md:py-24">
      <div className="mx-auto max-w-xl space-y-8 text-center">
        <h2 className="text-DeepRed font-serif text-3xl md:text-4xl">Ready to Order?</h2>
        <p className="text-lg text-zinc-700">
          Follow us on Instagram for updates and drop us a message to place your order!
        </p>
        <Button size="lg" className="bg-DeepRed text-white">
          <Instagram className="mr-2 h-5 w-5" />
          Follow Us on Instagram
        </Button>
      </div>
    </section>
  );
}
