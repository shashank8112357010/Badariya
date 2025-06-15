"use client";

import { useState } from "react";

interface CategoryFilterProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory = "Health Issue 2",
  onCategoryChange,
}: CategoryFilterProps) {
  const [selected, setSelected] = useState(activeCategory);

  const categories = [
    { id: "all", label: "All" },
    { id: "health-issue-2", label: "Health Issue 2" },
    { id: "health-issue-3", label: "Health Issue 3" },
    { id: "health-issue-4", label: "Health Issue 4" },
    { id: "more", label: "..." },
  ];

  const handleCategoryClick = (categoryId: string, label: string) => {
    setSelected(label);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => {
            const isActive = selected === category.label;
            const isHighlighted = category.label === "Health Issue 2";

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.label)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-lg border-2 transition-all duration-200 hover:shadow-md
                  ${
                    isHighlighted && isActive
                      ? "bg-[#F98E10] border-[#CB7A1B] text-white shadow-lg border-4"
                      : isActive
                        ? "bg-[#FFEAD1] border-[#F98E10] text-black"
                        : "bg-[#FFEAD1] border-[#F98E10] text-black hover:bg-[#F98E10] hover:text-white"
                  }
                  ${category.id === "more" ? "px-4" : ""}
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
