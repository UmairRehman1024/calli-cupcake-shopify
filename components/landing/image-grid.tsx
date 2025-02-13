import Image from 'next/image';

export default function ImageGrid() {
  return (
    <section className="w-full bg-white/50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-DeepRed mb-8 text-center font-serif text-3xl md:text-4xl">
          Our Delightful Creations
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=500&width=500&text=Cupcake+${index + 1}`}
                alt={`Cupcake ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
