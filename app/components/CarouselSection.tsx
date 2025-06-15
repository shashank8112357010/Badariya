export default function CarouselSection() {
  return (
    <section className="w-full px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#FFDFC9] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-8">
              Carousel
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-black leading-relaxed">
              Introduction to juice range
              <br />
              Pain mukti - bestseller
              <br />
              Capsules for overall health
              <br />
              Capsule range
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
