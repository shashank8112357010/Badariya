"use client";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BlogPostCard from "../components/BlogPostCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { useState } from "react";
import { blogPosts } from "../data/dummyData";

export default function Blog() {
  // Get main blog posts (first 4)
  const mainBlogPosts = blogPosts.slice(0, 4);

  // Get Ras Rasayan related posts
  const rasRasayanBlogPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes("ras rasayan") ||
        post.category.toLowerCase().includes("ras rasayan"),
    )
    .slice(0, 3);

  const handleSearch = (term: string) => {
    // Implement search functionality here
    console.log("Searching for:", term);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Search Section */}
        <SearchBar
          placeholder="Search Keywords 'Ras Rasayan'"
          onSearch={handleSearch}
        />

        {/* Main Blog Posts Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              {mainBlogPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  title={post.title}
                  category={post.category}
                  imageUrl={post.imageUrl}
                />
              ))}
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
            </div>

            {/* Small Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rasRasayanBlogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  readTime={post.readTime}
                />
              ))}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-12">
              <button className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                View All Blog Posts
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full px-4 py-16 bg-gradient-to-r from-[#E1F9E2] to-[#F0FDF0]">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C0C] mb-4">
              Stay Updated with Our Latest Articles
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Get expert insights on Ayurveda, wellness tips, and product
              updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 flex-1 w-full"
              />
              <button className="bg-[#3A643B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer Image Section */}
        <section className="w-full">
          <div className="h-64 md:h-80 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Explore the World of Ayurveda
              </h3>
              <p className="text-lg">
                Discover ancient wisdom for modern wellness through our
                comprehensive blog
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
