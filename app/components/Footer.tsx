import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3A643B] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BADARIYA</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              Dedicated to enhancing health and wellness through authentic
              Ayurvedic principles since 1998.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-200">
                <strong>Office Hours:</strong>
                <br />
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/health-solutions"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Health Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/ras-rasayan"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Ras Rasayan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/mubex-pain-gold"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Mubex Pain Gold
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mubex-pain-capsule"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Mubex Pain Capsule
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kamini-vidrawan-ras"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Kamini Vidrawan Ras
                </Link>
              </li>
              <li>
                <Link
                  href="/consult"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Consult Vaidhya
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <p>
                <strong>Phone:</strong>
                <br />
                +91 9238481760
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                badariya.corp@gmail.com
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                Kalpi, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200">
              © 2024 Badariya Pharma. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-200 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
