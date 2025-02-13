import LandingPage from '@/components/landing/landing-page';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    // <>
    //   <ThreeItemGrid />
    //   <Carousel />
    //   <Footer />
    // </>
    <LandingPage />
  );
}
