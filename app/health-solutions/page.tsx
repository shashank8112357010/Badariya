"use client";

import Header from "../components/Header";
import CategoryFilter, { HealthIssue } from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { useState, useMemo } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  healthIssueId: string;
  imageUrl?: string;
}

interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  healthIssueId: string;
  imageUrl?: string;
}

export default function HealthSolutions() {
  // Health Issues Data
  const healthIssues: HealthIssue[] = [
    {
      id: "joint-pain",
      label: "Health Issue 2",
      name: "Joint Pain & Arthritis",
      description:
        "Natural solutions for joint pain, arthritis, and mobility issues",
    },
    {
      id: "digestive",
      label: "Health Issue 3",
      name: "Digestive Health",
      description: "Ayurvedic remedies for digestive problems and gut health",
    },
    {
      id: "respiratory",
      label: "Health Issue 4",
      name: "Respiratory Care",
      description: "Herbal solutions for respiratory and breathing issues",
    },
    {
      id: "wellness",
      label: "Health Issue 5",
      name: "General Wellness",
      description: "Overall health and vitality enhancement products",
    },
  ];

  // Products Data
  const allProducts: Product[] = [
    // Joint Pain Products
    {
      id: "mubex-pain-gold",
      name: "Mubex Pain Gold",
      price: "636",
      originalPrice: "711",
      rating: 4.5,
      reviewCount: 1280,
      healthIssueId: "joint-pain",
    },
    {
      id: "mubex-pain-capsule",
      name: "Mubex Pain Capsule",
      price: "545",
      originalPrice: "610",
      rating: 4.3,
      reviewCount: 956,
      healthIssueId: "joint-pain",
    },
    {
      id: "joint-flex-oil",
      name: "Joint Flex Massage Oil",
      price: "425",
      originalPrice: "475",
      rating: 4.4,
      reviewCount: 678,
      healthIssueId: "joint-pain",
    },
    // Digestive Health Products
    {
      id: "digest-care",
      name: "Digest Care Capsules",
      price: "385",
      originalPrice: "430",
      rating: 4.6,
      reviewCount: 892,
      healthIssueId: "digestive",
    },
    {
      id: "acidity-relief",
      name: "Acidity Relief Syrup",
      price: "245",
      originalPrice: "275",
      rating: 4.2,
      reviewCount: 534,
      healthIssueId: "digestive",
    },
    {
      id: "liver-detox",
      name: "Liver Detox Tablets",
      price: "520",
      originalPrice: "580",
      rating: 4.5,
      reviewCount: 743,
      healthIssueId: "digestive",
    },
    // Respiratory Care Products
    {
      id: "breath-easy",
      name: "Breath Easy Capsules",
      price: "395",
      originalPrice: "440",
      rating: 4.4,
      reviewCount: 621,
      healthIssueId: "respiratory",
    },
    {
      id: "cough-syrup",
      name: "Herbal Cough Syrup",
      price: "185",
      originalPrice: "210",
      rating: 4.3,
      reviewCount: 456,
      healthIssueId: "respiratory",
    },
    {
      id: "sinus-relief",
      name: "Sinus Relief Drops",
      price: "285",
      originalPrice: "320",
      rating: 4.1,
      reviewCount: 387,
      healthIssueId: "respiratory",
    },
    // General Wellness Products
    {
      id: "kamini-vidrawan",
      name: "Kamini Vidrawan Ras",
      price: "785",
      originalPrice: "875",
      rating: 4.7,
      reviewCount: 1456,
      healthIssueId: "wellness",
    },
    {
      id: "immunity-booster",
      name: "Immunity Booster Capsules",
      price: "345",
      originalPrice: "385",
      rating: 4.5,
      reviewCount: 823,
      healthIssueId: "wellness",
    },
    {
      id: "energy-tonic",
      name: "Energy Vitality Tonic",
      price: "425",
      originalPrice: "475",
      rating: 4.4,
      reviewCount: 692,
      healthIssueId: "wellness",
    },
  ];

  // Blog Posts Data
  const allBlogPosts: BlogPost[] = [
    // Joint Pain Blogs
    {
      id: "joint-pain-remedies",
      title: "Natural Remedies for Joint Pain Relief",
      readTime: "8 mins",
      healthIssueId: "joint-pain",
    },
    {
      id: "arthritis-management",
      title: "Ayurvedic Approach to Arthritis Management",
      readTime: "12 mins",
      healthIssueId: "joint-pain",
    },
    {
      id: "mobility-exercises",
      title: "Gentle Exercises for Better Mobility",
      readTime: "6 mins",
      healthIssueId: "joint-pain",
    },
    // Digestive Health Blogs
    {
      id: "digestive-health-tips",
      title: "Ayurvedic Tips for Better Digestion",
      readTime: "10 mins",
      healthIssueId: "digestive",
    },
    {
      id: "gut-health-foods",
      title: "Foods That Promote Gut Health",
      readTime: "7 mins",
      healthIssueId: "digestive",
    },
    {
      id: "acidity-natural-cure",
      title: "Natural Ways to Combat Acidity",
      readTime: "9 mins",
      healthIssueId: "digestive",
    },
    // Respiratory Care Blogs
    {
      id: "breathing-techniques",
      title: "Pranayama: Ancient Breathing Techniques",
      readTime: "11 mins",
      healthIssueId: "respiratory",
    },
    {
      id: "seasonal-allergies",
      title: "Managing Seasonal Respiratory Allergies",
      readTime: "8 mins",
      healthIssueId: "respiratory",
    },
    {
      id: "herbal-steam-therapy",
      title: "Benefits of Herbal Steam Therapy",
      readTime: "6 mins",
      healthIssueId: "respiratory",
    },
    // General Wellness Blogs
    {
      id: "daily-wellness-routine",
      title: "Creating Your Daily Wellness Routine",
      readTime: "15 mins",
      healthIssueId: "wellness",
    },
    {
      id: "immunity-boosting-herbs",
      title: "Top 10 Immunity Boosting Herbs",
      readTime: "9 mins",
      healthIssueId: "wellness",
    },
    {
      id: "stress-management-ayurveda",
      title: "Ayurvedic Stress Management Techniques",
      readTime: "12 mins",
      healthIssueId: "wellness",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("joint-pain");
  const [selectedHealthIssue, setSelectedHealthIssue] = useState<HealthIssue>(
    healthIssues[0],
  );

  // Filter products and blogs based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return allProducts.slice(0, 6); // Show first 6 products for "All"
    }
    return allProducts.filter(
      (product) => product.healthIssueId === activeCategory,
    );
  }, [activeCategory]);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") {
      return allBlogPosts.slice(0, 3); // Show first 3 blogs for "All"
    }
    return allBlogPosts
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
