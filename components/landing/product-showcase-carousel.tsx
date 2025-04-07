'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { getCollectionProducts } from '@/lib/shopify';

export default async function ProductShowcase() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <section className="w-full bg-[#FFF0F0] py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#9C2B2B] md:text-5xl">
            Our Signature Cupcakes
          </h2>
          <p className="max-w-2xl text-[#9C2B2B]">
            Handcrafted with love and care, our gluten and dairy-free cupcakes are perfect for any
            occasion.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {carouselProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link href={`/cupcakes/${product.handle}`} className="group block">
                  <div className="h-full overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="relative h-56">
                      <Image
                        src={product.images[0]?.url || '/placeholder.svg'}
                        alt={product.images[0]?.altText || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <h3 className="font-serif text-xl text-[#9C2B2B] transition-colors group-hover:text-[#7a2222]">
                        {product.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-[#9C2B2B] opacity-70 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 transform-none rounded-full border-[#9C2B2B] bg-white text-[#9C2B2B] hover:bg-[#9C2B2B] hover:text-white" />
            <CarouselNext className="static translate-y-0 transform-none rounded-full border-[#9C2B2B] bg-white text-[#9C2B2B] hover:bg-[#9C2B2B] hover:text-white" />
          </div>
        </Carousel>

        <div className="mt-12 flex justify-center">
          <Link href="/cupcakes">
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-full border-[#9C2B2B] px-8 py-6 text-lg text-[#9C2B2B] hover:bg-[#9C2B2B] hover:text-white"
            >
              View All Cupcakes
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
