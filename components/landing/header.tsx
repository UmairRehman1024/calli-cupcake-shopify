import Link from "next/link";
import Image from "next/image";

import { Cart } from "../../../components/cart";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="w-full bg-[#FFE7E7] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="The Calligraphy Cupcake Logo"
                width={60}
                height={60}
                className="h-14 w-auto sm:h-16"
                priority
              />
            </Link>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/products"
                    className="text-[#5F1006] hover:underline"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/cupcakes"
                    className="text-[#5F1006] hover:underline"
                  >
                    Cupcakes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/calligraphy"
                    className="text-[#5F1006] hover:underline"
                  >
                    Calligraphy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
