"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="bg-[#3A643B] text-white text-center py-4 px-4">
        <p className="text-sm md:text-base font-semibold">
          Take the First Step - Consult our Ayurvedacharya
        </p>
      </div>

      {/* Brand name */}
      <div className="bg-[#FFF8F0] text-center py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#116E2B]">
          BADARIYA
        </h1>
      </div>

      {/* Navigation */}
      <nav className="bg-[#3A643B] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4">
            <Link
              href="/shop"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/shop" ? "text-[#55E158]" : "text-white"
              }`}
            >
              Shop All
            </Link>
            <Link
              href="/health-solutions"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/health-solutions"
                  ? "text-[#55E158]"
                  : "text-white"
              }`}
            >
              Health Solutions
            </Link>
            <Link
              href="/ras-rasayan"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/ras-rasayan" ? "text-[#55E158]" : "text-white"
              }`}
            >
              Ras Rasayan
            </Link>
            <Link
              href="/blog"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/blog" ? "text-[#55E158]" : "text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/consult"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/consult" ? "text-[#55E158]" : "text-white"
              }`}
            >
              Consult Vaidhya
            </Link>
            <Link
              href="/about"
              className={`text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap ${
                pathname === "/about" ? "text-[#55E158]" : "text-white"
              }`}
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
