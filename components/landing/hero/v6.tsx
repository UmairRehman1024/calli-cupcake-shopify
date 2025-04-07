import Image from 'next/image';
import Link from 'next/link';

export default function HeroV6() {
  return (
    <section className="w-full bg-SoftRose py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Mobile layout (stacked with overlap) */}
        <div className="relative flex flex-col items-center md:hidden">
          <div className="w-full">
            <div className="relative">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                width={600}
                height={600}
                alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                className="w-full rounded-3xl"
                priority
              />
              {/* <div className="absolute right-4 top-1/4 rotate-12 transform">
                <p className="text-3xl font-bold tracking-wider text-pink-500">BROWNIEGOD</p>
              </div> */}
            </div>
          </div>

          <div className="z-10 mt-[-2rem] w-11/12 rounded-3xl bg-white p-8 shadow-sm">
            <h1 className="mb-6 text-center font-serif text-4xl text-red-800">Easter is coming!</h1>
            <p className="mb-8 text-center text-lg text-red-700">
              Set your alarms, our Easter collection will be launching this Thursday at 4pm! ⏰
            </p>
            <div className="flex justify-center">
              <Link
                href="/collection"
                className="rounded-full bg-red-800 px-8 py-3 font-medium text-white transition-colors hover:bg-red-900"
              >
                Browse the collection
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop layout (side by side with overlap) */}
        <div className="relative hidden md:block">
          <div className="flex items-center justify-center">
            <div className="relative z-10 w-[45%]">
              <div className="mr-[-5%] flex h-[85%] flex-col justify-center rounded-3xl bg-white p-8 shadow-sm">
                <h1 className="mb-4 text-center font-serif text-4xl text-red-800 lg:text-5xl">
                  Easter is coming!
                </h1>
                <p className="mb-6 text-center text-lg text-red-700 lg:text-xl">
                  Set your alarms, our Easter collection will be launching this Thursday at 4pm! ⏰
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/collection"
                    className="rounded-full bg-red-800 px-6 py-2.5 font-medium text-white transition-colors hover:bg-red-900 lg:px-8 lg:py-3"
                  >
                    Browse the collection
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[55%]">
              <div className="relative">
                <Image
                  src="/cupcake-hero.jpg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                  className="w-full rounded-3xl"
                  priority
                />
                {/* <div className="absolute right-8 top-1/4 rotate-12 transform">
                  <p className="text-4xl font-bold tracking-wider text-pink-500">BROWNIEGOD</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
