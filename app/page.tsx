import LandingPage from '@/components/landing/landing-page';
import Footer from '@/components/layout/footer';

export const metadata = {
  description:
    'Indulge in delicious gluten-free & dairy-free cupcakes and beautiful, handwritten calligraphy. The Calligraphy Cupcake: Sweet treats and personalized art!',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      {/* //   <ThreeItemGrid />
    //   <Carousel />
    //   <Footer /> */}
      <LandingPage />
      <Footer />
    </>
  );
}
// Option 1 (Focus on both products):

// Indulge in delicious gluten-free & dairy-free cupcakes and beautiful, handwritten calligraphy. The Calligraphy Cupcake: Sweet treats and personalized art!

// Option 2 (Focus on cupcakes first):

//     The Calligraphy Cupcake offers delectable gluten-free and dairy-free cupcakes for any occasion. Plus, add a personal touch with our custom calligraphy services!

// Option 3 (Focus on Calligraphy first):

//     Looking for unique, handwritten calligraphy? The Calligraphy Cupcake pairs beautiful lettering with delicious gluten-free & dairy-free cupcakes. Order today!

// Option 4 (Short and sweet):

//     Gluten-free, dairy-free cupcakes & custom calligraphy. The Calligraphy Cupcake: Sweeten your day with art and delicious treats!
