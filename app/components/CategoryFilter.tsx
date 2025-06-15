"use client";

export interface HealthIssue {
  id: string;
  label: string;
  name: string;
  description: string;
}

interface CategoryFilterProps {
  healthIssues: HealthIssue[];
  activeCategory: string;
  onCategoryChange: (category: HealthIssue) => void;
}

export default function CategoryFilter({
  healthIssues,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const handleCategoryClick = (healthIssue: HealthIssue) => {
    onCategoryChange(healthIssue);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* All Categories Button */}
          <button
            onClick={() =>
              handleCategoryClick({
                id: "all",
                label: "All",
                name: "All Health Issues",
                description: "All available products",
              })
            }
            className={`
              px-6 py-3 rounded-xl font-semibold text-lg border-2 transition-all duration-200 hover:shadow-md
              ${
                activeCategory === "all"
                  ? "bg-[#FFEAD1] border-[#F98E10] text-black"
                  : "bg-[#FFEAD1] border-[#F98E10] text-black hover:bg-[#F98E10] hover:text-white"
              }
            `}
          >
            All
          </button>

          {/* Health Issue Buttons */}
          {healthIssues.map((issue) => {
            const isActive = activeCategory === issue.id;

            return (
              <button
                key={issue.id}
                onClick={() => handleCategoryClick(issue)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-lg border-2 transition-all duration-200 hover:shadow-md whitespace-nowrap
                  ${
                    isActive
                      ? "bg-[#F98E10] border-[#CB7A1B] text-white shadow-lg border-4"
                      : "bg-[#FFEAD1] border-[#F98E10] text-black hover:bg-[#F98E10] hover:text-white"
                  }
                `}
              >
                {issue.label}
              </button>
            );
          })}

          {/* More Button */}
          <button className="px-4 py-3 rounded-xl font-semibold text-lg border-2 bg-[#FFEAD1] border-[#F98E10] text-black hover:bg-[#F98E10] hover:text-white transition-all duration-200">
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
