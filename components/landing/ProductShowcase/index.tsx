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
import { Product } from '@/lib/shopify/types';

export default function ProductShowcase({ products }: { products: Product[] }) {
  // Collections that start with `hidden-*` are hidden from the search page.

  return (
    <>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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
    </>
  );
}
