export default function HealthSolutions() {
  const categories = [
    {
      id: 1,
      name: "Joint Pain Relief",
      description: "Mubex Pain capsules for effective joint pain management",
    },
    {
      id: 2,
      name: "Digestive Health",
      description: "Natural Ayurvedic solutions for digestive wellness",
    },
    {
      id: 3,
      name: "Respiratory Care",
      description: "Herbal remedies for respiratory health",
    },
    {
      id: 4,
      name: "Vitality Enhancement",
      description: "Kamini Vidrawan Ras for increased vitality",
    },
    {
      id: 5,
      name: "General Wellness",
      description: "Comprehensive health solutions for overall well-being",
    },
  ];

  return (
    <section className="w-full px-4 py-16 bg-[#FFF8F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            Herbal Solution to your health problem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#D9D9D9] rounded-full mb-4 flex items-center justify-center">
                {/* Placeholder for product image */}
                <span className="text-gray-600 text-sm">Product Image</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {categories.map((category, index) => (
            <p
              key={`cat-${index}`}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-black"
            >
              Category {index + 1}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
