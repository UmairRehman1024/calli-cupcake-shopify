import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/button';

export default function HeroV1() {
  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:py-12 lg:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
        <Image
          src="/logo.png?height=200&width=200"
          alt="The Calligraphy Cupcake Logo"
          width={200}
          height={200}
          className="mb-8 text-DeepRed"
        />
        {/* <h1 className="font-serif text-4xl tracking-tight text-DeepRed md:text-6xl">
          The Calligraphy Cupcake
        </h1> */}
        <p className="max-w-[600px] text-lg text-zinc-700 md:text-xl">
          Where delicious gluten and dairy-free cupcakes meet the timeless charm of handwritten
          calligraphy letters.
        </p>
        <Link href="/search" passHref>
          <Button size="lg" className="bg-DeepRed text-lg text-white">
            See All Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
