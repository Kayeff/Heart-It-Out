//Waves
import wave1 from "./assets/wave-1.svg";
import wave2 from "./assets/wave-2.svg";
import wave3 from "./assets/wave-3.svg";
import wave4 from "./assets/wave-4.svg";

//Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Page-Section/Hero";
import Section from "./components/UI/Section";
import WaveSection from "./components/UI/WaveSection";
import Therapy from "./components/Page-Section/Therapy";
import WhyChooseUsSection from "./components/Page-Section/WhyChooseUsSection";
import Testimonials from "./components/Testimonial/Testimonials";
import FacilitiesGrid from "./components/Facilities/FacilitiesGrid";
import MobileAppSection from "./components/Page-Section/MobileAppSection";
import Button from "./components/UI/Button";
import Footer from "./components/Page-Section/Footer";
import ResourcesSection from "./components/Page-Section/ResourcesSection";

//Data
import { therapy_data } from "./data/therapy";

export default function App() {
  return (
    <main className="w-full min-h-screen font-Switzer relative bg-white">
      <Navbar />
      <Section classes="hero-section" isWaves={false}>
        <Hero />
      </Section>
      <Section classes="facilities-section">
        <FacilitiesGrid />
      </Section>
      <WaveSection src={wave1} />
      <Section classes="therapy-section">
        <div className="w-[80%] space-y-20">
          {therapy_data.map((therapy) => (
            <Therapy key={therapy.id} {...therapy} />
          ))}
        </div>
        <WhyChooseUsSection />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave2} />
      </div>
      <Section classes="testimonial-section">
        <Testimonials />
      </Section>
      <WaveSection src={wave3} />
      <Section classes="mobileapp-section">
        <MobileAppSection />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave4} />
      </div>
      <Section classes="resources-section">
        <ResourcesSection />
      </Section>
      <div className="w-full">
        <WaveSection src={wave3} />
      </div>
      <Section classes="contact-section">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h1 className="text-6xl tracking-tight font-bold text-white">
            Interested in{" "}
            <span className="text-logo-yellow">our services?</span>
          </h1>
          <h1 className="text-6xl tracking-tight font-bold text-white">
            Contact us.
          </h1>
        </div>
        <Button
          title="Contact"
          css="bg-white text-dark-grey px-10 py-3 hover:bg-anti-flash-white hover:text-health-green font-medium"
        />
      </Section>
      <Footer />
    </main>
  );
}
