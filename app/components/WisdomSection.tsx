export default function WisdomSection() {
  const wisdomCards = [
    {
      title: "Traditional Knowledge",
      content:
        "Preserving ancient Ayurvedic wisdom for modern health solutions",
    },
    {
      title: "Research & Development",
      content:
        "Combining traditional practices with scientific research methods",
    },
    {
      title: "Quality Assurance",
      content: "Maintaining highest standards in herbal medicine production",
    },
  ];

  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-semibold text-black mb-8">
            Wisdom World
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wisdomCards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Wisdom Image {index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Additional company showcase */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Addressing the Root Cause Since 2006 with 40+ Years of In-house
              Ayurvedic Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Government Approved</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">ISO Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">FDA Approved</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">GMP Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
