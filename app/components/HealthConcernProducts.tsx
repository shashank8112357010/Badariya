import Image from "next/image";

export default function HealthConcernProducts() {
  const healthConcerns = [
    {
      id: "dental",
      name: "Dental Health",
      description: "Natural solutions for oral health and dental care",
      imageUrl: "",
    },
    {
      id: "immunity",
      name: "Immunity & Wellness",
      description: "Boost your immunity and overall wellness naturally",
      imageUrl: "",
    },
    {
      id: "diabetes",
      name: "Diabetes",
      description: "Ayurvedic management for diabetes and blood sugar control",
      imageUrl: "",
    },
  ];

  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Product for your health concern
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {healthConcerns.map((concern) => (
            <div key={concern.id} className="flex flex-col items-center">
              {/* Product Image */}
              <div className="w-full h-80 bg-[#FFDAB0] rounded-xl mb-6 flex items-center justify-center">
                {concern.imageUrl ? (
                  <Image
                    src={concern.imageUrl}
                    alt={concern.name}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-gray-600 text-center">
                    {concern.name} Products
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Category Names */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {healthConcerns.map((concern) => (
            <div key={`name-${concern.id}`}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#383838]">
                {concern.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
            View All Health Products
          </button>
        </div>
      </div>
    </section>
  );
}
