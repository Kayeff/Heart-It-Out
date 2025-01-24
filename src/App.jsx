import wave1 from "./assets/wave-1.svg";
import wave2 from "./assets/wave-2.svg";
import wave3 from "./assets/wave-3.svg";
import wave4 from "./assets/wave-4.svg";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Page-Section/Hero";
import Section from "./components/UI/Section";
import WaveSection from "./components/UI/WaveSection";
import Therapy from "./components/Page-Section/Therapy";
import WhyChooseUsSection from "./components/Page-Section/WhyChooseUsSection";
import Testimonials from "./components/Testimonial/Testimonials";
import { therapy_data } from "./data/therapy";
import FacilitiesGrid from "./components/Facilities/FacilitiesGrid";
import MobileAppSection from "./components/Page-Section/MobileAppSection";

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
    </main>
  );
}
