import About from './about';
import Contact from './contact';
import Hero from './hero';
import ImageCarouselHomePage from './image-carousel';
import ImageGrid from './image-grid';
import Services from './services';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center" style={{ backgroundColor: '#FFE7E7' }}>
      <Hero />
      <Services />

      <ImageCarouselHomePage />
      <ImageGrid />
      <About />
      <Contact />
    </div>
  );
}
