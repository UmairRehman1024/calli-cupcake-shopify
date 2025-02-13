import { Gift, Heart, PenTool } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function Services() {
  return (
    <section className="flex w-full flex-col items-center px-4 py-12 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-DeepRed mb-12 text-center font-serif text-3xl md:text-4xl">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
              <div className="text-DeepRed h-12 w-12">
                <Gift className="h-12 w-12" />
              </div>
              <h3 className="text-DeepRed font-serif text-xl">Cupcakes</h3>
              <p className="text-zinc-600">
                Delicious gluten and dairy-free cupcakes made with love
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
              <div className="text-DeepRed h-12 w-12">
                <PenTool className="h-12 w-12" />
              </div>
              <h3 className="text-DeepRed font-serif text-xl">Calligraphy</h3>
              <p className="text-zinc-600">Beautiful handwritten letters for any occasion</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
              <div className="text-DeepRed h-12 w-12">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-DeepRed font-serif text-xl">The Perfect Pair</h3>
              <p className="text-zinc-600">Combine both for the ultimate personal touch</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
