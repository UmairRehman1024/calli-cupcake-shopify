import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="w-full px-4 py-12 md:py-24 bg-white/50 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          className="text-3xl md:text-4xl font-serif mb-8"
          style={{ color: "#5F1006" }}
        >
          About Us
        </h2>
        <p className="text-lg text-zinc-700">
          At The Calligraphy Cupcake, we believe in making every moment special.
          Our cupcakes are crafted with care, ensuring they&apos;re both gluten
          and dairy-free without compromising on taste. Each handwritten letter
          is created with attention to detail, making your message truly unique.
        </p>
        <div className="flex items-center justify-center gap-2 text-zinc-700">
          <MapPin className="h-5 w-5" />
          <span>Based in Manchester</span>
        </div>
      </div>
    </section>
  );
}
