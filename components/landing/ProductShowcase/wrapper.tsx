import { getCollectionProducts } from '@/lib/shopify';
import ProductShowcase from '.';

export default async function ProductShowcaseWrapper() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  return (
    <section className="w-full bg-[#FFF0F0] py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#9C2B2B] md:text-5xl">
            Our Signature Cupcakes
          </h2>
          <p className="max-w-2xl text-[#9C2B2B]">
            Handcrafted with love and care, our gluten and dairy-free cupcakes are perfect for any
            occasion.
          </p>
        </div>
        <ProductShowcase products={products} />;
      </div>
    </section>
  );
}
