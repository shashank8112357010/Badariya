"use client";

import Header from "../components/Header";
import ConsultationForm from "../components/ConsultationForm";
import ProcessSteps from "../components/ProcessSteps";
import HealthConcernProducts from "../components/HealthConcernProducts";
import Footer from "../components/Footer";

export default function ConsultVaidhya() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <main>
        {/* Main Title Section */}
        <section className="w-full px-4 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#080808]">
                <span>Take the First Step - Consult our Ayurvedacharya </span>
                <span className="font-semibold">for FREE</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <ConsultationForm />

        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Health Concern Products Section */}
        <HealthConcernProducts />

        {/* Why Choose Our Consultation Section */}
        <section className="w-full px-4 py-16 bg-gradient-to-r from-[#E1F9E2] to-[#F0FDF0]">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C0C] mb-8">
              Why Choose Our Ayurvedic Consultation?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Experienced Practitioners
                </h4>
                <p className="text-gray-700">
                  Consult with qualified Ayurvedacharyas with years of
                  experience in traditional medicine
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Personalized Treatment
                </h4>
                <p className="text-gray-700">
                  Get customized treatment plans based on your unique
                  constitution and health concerns
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-[#0B2C0C] mb-4">
                  Holistic Approach
                </h4>
                <p className="text-gray-700">
                  Address root causes of health issues through comprehensive
                  Ayurvedic principles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full px-4 py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#080808] mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FFEFDB] p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#080808] mb-4">
                  Phone Consultation
                </h4>
                <p className="text-lg text-gray-700 mb-2">
                  Call us directly for immediate consultation
                </p>
                <p className="text-xl font-semibold text-[#3A643B]">
                  +91 9238481760
                </p>
              </div>
              <div className="bg-[#FFEFDB] p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#080808] mb-4">
                  Email Consultation
                </h4>
                <p className="text-lg text-gray-700 mb-2">
                  Send us your health concerns via email
                </p>
                <p className="text-xl font-semibold text-[#3A643B]">
                  badariya.corp@gmail.com
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
                Your Journey to Wellness Starts Here
              </h3>
              <p className="text-lg">
                Take the first step towards natural healing with our expert
                Ayurvedic consultation
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
