import Link from "next/link";

export default function Header() {
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
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              Shop All
            </Link>
            <Link
              href="/health-solutions"
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              Health Solutions
            </Link>
            <Link
              href="/ras-rasayan"
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              Ras Rasayan
            </Link>
            <Link
              href="/blog"
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/consult"
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              Consult Vaidhya
            </Link>
            <Link
              href="/about"
              className="text-sm md:text-base font-semibold hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
