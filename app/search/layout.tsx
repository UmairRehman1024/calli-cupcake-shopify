import Footer from 'components/layout/footer';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 bg-SoftRose px-4 pb-4 text-black dark:text-white md:flex-row">
        {/* <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div> */}
        <div className="order-last min-h-screen w-full px-8 md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        {/* <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div> */}
      </div>
      <Footer />
    </>
  );
}
