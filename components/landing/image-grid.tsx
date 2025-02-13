import Image from "next/image";

export default function ImageGrid() {
  return (
    <section className="w-full py-12 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-serif text-center mb-8"
          style={{ color: "#5F1006" }}
        >
          Our Delightful Creations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(16)].map((_, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <Image
                src={`/placeholder.svg?height=500&width=500&text=Cupcake+${
                  index + 1
                }`}
                alt={`Cupcake ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
