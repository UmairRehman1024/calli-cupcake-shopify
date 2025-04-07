import { Suspense } from 'react';
import About from './about';
import Hero from './hero';
import ProductShowcaseSkeleton from './ProductShowcase/loading-skeleton';
import ProductShowcaseWrapper from './ProductShowcase/wrapper';
import WhyChooseUs from './why-choose-us';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-SoftRose">
      <Hero />
      <WhyChooseUs />
      <Suspense fallback={<ProductShowcaseSkeleton />}>
        <ProductShowcaseWrapper />
      </Suspense>
      <About />
    </div>
  );
}

// export default function LandingPage() {
//   return (
//     <div className="flex min-h-screen flex-col items-center bg-SoftRose">
//       <Hero />
//       <WhyChooseUs />
//       <Suspense fallback={null}>
//         <ProductShowcaseWrapper />
//       </Suspense>
//       {/* <Services />

//       <ImageCarouselHomePage />
//       <ImageGrid /> */}
//       <About />
//       {/* <Contact /> */}
//       {/* <ProductShowcase /> */}
//     </div>
//   );
// }
