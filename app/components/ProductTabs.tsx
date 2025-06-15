"use client";

import { useState } from "react";

interface TabContent {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface ProductTabsProps {
  tabs: TabContent[];
}

export default function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="bg-white flex rounded-t-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-5 text-lg md:text-xl font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-[#FFEFDD] text-[#1F1F1F] border-t border-l border-r border-[#FFCA8D] rounded-t-lg"
                : "bg-white text-[#232323] hover:bg-gray-50"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-[#FFEFDD] rounded-b-lg p-8 min-h-96">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            {typeof tab.content === "string" ? (
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {tab.content}
                </p>
              </div>
            ) : (
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
