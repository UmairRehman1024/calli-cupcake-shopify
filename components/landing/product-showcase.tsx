import { ArrowRight, CakeIcon, PenToolIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section className="w-full bg-SoftRose py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center sm:space-y-8 md:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-DeepRed sm:text-3xl md:text-4xl lg:text-5xl">
              Explore Our Delightful Collection
            </h2>
            <p className="mx-auto max-w-[700px] text-sm text-zinc-700 sm:text-base md:text-lg lg:text-xl">
              From mouthwatering cupcakes to elegant calligraphy, discover our full range of sweet
              creations and beautiful scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:flex md:items-center md:justify-center md:space-x-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-white p-3 shadow-md sm:p-4">
                <CakeIcon className="h-8 w-8 text-DeepRed sm:h-10 sm:w-10" />
              </div>
              <span className="text-base font-medium text-zinc-700 sm:text-lg">Cupcakes</span>
            </div>

            <div className="hidden h-20 w-px bg-DeepRed opacity-20 md:block"></div>

            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-white p-3 shadow-md sm:p-4">
                <PenToolIcon className="h-8 w-8 text-DeepRed sm:h-10 sm:w-10" />
              </div>
              <span className="text-base font-medium text-zinc-700 sm:text-lg">Calligraphy</span>
            </div>
          </div>

          <Link
            href="/search"
            className="hover:bg-DeepRed/90 group inline-flex items-center justify-center rounded-md bg-DeepRed px-6 py-2 text-base font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-DeepRed sm:px-8 sm:py-3 sm:text-lg"
          >
            See All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
