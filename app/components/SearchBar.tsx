"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
}

export default function SearchBar({
  placeholder = "Search Keywords 'Ras Rasayan'",
  onSearch,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch?.(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center bg-[rgba(255,234,210,0.84)] border border-[#D4AE81] rounded-lg p-3 gap-4">
          {/* Search Icon */}
          <div className="w-12 h-12 bg-[#D9D9D9] rounded flex items-center justify-center flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M33.2 36L20.6 23.4C19.6 24.2 18.45 24.8333 17.15 25.3C15.85 25.7667 14.4667 26 13 26C9.36667 26 6.29167 24.7417 3.775 22.225C1.25833 19.7083 0 16.6333 0 13C0 9.36667 1.25833 6.29167 3.775 3.775C6.29167 1.25833 9.36667 0 13 0C16.6333 0 19.7083 1.25833 22.225 3.775C24.7417 6.29167 26 9.36667 26 13C26 14.4667 25.7667 15.85 25.3 17.15C24.8333 18.45 24.2 19.6 23.4 20.6L36 33.2L33.2 36ZM13 22C15.5 22 17.625 21.125 19.375 19.375C21.125 17.625 22 15.5 22 13C22 10.5 21.125 8.375 19.375 6.625C17.625 4.875 15.5 4 13 4C10.5 4 8.375 4.875 6.625 6.625C4.875 8.375 4 10.5 4 13C4 15.5 4.875 17.625 6.625 19.375C8.375 21.125 10.5 22 13 22Z"
                fill="#7C7C7C"
              />
            </svg>
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-[#232323] text-lg font-normal outline-none placeholder-[#232323]"
          />
        </div>
      </div>
    </div>
  );
}
