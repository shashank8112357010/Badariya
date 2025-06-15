export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Fill the Consultation Form",
      description:
        "Provide your details and describe your health concerns in the form above",
    },
    {
      number: 2,
      title: "Get Expert Guidance",
      description:
        "Our experienced Ayurvedacharya will review your case and provide personalized recommendations",
    },
  ];

  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#080808]">
            Process for Consulting
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-8">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#080808]">
                  Step {step.number}
                </h3>
                <span className="text-2xl md:text-3xl font-semibold text-[#080808]">
                  :
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-[#080808] mb-4">
                  {step.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
