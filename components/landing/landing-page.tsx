import About from './about';
import Hero from './hero';
import ImageCarouselHomePage from './image-carousel';
import ImageGrid from './image-grid';
import ProductShowcase from './product-showcase';
import Services from './services';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-SoftRose">
      <Hero />
      <Services />

      <ImageCarouselHomePage />
      <ImageGrid />
      <About />
      {/* <Contact /> */}
      <ProductShowcase />
    </div>
  );
}
