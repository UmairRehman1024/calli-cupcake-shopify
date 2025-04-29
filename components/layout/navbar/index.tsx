import LogoIcon from '@/components/icons/logo';
import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;
export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  return (
    <nav className="relative flex items-center justify-center bg-SoftRose p-4 lg:px-6">
      <div className="relative flex w-full max-w-7xl items-center justify-between">
        {/* Left section - Mobile menu on small screens, Logo on medium+ screens */}
        <div className="flex items-center md:w-1/3">
          {/* Mobile Menu - Only visible on small screens */}
          <div className="md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>

          {/* Logo - Left on medium+ screens */}
          <div className="hidden md:block">
            <Link href="/" prefetch={true} className="flex items-center justify-center">
              <LogoIcon className="h-16 w-16" />
              {/* <div className="ml-2 flex-none font-serif text-sm font-medium text-DeepRed md:hidden lg:block">
                {SITE_NAME}
              </div> */}
            </Link>
          </div>
        </div>

        {/* Center section - Logo on small screens, Menu on medium+ screens */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:static md:left-auto md:top-auto md:flex md:w-1/3 md:translate-x-0 md:translate-y-0 md:transform-none md:justify-center">
          {/* Logo - Centered on small screens only */}
          <div className="md:hidden">
            <Link href="/" prefetch={true} className="flex items-center justify-center">
              <LogoIcon className="h-16 w-16" />
            </Link>
          </div>

          {/* Menu - Centered on medium+ screens */}
          {menu.length ? (
            <ul className="hidden items-center gap-6 text-sm md:flex">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-DeepRed underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Right section - Cart always on right */}
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
