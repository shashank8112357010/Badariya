"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import ProductInfo from "../../components/ProductInfo";
import ProductTabs from "../../components/ProductTabs";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import { products, blogPosts } from "../../data/dummyData";

// Get product data from dummy data
const getProductData = (slug: string) => {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  return {
    name: product.name,
    rating: product.rating,
    images: product.images,
    options: product.options,
    tabs: [
      {
        id: "how-to-consume",
        title: "How to consume?",
        content: (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-black mb-4">
              Dosage Instructions
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.howToUse}
            </p>

            <h4 className="text-xl font-semibold text-black mb-4">
              Best Time to Take
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Morning and evening, preferably 30 minutes after meals for optimal
              absorption.
            </p>

            <h4 className="text-xl font-semibold text-black mb-4">Duration</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              For best results, continue for 3-6 months or as directed by your
              Ayurvedic practitioner.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Consult with our Ayurvedacharya for
                personalized dosage recommendations based on your constitution
                and health condition.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "ingredients",
        title: "Product Key Ingredients",
        content: (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-black mb-4">
              Key Ayurvedic Ingredients
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">
                    {ingredient}
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Traditional Ayurvedic ingredient known for its therapeutic
                    properties.
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
              <p className="text-sm text-green-800">
                All ingredients are sourced from certified organic farms and
                processed using traditional Ayurvedic methods.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "benefits",
        title: "Benefits",
        content: (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-black mb-4">
              Health Benefits
            </h4>

            <div className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black">{benefit}</h5>
                    <p className="text-gray-700">
                      Supports overall health and wellness through natural
                      Ayurvedic action
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-sm text-blue-800">
                <strong>Clinical Studies:</strong> Our formulation is backed by
                traditional Ayurvedic texts and modern research for safe and
                effective results.
              </p>
            </div>
          </div>
        ),
      },
    ],
  };
};

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const product = getProductData(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const relatedBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Product Details Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <ProductImageCarousel
                images={product.images}
                productName={product.name}
              />

              {/* Product Info */}
              <ProductInfo
                name={product.name}
                rating={product.rating}
                options={product.options}
              />
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <ProductTabs tabs={product.tabs} />
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
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  readTime={post.readTime}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer Image Section */}
        <section className="w-full">
          <div className="h-64 md:h-80 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience Natural Weight Management
              </h3>
              <p className="text-lg">
                Discover the power of Ayurvedic solutions for healthy weight
                loss
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
