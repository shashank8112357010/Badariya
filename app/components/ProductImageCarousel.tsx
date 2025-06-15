"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

export default function ProductImageCarousel({
  images,
  productName,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second image (orange dot)

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="bg-[#FFDFBA] rounded-lg p-8 h-96 flex items-center justify-center relative">
        {images && images.length > 0 ? (
          <Image
            src={images[currentIndex]}
            alt={productName}
            width={300}
            height={300}
            className="object-contain"
          />
        ) : (
          <span className="text-gray-600 text-center">Product Image</span>
        )}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-[#FF9B29]"
                  : index === 3
                    ? "bg-[#D9D9D9] opacity-65"
                    : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
