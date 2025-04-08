'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Product } from '@/lib/shopify/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase({ products }: { products: Product[] }) {
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
              <Link href={`/cupcakes/${product.handle}`} className="group block h-full">
                <div className="h-full overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-56">
                    <Image
                      src={product.images[0]?.url || '/placeholder.svg'}
                      alt={product.images[0]?.altText || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex h-20 items-center justify-between p-4">
                    <h3 className="line-clamp-2 font-serif text-xl font-medium text-[#9C2B2B] transition-colors group-hover:text-[#7a2222]">
                      {product.title}
                    </h3>
                    <ArrowUpRight
                      className="h-6 w-6 flex-shrink-0 text-[#9C2B2B] transition-colors group-hover:text-[#7a2222]"
                      strokeWidth={2}
                    />
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
    </>
  );
}
