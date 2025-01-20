import Button from "./Button";
import hero from "../assets/hero.jpg";
import Disclamer from "./Disclamer";
import {
  RiArrowRightUpLine,
  RiCalendar2Fill,
  RiEmpathizeLine,
  RiNurseFill,
  RiSurveyLine,
} from "@remixicon/react";
import WaveSection from "./WaveSection";
import Facilities from "./Facilities";
import waves from "../assets/wave-1.svg";

export default function Hero() {
  return (
    <>
      <section className="w-full h-screen grid grid-cols-2 cursor-default px-16 py-8 relative">
        <div className="flex items-center justify-center flex-col space-y-6">
          <div className="w-full flex items-start justify-center flex-col space-y-1">
            <h1 className="tracking-tight text-6xl font-bold">
              Face Life's Challenges Bravely with{" "}
              <span className="text-health-green">Heart It Out!</span>
            </h1>
            <p className="font-medium text-base text-dark-grey w-[80%]">
              Experience tailored care from our award-winning therapists for all
              your mental health concerns & wellness needs.
            </p>
          </div>
          <div className="w-full flex items-center justify-start space-x-2">
            <Button
              css={"bg-health-green text-white"}
              title={"Book your first session"}
              Icon={RiArrowRightUpLine}
            />
            <Button
              css={"bg-logo-yellow text-dark-grey"}
              title={"Learn how therapy works"}
              Icon={RiArrowRightUpLine}
            />
          </div>
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center">
          <img src={hero} alt="" />
        </div>
      </section>
      <WaveSection src={waves}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] space-y-10 cursor-default">
          <Disclamer />
          <div className="grid grid-cols-4 gap-4">
            <Facilities Icon={RiEmpathizeLine} title="Quality Health Care" />
            <Facilities Icon={RiCalendar2Fill} title="Book anytime" />
            <Facilities Icon={RiNurseFill} title="50+ Care Experts" />
            <Facilities Icon={RiSurveyLine} title="Our Programs" />
          </div>
        </div>
      </WaveSection>
    </>
  );
}
