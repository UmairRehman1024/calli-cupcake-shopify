import { ArrowRight, CakeIcon, PenToolIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroV3() {
  return (
    <section className="relative w-full overflow-hidden bg-SoftRose py-12 md:py-24">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-DeepRed sm:text-5xl xl:text-6xl/none">
              Sweet Treats & Elegant Scripts
            </h1>
            <p className="mx-auto max-w-[600px] text-zinc-700 md:text-xl">
              Indulge in our gluten & dairy-free cupcakes and cherish our hand-written calligraphy
              letters.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-white p-3 shadow-md">
                <CakeIcon className="h-8 w-8 text-DeepRed" />
              </div>
              <span className="text-sm font-medium text-zinc-700">Cupcakes</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-white p-3 shadow-md">
                <PenToolIcon className="h-8 w-8 text-DeepRed" />
              </div>
              <span className="text-sm font-medium text-zinc-700">Calligraphy</span>
            </div>
          </div>
          <Link
            href="/search"
            className="hover:bg-DeepRed/90 group inline-flex items-center justify-center rounded-md bg-DeepRed px-8 py-3 text-lg font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-DeepRed"
          >
            See All Products
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-xl bg-red-500">
              <Image
                src="/cupcake-hero.jpg?height=400&width=400"
                width={400}
                height={400}
                alt="Assortment of colorful gluten and dairy-free cupcakes"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-xl">
              <Image
                src="/calligraphy-hero.jpg?height=400&width=400"
                width={400}
                height={400}
                alt="Beautiful hand-written calligraphy letter"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-SoftRose to-transparent"></div>
    </section>
  );
}
