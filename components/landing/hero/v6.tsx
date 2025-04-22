// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroV6() {
//   return (
//     // when the scren is small the height of the section should be the height of the screen - 60px
//     //when the screen is larger the height of the section should be the height of the screen - 80px
//     <section className="h-[calc(100vh-60px)] w-full bg-SoftRose px-4 md:h-[calc(100vh-80px)]">
//       <div className="container mx-auto px-4">
//         {/* Mobile layout (stacked with overlap) */}
//         <div className="relative flex flex-col items-center md:hidden">
//           <div className="w-full">
//             <div className="relative">
//               <Image
//                 src="/cupcake-hero.jpg?height=600&width=600"
//                 width={600}
//                 height={600}
//                 alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
//                 className="w-full rounded-3xl"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="z-10 mt-[-2rem] w-11/12 rounded-3xl bg-white p-8 shadow-sm">
//             <h1 className="mb-6 text-center font-serif text-4xl text-red-800">
//               Delicious Gluten & Dairy-Free Cupcakes
//             </h1>
//             <p className="mb-8 text-center text-lg text-red-700">
//               Indulge in our heavenly treats without the worry. Perfect for everyone, made with
//               love.
//             </p>
//             <div className="flex justify-center">
//               <Link
//                 href="/collection"
//                 className="rounded-full bg-red-800 px-8 py-3 font-medium text-white transition-colors hover:bg-red-900"
//               >
//                 Browse our collection
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Desktop layout (side by side with overlap) */}
//         <div className="relative hidden md:block">
//           <div className="flex items-center justify-center">
//             <div className="relative z-10 w-[45%]">
//               <div className="mr-[-5%] flex h-[85%] flex-col justify-center rounded-3xl bg-white p-8 shadow-sm">
//                 <h1 className="mb-4 text-center font-serif text-4xl text-red-800 lg:text-5xl">
//                   Delicious Gluten & Dairy-Free Cupcakes
//                 </h1>
//                 <p className="mb-6 text-center text-lg text-red-700 lg:text-xl">
//                   Indulge in our heavenly treats without the worry. Perfect for everyone, made with
//                   love.
//                 </p>
//                 <div className="flex justify-center">
//                   <Link
//                     href="/collection"
//                     className="rounded-full bg-red-800 px-6 py-2.5 font-medium text-white transition-colors hover:bg-red-900 lg:px-8 lg:py-3"
//                   >
//                     Browse our collection
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="w-[55%]">
//               <div className="relative">
//                 <Image
//                   src="/cupcake-hero.jpg?height=600&width=600"
//                   width={600}
//                   height={600}
//                   alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
//                   className="w-full rounded-3xl"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from 'next/image';
import Link from 'next/link';

export default function HeroV6() {
  return (
    <section
      className="flex w-full items-center bg-SoftRose px-4"
      style={{
        height: 'calc(100vh - 80px)',
        maxHeight: 'calc(100vh - 80px)'
      }}
    >
      <div className="container mx-auto flex items-center justify-center px-4">
        {/* Mobile layout (stacked with overlap) */}
        <div className="relative flex w-full flex-col items-center md:hidden">
          <div className="w-full" style={{ maxHeight: '45vh' }}>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/cupcake-hero.jpg?height=600&width=600"
                width={600}
                height={600}
                alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                className="w-full object-cover"
                priority
                style={{ borderRadius: '1.5rem' }}
              />
            </div>
          </div>
          <div className="z-10 mt-[-2rem] w-11/12 rounded-3xl bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-center font-serif text-3xl text-red-800">
              Delicious Gluten & Dairy-Free Cupcakes
            </h1>
            <p className="mb-6 text-center text-base text-red-700">
              Indulge in our heavenly treats without the worry. Perfect for everyone, made with
              love.
            </p>
            <div className="flex justify-center">
              <Link
                href="/collection"
                className="rounded-full bg-red-800 px-6 py-2 font-medium text-white transition-colors hover:bg-red-900"
              >
                Browse our collection
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop layout (side by side with overlap) */}
        <div className="relative hidden w-full md:flex md:items-center">
          <div className="flex w-full items-center justify-center">
            <div className="relative z-10 w-[45%]">
              <div className="mr-[-5%] flex flex-col justify-center rounded-3xl bg-white p-8 shadow-sm">
                <h1 className="mb-4 text-center font-serif text-3xl text-red-800 lg:text-5xl">
                  Delicious Gluten & Dairy-Free Cupcakes
                </h1>
                <p className="mb-6 text-center text-base text-red-700 lg:text-xl">
                  Indulge in our heavenly treats without the worry. Perfect for everyone, made with
                  love.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/collection"
                    className="rounded-full bg-red-800 px-6 py-2 font-medium text-white transition-colors hover:bg-red-900 lg:px-8 lg:py-3"
                  >
                    Browse our collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[55%]" style={{ maxHeight: '60vh' }}>
              <div className="absolute -top-1/2 left-1/2 overflow-hidden rounded-3xl border border-red-500">
                <Image
                  src="/cupcake-hero.jpg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="A golden vanilla cupcake with smooth, swirled white buttercream frosting in sharp focus, surrounded by slightly blurred cupcakes in the background on a white surface."
                  className="w-full object-cover"
                  priority
                  style={{ borderRadius: '1.5rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
