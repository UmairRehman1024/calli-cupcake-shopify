import About from './about';
import Contact from './contact';
import Hero from './hero';
import ImageCarouselHomePage from './image-carousel';
import ImageGrid from './image-grid';
import Services from './services';

export default function LandingPage() {
  return (
    <div className="bg-SoftRose flex min-h-screen flex-col items-center">
      <Hero />
      <Services />

      <ImageCarouselHomePage />
      <ImageGrid />
      <About />
      <Contact />
    </div>
  );
}
