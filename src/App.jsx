import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Button from "./components/Button";
import {
  RiArrowRightUpLine,
  RiCalendar2Fill,
  RiEmpathizeLine,
  RiNurseFill,
  RiSurveyLine,
} from "@remixicon/react";
import wavesSvg from "./assets/wave-1.svg";
import WaveSection from "./components/WaveSection";
import Facilities from "./components/Facilities";
import { therapy_data } from "./therapy";
import Therapy from "./components/Therapy";
import invertedWaves from "./assets/inverted-waves.svg";

export default function App() {
  return (
    <main className="w-full min-h-screen font-Switzer relative">
      <Navbar />
      <Section
        classes="h-[calc(100vh-94px)] w-full grid grid-cols-2 cursor-default px-16 py-8 relative"
        isWaves={false}
      >
        <Hero />
      </Section>
      <WaveSection src={wavesSvg}>
        <div className="w-full rounded-2xl flex items-center justify-between text-dark-grey shadow-navbar bg-white p-8">
          <div className="w-[80%]">
            <p className="font-medium text-xl tracking-tight">
              <span className="font-semibold text-health-green">
                Disclamer:{" "}
              </span>
              We provide medical service and suicide prevention helpline. If you
              are feeling suicidal, we would suggest you immediately call up our
              suicide prevention helpline{" "}
              <a href="#" className="hover:underline font-bold">
                +91 789 255 1372
              </a>
              . We don’t provide in-patient services currently.
            </p>
          </div>
          <Button
            title={"More Information"}
            Icon={RiArrowRightUpLine}
            css="border border-health-green text-health-green hover:bg-anti-flash-white"
            size={25}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Facilities Icon={RiEmpathizeLine} title="Quality Health Care" />
          <Facilities Icon={RiCalendar2Fill} title="Book anytime" />
          <Facilities Icon={RiNurseFill} title="50+ Care Experts" />
          <Facilities Icon={RiSurveyLine} title="Our Programs" />
        </div>
      </WaveSection>
      <Section classes="w-full py-8 px-40 min-h-screen relative cursor-default space-y-20 bg-health-green text-white">
        {therapy_data.map((therapy) => (
          <Therapy
            key={therapy.id}
            twist={therapy.twist}
            src={therapy.src}
            focusedText={therapy.focusedText}
            title={therapy.title}
            paragraph={therapy.para}
          />
        ))}
      </Section>
      <WaveSection src={invertedWaves} />
    </main>
  );
}
