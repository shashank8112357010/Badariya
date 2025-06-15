export default function AboutSections() {
  return (
    <section className="w-full px-4 py-16 bg-[#FFF8F0]">
      <div className="container mx-auto max-w-6xl">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            People Progress and Philosophy of Badariya Pharma
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center max-w-4xl mx-auto leading-relaxed">
            Efforts Made by Badariya Pharma to keep the Ancient Science Alive
          </p>
        </div>

        {/* Three main sections */}
        <div className="space-y-16">
          {/* Company Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Company Image</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6">
                Our Mission & Values
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#686464] leading-relaxed">
                Our Initiative to incorporate nearly forgotten science of Ras
                Rasayan into our Medicines for the Well-being of people.
                Established in 1998, we are dedicated to enhancing health and
                wellness through authentic Ayurvedic principles.
              </p>
            </div>
          </div>

          {/* People Behind Badariya */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6">
                People Behind Badariya Pharma
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#686464] leading-relaxed">
                Our team consists of experienced Ayurvedic practitioners,
                researchers, and dedicated professionals committed to providing
                effective, research-backed Ayurvedic solutions to a global
                audience.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Team Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Philosophy Image</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6">
                Philosophy of Badariya Pharma
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#686464] leading-relaxed">
                We believe in the power of ancient Ayurvedic wisdom combined
                with modern research methodologies. Our philosophy centers on
                providing natural, safe, and effective solutions that address
                the root cause of health issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
