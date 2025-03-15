//Waves
import wave3 from "../assets/wave-3.svg";
import wave4 from "../assets/wave-4.svg";
import wave6 from "../assets/wave6.svg";
import blob3 from "../assets/blob-3.svg";
import blob4 from "../assets/blob-4.svg";

//Components
import Hero from "../components/Hero";
import Section from "../components/Section";
import WaveSection from "../components/WaveSection";
import TherapySection from "../components/TherapySection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import Testimonials from "../components/Testimonials";
import FacilitiesGrid from "../components/FacilitiesGrid";
import MobileAppSection from "../components/MobileAppSection";
import ResourcesSection from "../components/ResourcesSection";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Section classes="hero-section">
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
        <TherapySection />
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
        <WaveSection src={wave3} />
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
    </>
  );
}
