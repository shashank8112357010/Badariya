"use client";

import { useState } from "react";

interface ProductOption {
  id: string;
  title: string;
  capsules: number;
  duration: string;
  price: number;
  isSelected?: boolean;
}

interface ProductInfoProps {
  name: string;
  rating: number;
  options: ProductOption[];
}

export default function ProductInfo({
  name,
  rating,
  options,
}: ProductInfoProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]?.id || "");

  const renderStars = (ratingValue: number) => {
    const stars = [];

    for (let i = 0; i < ratingValue; i++) {
      stars.push(
        <div
          key={i}
          className="w-6 h-6 bg-[#D9D9D9] rounded flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.6 14.65L10 12.8L12.4 14.65L11.5 11.6L13.75 10H10.95L10 6.9L9.05 10H6.25L8.5 11.6L7.6 14.65ZM3.825 20L6.15 12.4L0 8H7.6L10 0L12.4 8H20L13.85 12.4L16.175 20L10 15.3L3.825 20Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>,
      );
    }
    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <h1 className="text-2xl md:text-3xl font-semibold text-[#191919]">
        {name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">{renderStars(rating)}</div>
        <span className="text-2xl font-semibold text-black">{rating}</span>
      </div>

      {/* Select Unit */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-medium text-[#191919]">
          Select Unit
        </h3>

        <div className="flex gap-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={`w-72 h-60 rounded-lg border border-[#FFCA8D] p-5 cursor-pointer transition-colors duration-200 ${
                selectedOption === option.id ? "bg-[#FFEFDD]" : "bg-white"
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#282828]">
                  {option.title}
                </h4>

                <div className="space-y-2">
                  <p className="text-lg font-medium text-[#3E3E3E]">
                    {option.capsules} capsules
                  </p>
                  <p className="text-sm text-[#3E3E3E]">{option.duration}</p>
                </div>

                <div className="pt-4">
                  <p className="text-3xl font-semibold text-[#232323]">
                    Rs. {option.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button className="flex-1 max-w-64 h-12 border border-[#FFCB8E] bg-white rounded-lg flex items-center justify-center text-lg font-medium text-[#606060] hover:bg-gray-50 transition-colors">
          Add to Cart
        </button>
        <button className="flex-1 max-w-56 h-12 border border-[#FFCB8E] bg-[#FFEFDD] rounded-lg flex items-center justify-center text-lg font-medium text-[#DC7500] hover:bg-[#ffe5c7] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
}
