"use client";

import { useState } from "react";
import Image from "next/image";
import { carouselItems } from "../data/dummyData";

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  return (
    <section className="w-full px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#FFDFC9] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                {carouselItems[currentSlide].title}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#3A643B]">
                {carouselItems[currentSlide].subtitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {carouselItems[currentSlide].description}
              </p>
              <div className="flex gap-4">
                <button className="bg-[#3A643B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-[#3A643B] text-[#3A643B] px-6 py-3 rounded-lg font-semibold hover:bg-[#3A643B] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Image
                  src={carouselItems[currentSlide].imageUrl}
                  alt={carouselItems[currentSlide].title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
            >
              <svg
                className="w-6 h-6 text-[#3A643B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-[#3A643B]"
                      : "bg-white bg-opacity-60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
            >
              <svg
                className="w-6 h-6 text-[#3A643B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
