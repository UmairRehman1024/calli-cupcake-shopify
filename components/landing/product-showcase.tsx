import { ArrowRight, CakeIcon, PenToolIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section className="w-full bg-SoftRose py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-DeepRed sm:text-4xl md:text-5xl">
              Explore Our Delightful Collection
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-700 md:text-xl">
              From mouthwatering cupcakes to elegant calligraphy, discover our full range of sweet
              creations and beautiful scripts.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-12 sm:space-y-0">
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-white p-4 shadow-md">
                <CakeIcon className="h-10 w-10 text-DeepRed" />
              </div>
              <span className="text-lg font-medium text-zinc-700">Cupcakes</span>
            </div>
            <div className="hidden h-20 w-px bg-DeepRed opacity-20 sm:block"></div>
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-white p-4 shadow-md">
                <PenToolIcon className="h-10 w-10 text-DeepRed" />
              </div>
              <span className="text-lg font-medium text-zinc-700">Calligraphy</span>
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
      </div>
    </section>
  );
}
