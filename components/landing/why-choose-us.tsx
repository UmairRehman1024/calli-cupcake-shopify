export default function WhyChooseUs() {
  return (
    <div className="w-full bg-SoftRose px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-[#9C2A2A] md:text-4xl">
            Why Choose The Calligraphy Cupcake?
          </h2>
        </div>

        {/* Three reasons in cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#9C2A2A]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mb-4 font-serif text-2xl text-[#9C2A2A]">Celiac Friendly</h3>
            <p className="text-[#9C2A2A]/80">
              Our kitchen is 100% gluten and dairy-free, ensuring safe treats for everyone with
              celiac disease or food sensitivities. No cross-contamination, just pure enjoyment.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#9C2A2A]"
              >
                <path d="M3 21c3 0 7-1 7-7V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V14c0 6 3 7 7 7z" />
                <path d="M13 21c3 0 7-1 7-7V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V14c0 6 3 7 7 7z" />
              </svg>
            </div>
            <h3 className="mb-4 font-serif text-2xl text-[#9C2A2A]">Locally Crafted</h3>
            <p className="text-[#9C2A2A]/80">
              Support your community by choosing our family-owned business. We source ingredients
              locally and create each cupcake and calligraphy piece with personal attention.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#9C2A2A]"
              >
                <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01" />
                <path d="M15 9h.01" />
              </svg>
            </div>
            <h3 className="mb-4 font-serif text-2xl text-[#9C2A2A]">Taste Amazing</h3>
            <p className="text-[#9C2A2A]/80">
              We never compromise on flavor. Our alternative ingredients are carefully selected to
              create treats that everyone will love—you won't believe they're gluten and dairy-free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
