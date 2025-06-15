"use client";

import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { useState } from "react";

export default function HealthSolutions() {
  const [activeCategory, setActiveCategory] = useState("Health Issue 2");

  const products = [
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
    {
      name: "Badariya Fat Slim Capsules",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
    },
  ];

  const blogPosts = [
    {
      title: "Title of the blog",
      readTime: "8 mins",
    },
    {
      title: "Title of the blog",
      readTime: "8 mins",
    },
    {
      title: "Title of the blog",
      readTime: "8 mins",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Category Filter Section */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={(category) => setActiveCategory(category)}
        />

        {/* Products Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Products for your Health Issue 2
              </h2>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Helpful reads related to Health Issue 2
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
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
                Discover Our Complete Range
              </h3>
              <p className="text-lg">
                Explore more Ayurvedic solutions for your wellness journey
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
