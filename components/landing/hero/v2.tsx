import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/button';

export default function HeroV2() {
  return (
    <section className="w-full bg-[#ffe7e7] py-4 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-DeepRed sm:text-5xl xl:text-6xl/none">
                Delicious Gluten & Dairy-Free Cupcakes
              </h1>
              <p className="max-w-[600px] text-zinc-700 dark:text-zinc-400 md:text-xl">
                Indulge in our heavenly treats without the worry. Perfect for everyone, made with
                love.
              </p>
            </div>
            <Link href="/search" passHref>
              <Button size="lg" className="bg-DeepRed text-lg text-white">
                See All Products
              </Button>
            </Link>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                width={600}
                height={600}
                alt="Assortment of colorful gluten and dairy-free cupcakes"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
