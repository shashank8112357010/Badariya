"use client";

import Header from "../components/Header";
import RasRasayanProductCard from "../components/RasRasayanProductCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

export default function RasRasayan() {
  const rasRasayanProducts = [
    {
      id: "kamini-vidrawan-ras",
      name: "Badariya Fat Slim Capsules",
      speciality:
        "Enhances vitality and vigor, helps overcome fatigue and weakness",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      id: "swarna-bhasma",
      name: "Badariya Fat Slim Capsules",
      speciality:
        "Pure gold ash preparation for ultimate rejuvenation and longevity",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      id: "makardhwaja-special",
      name: "Badariya Fat Slim Capsules",
      speciality:
        "Traditional mercury-sulfur preparation for enhanced strength and vitality",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
  ];

  const blogPosts = [
    {
      id: "ras-rasayan-science",
      title: "The Ancient Science of Ras Rasayan",
      readTime: "12 mins",
    },
    {
      id: "mercury-processing",
      title: "Traditional Mercury Processing in Ayurveda",
      readTime: "15 mins",
    },
    {
      id: "rejuvenation-therapy",
      title: "Ras Rasayan: The Ultimate Rejuvenation Therapy",
      readTime: "10 mins",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* What is Ras Rasayan Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-[#E1F9E2] rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0B2C0C] mb-8">
                  What is Ras Rasayan ?
                </h2>
                <div className="space-y-6 text-[#0B2C0C]">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Ras Rasayan is the most sophisticated branch of Ayurveda
                    dealing with metallic and mineral preparations. These
                    medicines are prepared through ancient alchemical processes
                    that transform metals and minerals into highly potent
                    therapeutic agents.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Our Ras Rasayan products represent the pinnacle of Ayurvedic
                    pharmaceutical science, offering unparalleled therapeutic
                    benefits for rejuvenation, vitality enhancement, and
                    treatment of chronic conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Ras Rasayan Products Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0B2C0C]">
                Our Ras Rasayan Products
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Discover our premium collection of traditional Ras Rasayan
                medicines, prepared with authentic ancient methods and highest
                quality standards.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {rasRasayanProducts.map((product) => (
                <RasRasayanProductCard
                  key={product.id}
                  name={product.name}
                  speciality={product.speciality}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              ))}
            </div>

            {/* View All Products Button */}
            <div className="text-center">
              <button className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                View All Ras Rasayan Products
              </button>
            </div>
          </div>
        </section>

        {/* More on our Ras Rasayan Products Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                More on our Ras Rasayan Products
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Learn about the traditional science and modern applications of
                Ras Rasayan
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  readTime={post.readTime}
                />
              ))}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-12">
              <button className="bg-[#F98E10] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors">
                Read More About Ras Rasayan
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full px-4 py-16 bg-gradient-to-r from-[#E1F9E2] to-[#F0FDF0]">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C0C] mb-8">
              Why Choose Our Ras Rasayan Products?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Authentic Preparation
                </h4>
                <p className="text-gray-700">
                  Prepared using traditional methods passed down through
                  generations of Ayurvedic masters
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Highest Purity
                </h4>
                <p className="text-gray-700">
                  Each product undergoes rigorous purification processes to
                  ensure maximum safety and efficacy
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Expert Guidance
                </h4>
                <p className="text-gray-700">
                  Prescribed and monitored by experienced Ayurvedic
                  practitioners for optimal results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Image Section */}
        <section className="w-full">
          <div className="h-64 md:h-80 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience the Power of Ras Rasayan
              </h3>
              <p className="text-lg">
                Unlock the secrets of ancient Ayurvedic alchemy for modern
                wellness
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
