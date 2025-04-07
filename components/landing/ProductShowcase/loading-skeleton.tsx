export default function ProductShowcaseSkeleton() {
  // Create an array of 4 items to represent loading products
  const skeletonItems = Array.from({ length: 4 }, (_, i) => i);

  return (
    <>
      <div className="w-full">
        <div className="-ml-4 flex overflow-hidden">
          {skeletonItems.map((item) => (
            <div key={item} className="w-full flex-shrink-0 pl-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="h-full overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative h-56 animate-pulse bg-gray-200"></div>
                <div className="flex items-center justify-between p-4">
                  <div className="h-7 w-32 animate-pulse rounded-md bg-gray-200"></div>
                  <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-10 w-10 animate-pulse rounded-full border border-[#9C2B2B] bg-white"></div>
          <div className="h-10 w-10 animate-pulse rounded-full border border-[#9C2B2B] bg-white"></div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="h-14 w-48 animate-pulse rounded-full bg-gray-200"></div>
      </div>
    </>
  );
}
