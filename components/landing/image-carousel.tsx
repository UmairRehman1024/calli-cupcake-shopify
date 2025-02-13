import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';

export default function ImageCarouselHomePage() {
  return (
    <section className="w-full bg-white/50 py-12">
      <h2 className="mb-8 text-center font-serif text-3xl md:text-4xl" style={{ color: '#5F1006' }}>
        Our Delightful Creations
      </h2>
      <Carousel className="w-full">
        <CarouselContent>
          {[...Array(5)].map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={`/placeholder.svg?height=1080&width=1920&text=Cupcake+${index + 1}`}
                  alt={`Cupcake ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <CarouselPrevious className="relative" />
          <CarouselNext className="relative" />
        </div>
      </Carousel>
    </section>
  );
}
