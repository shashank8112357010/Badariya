"use client";

import { useState } from "react";

interface FormData {
  name: string;
  location: string;
  healthIssue: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    location: "",
    healthIssue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#FFEFDB] rounded-lg p-8 flex items-center gap-8">
          {/* Form Section */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-4">
                <label className="block text-2xl font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-[#D4AE81] bg-[rgba(255,234,210,0.84)] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
                  placeholder="Enter your name"
                />
              </div>

              {/* Location Field */}
              <div className="space-y-4">
                <label className="block text-2xl font-medium text-black">
                  Where do you belong to?
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-[#D4AE81] bg-[rgba(255,234,210,0.84)] text-black placeholder-[#868686] focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
                  placeholder="Place"
                />
              </div>

              {/* Health Issue Field */}
              <div className="space-y-4">
                <label className="block text-2xl font-medium text-black">
                  Health Issue
                </label>
                <textarea
                  value={formData.healthIssue}
                  onChange={(e) => handleChange("healthIssue", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AE81] bg-[rgba(255,234,210,0.84)] text-black placeholder-[#868686] resize-none focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
                  placeholder="Describe your Health Issue"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-96 h-96 bg-[#FFDAAF] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-gray-600 text-center">
              Consultation Image
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
