import Header from "./components/Header";
import CarouselSection from "./components/CarouselSection";
import HealthSolutions from "./components/HealthSolutions";
import ConsultSection from "./components/ConsultSection";
import AboutSections from "./components/AboutSections";
import WisdomSection from "./components/WisdomSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />
      <main>
        <CarouselSection />
        <HealthSolutions />
        <ConsultSection />
        <AboutSections />
        <WisdomSection />
      </main>
      <Footer />
    </div>
  );
}
