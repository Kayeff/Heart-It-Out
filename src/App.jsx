import Lottie from "lottie-react";
import animationData from "./assets/animation.json";

//Waves
import wave3 from "./assets/wave-3.svg";
import wave4 from "./assets/wave-4.svg";
import wave5 from "./assets/wave-5.svg";
import wave6 from "./assets/wave6.svg";
import blob3 from "./assets/blob-3.svg";
import blob4 from "./assets/blob-4.svg";

//Data
import { therapy_data } from "./data/therapy";

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
import Footer from "./components/Page-Section/Footer";
import ResourcesSection from "./components/Page-Section/ResourcesSection";
import Newsletter from "./components/Page-Section/Newsletter";
import { useRef } from "react";

export default function App() {
  const animationRef = useRef(null);

  return (
    <main className="w-full min-h-screen font-Switzer relative bg-white antialiased overflow-x-hidden">
      <Navbar />
      <Section classes="hero-section" isWaves={false}>
        <Lottie
          lottieRef={animationRef}
          className="absolute bottom-2 left-2 h-52"
          animationData={animationData}
          loop={false}
        />
        <Hero />
      </Section>
      <div className="w-full bg-anti-flash-white">
        <WaveSection src={wave6} />
      </div>
      <Section classes="facilities-section">
        <FacilitiesGrid />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave4} />
      </div>
      <Section classes="therapy-section">
        <div className="w-[90%] px-10 space-y-20">
          {therapy_data.map((therapy) => (
            <Therapy key={therapy.id} {...therapy} />
          ))}
        </div>
      </Section>
      <div className="w-full bg-anti-flash-white">
        <WaveSection src={wave3} />
      </div>
      <Section classes="whyus-section">
        <WhyChooseUsSection />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave4} />
      </div>
      <Section classes="testimonial-section">
        <Testimonials />
      </Section>
      <div className="w-full bg-anti-flash-white">
        <WaveSection src={wave3} />
      </div>
      <Section classes="mobileapp-section">
        <MobileAppSection />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave4} />
      </div>
      <Section classes="resources-section">
        <ResourcesSection />
      </Section>
      <div className="w-full bg-anti-flash-white">
        <WaveSection src={wave5} />
      </div>
      <Section classes="newsletter-section">
        <Newsletter />
        <img
          className="h-96 absolute -left-44 -top-1/2"
          src={blob4}
          loading="lazy"
          alt=""
        />
        <img
          className="h-80 absolute -right-32 -top-1/2"
          src={blob3}
          loading="lazy"
          alt=""
        />
      </Section>
      <Footer />
    </main>
  );
}
