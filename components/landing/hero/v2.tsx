import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/button';

export default function HeroV2() {
  return (
    <section className="w-full bg-[#ffe7e7] md:py-4 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-DeepRed sm:text-4xl md:text-5xl xl:text-6xl">
                Delicious Gluten & Dairy-Free Cupcakes
              </h1>
              <p className="mx-auto max-w-[600px] text-base text-zinc-700 dark:text-zinc-400 md:text-lg lg:mx-0 lg:text-xl">
                Indulge in our heavenly treats without the worry. Perfect for everyone, made with
                love.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link href="/search" passHref>
                <Button
                  size="lg"
                  className="bg-DeepRed text-base text-white transition-colors hover:bg-red-700 md:text-lg"
                >
                  See All Products
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none">
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                width={600}
                height={600}
                alt="Assortment of colorful gluten and dairy-free cupcakes"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
