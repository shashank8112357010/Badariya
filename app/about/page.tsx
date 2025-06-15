"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Main Title Section */}
        <section className="w-full px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#080808]">
                Story Behind Badariya Pharma
              </h1>
            </div>
          </div>
        </section>

        {/* Humble Beginning Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#080808] mb-8">
                Humble Beginning
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Badariya Pharma was founded in 1998 with a simple yet
                    profound vision: to make authentic Ayurvedic medicine
                    accessible to everyone. Our journey began in the historic
                    town of Kalpi, Uttar Pradesh, where ancient wisdom meets
                    modern dedication.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Starting as a small family enterprise, we were driven by the
                    belief that traditional Ayurvedic knowledge should not
                    remain confined to ancient texts but should be transformed
                    into practical solutions for contemporary health challenges.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    From our modest beginnings with just a handful of products,
                    we have grown into a trusted name in Ayurvedic healthcare,
                    always staying true to our founding principles of
                    authenticity, quality, and compassion.
                  </p>
                </div>
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Founding Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full px-4 py-16 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#080808] mb-8">
                Our Team
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Team Photo</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our team comprises experienced Ayurvedic practitioners,
                    skilled researchers, and dedicated professionals who share a
                    common passion for natural healing and traditional medicine.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Led by qualified Ayurvedacharyas with decades of experience,
                    our team brings together ancient wisdom and modern
                    scientific understanding to create products that truly make
                    a difference in people&apos;s lives.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Every member of our team is committed to maintaining the
                    highest standards of quality and authenticity in everything
                    we do, from product formulation to customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition and Impact Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#080808] mb-8">
                Recognition and Impact
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Over the years, Badariya Pharma has earned recognition for
                    its commitment to quality and authenticity in Ayurvedic
                    medicine. Our products have helped thousands of customers
                    achieve better health naturally.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We take pride in our certifications and compliance with
                    quality standards, ensuring that every product that leaves
                    our facility meets the highest benchmarks of safety and
                    efficacy.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our impact extends beyond just products - we are actively
                    involved in educating people about Ayurvedic principles and
                    promoting the integration of traditional medicine in modern
                    healthcare.
                  </p>

                  {/* Achievement Stats */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-[#3A643B]">25+</h4>
                      <p className="text-gray-600">Years of Experience</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-[#3A643B]">
                        10,000+
                      </h4>
                      <p className="text-gray-600">Satisfied Customers</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Awards & Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introducing Ras Rasayan Section */}
        <section className="w-full px-4 py-16 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#080808] mb-8">
                Introducing Ras Rasayan as one of our offerings
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Ras Rasayan Products</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Ras Rasayan represents the pinnacle of Ayurvedic
                    pharmaceutical science. These are metallic and mineral
                    preparations that have been processed through ancient
                    alchemical techniques to create highly potent therapeutic
                    agents.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our initiative to incorporate the nearly forgotten science
                    of Ras Rasayan into our modern medicine production reflects
                    our commitment to preserving and reviving ancient Ayurvedic
                    knowledge.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Through years of research and collaboration with traditional
                    practitioners, we have developed safe and effective Ras
                    Rasayan formulations that bring the benefits of this ancient
                    science to modern healthcare.
                  </p>
                  <div className="mt-8">
                    <button className="bg-[#3A643B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4d2e] transition-colors">
                      Explore Ras Rasayan Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#080808] mb-8">
                Our Mission & Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#3A643B] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Authenticity
                </h3>
                <p className="text-gray-700">
                  Preserving traditional Ayurvedic knowledge and practices while
                  ensuring modern quality standards
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#3A643B] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚗️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Quality
                </h3>
                <p className="text-gray-700">
                  Maintaining the highest standards in every aspect of
                  production and customer service
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#3A643B] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#080808] mb-4">
                  Compassion
                </h3>
                <p className="text-gray-700">
                  Caring for our customers well-being and making healing
                  accessible to everyone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Image Section */}
        <section className="w-full">
          <div className="h-64 md:h-80 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Continuing the Legacy of Ayurvedic Excellence
              </h3>
              <p className="text-lg">
                Join us in our mission to bring authentic Ayurvedic healing to
                the modern world
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
