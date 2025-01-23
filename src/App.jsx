import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/UI/Section";
import WaveSection from "./components/UI/WaveSection";
import { therapy_data } from "./therapy";
import Therapy from "./components/Therapy";
import WhyChooseUsSection from "./components/Page-Section/WhyChooseUsSection";
import wave1 from "./assets/wave-1.svg";
import wave2 from "./assets/wave-2.svg";
import wave3 from "./assets/wave-3.svg";
import Footer from "./components/Page-Section/Footer";
import FacilitiesGrid from "./components/FacilitiesGrid";
import Disclaimer from "./components/Disclaimer";
import Testimonials from "./components/Testimonials";

export default function App() {
  const heroSection_Class =
    "h-[calc(100vh-94px)] w-full grid grid-cols-2 cursor-default px-16 py-8 relative";
  const therapySection_Class =
    "w-full py-8 px-40 min-h-screen relative cursor-default space-y-40 bg-health-green text-white";
  const testimonials_Class =
    "w-full px-10 py-8 min-h-screen cursor-default flex items-start justify-between";

  return (
    <main className="w-full min-h-screen font-Switzer relative bg-white">
      <Navbar />
      <Section classes={heroSection_Class} isWaves={false}>
        <Hero />
      </Section>
      <WaveSection src={wave1}>
        <Disclaimer />
        <FacilitiesGrid />
      </WaveSection>
      <Section classes={therapySection_Class}>
        <div className="w-full space-y-20">
          {therapy_data.map((therapy) => (
            <Therapy key={therapy.id} {...therapy} />
          ))}
        </div>
        <WhyChooseUsSection />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave2} />
      </div>
      <Section classes={testimonials_Class}>
        <Testimonials />
      </Section>
      <div className="w-full">
        <WaveSection src={wave3} />
      </div>
      <Footer />
    </main>
  );
}
