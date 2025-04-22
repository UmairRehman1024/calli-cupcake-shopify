import Image from 'next/image';
import Link from 'next/link';

export default function HeroV7() {
  return (
    <section className="w-full max-w-7xl bg-SoftRose px-4 pb-6 pt-6 md:pb-9 md:pt-9">
      <div className="container mx-auto px-4">
        {/* Mobile layout (stacked with overlap) */}
        <div className="relative flex flex-col items-center md:hidden">
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                fill
                alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                className="object-cover"
                priority
                style={{ borderRadius: '1.5rem' }}
              />
            </div>
          </div>
          <div className="z-10 mt-[-2rem] w-11/12 rounded-3xl bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-center font-serif text-3xl text-red-800">
              Delicious Gluten & Dairy-Free Cupcakes
            </h1>
            <p className="mb-6 text-center text-base text-red-700">
              Indulge in our heavenly treats without the worry. Perfect for everyone, made with
              love.
            </p>
            <div className="flex justify-center">
              <Link
                href="/collection"
                className="rounded-full bg-red-800 px-6 py-2 font-medium text-white transition-colors hover:bg-red-900"
              >
                Browse our collection
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop layout (side by side with overlap) */}
        <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-0">
          <div className="relative order-2" style={{ paddingBottom: '90%' }}>
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                fill
                alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                className="object-cover"
                priority
                style={{ borderRadius: '1.5rem' }}
              />
            </div>
          </div>
          <div className="z-10 order-1 pr-[-5%]">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-sm">
              <h1 className="mb-4 text-center font-serif text-3xl text-red-800 lg:text-5xl">
                Delicious Gluten & Dairy-Free Cupcakes
              </h1>
              <p className="mb-6 text-center text-base text-red-700 lg:text-xl">
                Indulge in our heavenly treats without the worry. Perfect for everyone, made with
                love.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/collection"
                  className="rounded-full bg-red-800 px-6 py-2 font-medium text-white transition-colors hover:bg-red-900 lg:px-8 lg:py-3"
                >
                  Browse our collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
