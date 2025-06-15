export default function ConsultSection() {
  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Consult Vaidhya
          </h2>
        </div>

        <div className="bg-[#FFDFC9] rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl">
            <p className="text-base md:text-lg font-semibold text-black leading-relaxed">
              Talk to our Ayurvedacharya and begin your journey towards health
              and well-being. Our experienced practitioners provide personalized
              consultation based on traditional Ayurvedic principles, helping
              you find natural solutions for your health concerns.
            </p>

            <div className="mt-8">
              <button className="bg-[#3A643B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
