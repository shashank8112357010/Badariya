"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import ProductInfo from "../../components/ProductInfo";
import ProductTabs from "../../components/ProductTabs";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";

// Mock product data - in real app, this would come from API/database
const getProductData = (slug: string) => {
  const products: { [key: string]: any } = {
    "badariya-fat-slim-capsules": {
      name: "Badariya Fat Slim capsules",
      rating: 4.2,
      images: [
        "/product-1.jpg",
        "/product-2.jpg",
        "/product-3.jpg",
        "/product-4.jpg",
      ],
      options: [
        {
          id: "bottle-1",
          title: "1 Bottle Contains",
          capsules: 48,
          duration: "(Lasts upto 2 weeks)",
          price: 299,
          isSelected: true,
        },
        {
          id: "bottle-2",
          title: "1 Bottle Contains",
          capsules: 48,
          duration: "(Lasts upto 2 weeks)",
          price: 299,
          isSelected: false,
        },
      ],
      tabs: [
        {
          id: "how-to-consume",
          title: "How to consume?",
          content: `
            <div class="space-y-6">
              <h4 class="text-xl font-semibold text-black mb-4">Dosage Instructions</h4>
              <p class="text-lg text-gray-700 leading-relaxed">Take 2 capsules twice daily after meals with warm water.</p>
              
              <h4 class="text-xl font-semibold text-black mb-4">Best Time to Take</h4>
              <p class="text-lg text-gray-700 leading-relaxed">Morning and evening, preferably 30 minutes after meals for optimal absorption.</p>
              
              <h4 class="text-xl font-semibold text-black mb-4">Duration</h4>
              <p class="text-lg text-gray-700 leading-relaxed">For best results, continue for 3-6 months or as directed by your Ayurvedic practitioner.</p>
              
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p class="text-sm text-yellow-800">
                  <strong>Note:</strong> Consult with our Ayurvedacharya for personalized dosage recommendations based on your constitution and health condition.
                </p>
              </div>
            </div>
          `,
        },
        {
          id: "ingredients",
          title: "Product Key Ingredients",
          content: `
            <div class="space-y-6">
              <h4 class="text-xl font-semibold text-black mb-4">Key Ayurvedic Ingredients</h4>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-black mb-2">Garcinia Cambogia</h5>
                  <p class="text-gray-700 text-sm">Natural fat burner that helps in weight management and appetite control.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-black mb-2">Green Tea Extract</h5>
                  <p class="text-gray-700 text-sm">Rich in antioxidants, boosts metabolism and supports healthy weight loss.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-black mb-2">Triphala</h5>
                  <p class="text-gray-700 text-sm">Traditional Ayurvedic blend that supports digestion and detoxification.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-black mb-2">Guggul</h5>
                  <p class="text-gray-700 text-sm">Helps in maintaining healthy cholesterol levels and weight management.</p>
                </div>
              </div>
              
              <div class="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                <p class="text-sm text-green-800">
                  All ingredients are sourced from certified organic farms and processed using traditional Ayurvedic methods.
                </p>
              </div>
            </div>
          `,
        },
        {
          id: "benefits",
          title: "Benefits",
          content: `
            <div class="space-y-6">
              <h4 class="text-xl font-semibold text-black mb-4">Health Benefits</h4>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-black">Natural Weight Management</h5>
                    <p class="text-gray-700">Supports healthy weight loss through natural fat burning mechanisms</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-black">Improved Metabolism</h5>
                    <p class="text-gray-700">Enhances metabolic rate for better energy utilization</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-black">Appetite Control</h5>
                    <p class="text-gray-700">Helps maintain healthy eating habits and portion control</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-black">Digestive Health</h5>
                    <p class="text-gray-700">Supports healthy digestion and nutrient absorption</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-black">Energy Boost</h5>
                    <p class="text-gray-700">Provides natural energy without jitters or crashes</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <p class="text-sm text-blue-800">
                  <strong>Clinical Studies:</strong> Our formulation is backed by traditional Ayurvedic texts and modern research for safe and effective results.
                </p>
              </div>
            </div>
          `,
        },
      ],
    },
  };

  return products[slug] || null;
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
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const blogPosts = [
    {
      id: "weight-management-tips",
      title: "Title of the blog",
      readTime: "8 mins",
    },
    {
      id: "ayurvedic-weight-loss",
      title: "Title of the blog",
      readTime: "8 mins",
    },
    {
      id: "natural-metabolism-boost",
      title: "Title of the blog",
      readTime: "8 mins",
    },
  ];

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
              {blogPosts.map((post) => (
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
