import Image from 'next/image';

export default function HeroV4() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-SoftRose">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[90%] w-[60%] -translate-y-[5%] rotate-[30deg] transform">
          <Image
            src="/calligraphy-hero.jpg?height=1200&width=800"
            alt="Cupcakes and calligraphy"
            layout="fill"
            objectFit="cover"
            className="rounded-[60%/50%]"
          />
        </div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-8 text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-gradient">Sweet Art</span>
        </h1>
        <p className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-gradient">Where delicious cupcakes meet elegant calligraphy</span>
        </p>
      </div>
    </section>
  );
}
