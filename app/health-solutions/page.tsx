"use client";

import Header from "../components/Header";
import CategoryFilter, { HealthIssue } from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { useState, useMemo } from "react";
import { healthIssues, products, blogPosts } from "../data/dummyData";

export default function HealthSolutions() {
  const [activeCategory, setActiveCategory] = useState("joint-pain");
  const [selectedHealthIssue, setSelectedHealthIssue] = useState(
    healthIssues[0],
  );

  // Filter products and blogs based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products.slice(0, 6); // Show first 6 products for "All"
    }
    return products.filter(
      (product) => product.healthIssueId === activeCategory,
    );
  }, [activeCategory]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") {
      return blogPosts.slice(0, 3); // Show first 3 blogs for "All"
    }
    return blogPosts
      .filter((blog) => blog.healthIssueId === activeCategory)
      .slice(0, 3);
  }, [activeCategory]);

  const handleCategoryChange = (healthIssue: HealthIssue) => {
    setActiveCategory(healthIssue.id);
    setSelectedHealthIssue(healthIssue);
  };

  const getDisplayTitle = () => {
    if (activeCategory === "all") {
      return "All Health Products";
    }
    return selectedHealthIssue.name;
  };

  const getBlogTitle = () => {
    if (activeCategory === "all") {
      return "Helpful Health Reads";
    }
    return `Helpful reads related to ${selectedHealthIssue.name}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Category Filter Section */}
        <CategoryFilter
          healthIssues={healthIssues}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Products Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Products for {getDisplayTitle()}
              </h2>
              {selectedHealthIssue.description && activeCategory !== "all" && (
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                  {selectedHealthIssue.description}
                </p>
              )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  imageUrl={product.imageUrl}
                  slug={product.slug}
                />
              ))}
            </div>

            {/* Show More Products Button */}
            {filteredProducts.length >= 6 && (
              <div className="text-center">
                <button className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                  View All Products
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                {getBlogTitle()}
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  readTime={post.readTime}
                />
              ))}
            </div>

            {/* Show More Blogs Button */}
            {filteredBlogs.length >= 3 && (
              <div className="text-center mt-12">
                <button className="bg-[#F98E10] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors">
                  Read More Articles
                </button>
              </div>
            )}
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
