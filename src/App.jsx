import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Button from "./components/Button";
import {
  RiArrowRightUpLine,
  RiCalendar2Fill,
  RiEmpathizeFill,
  RiNurseFill,
  RiSurveyFill,
} from "@remixicon/react";
import WaveSection from "./components/WaveSection";
import Facilities from "./components/Facilities";
import { therapy_data } from "./therapy";
import Therapy from "./components/Therapy";
import Cards from "./components/Cards";
import Testimonial from "./components/Testimonial";
import { testimonial_data } from "./testimonial";
import Review from "./components/Review";
import googleLogo from "./assets/google-logo.png";
import fullStars from "./assets/full-stars.svg";
import practoLogo from "./assets/practo-logo.png";
import fourandhalfStars from "./assets/four-half-stars.svg";
import facebookLogo from "./assets/facebook.webp";
import sulekhaLogo from "./assets/sulekha.png";
import justdialLogo from "./assets/justdial.png";
import wave1 from "./assets/wave-1.svg";
import wave2 from "./assets/wave-2.svg";

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
      <WaveSection src={wave1}>
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
          <Facilities Icon={RiEmpathizeFill} title="Quality Health Care" />
          <Facilities Icon={RiCalendar2Fill} title="Book anytime" />
          <Facilities Icon={RiNurseFill} title="50+ Care Experts" />
          <Facilities Icon={RiSurveyFill} title="Our Programs" />
        </div>
      </WaveSection>
      <Section classes="w-full py-8 px-40 min-h-screen relative cursor-default space-y-40 bg-health-green text-white">
        <div className="w-full space-y-20">
          {therapy_data.map((therapy) => (
            <Therapy
              key={therapy.id}
              twist={therapy.twist}
              src={therapy.src}
              focusedText={therapy.focusedText}
              title={therapy.title}
              paragraph={therapy.para}
              buttonText={therapy.buttonText}
            />
          ))}
        </div>
        <Cards />
      </Section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave2} />
      </div>
      <Section classes="w-full px-10 min-h-screen cursor-default flex items-start justify-between">
        <div className="flex items-center justify-center flex-col space-y-20 p-20 rounded-3xl">
          <div className="w-full flex items-center justify-center flex-col space-y-4">
            <div className="w-full flex items-center justify-center flex-col">
              <h1 className="font-bold text-6xl tracking-tight">
                Dont take our word for it,
              </h1>
              <h1 className="font-bold text-6xl tracking-tight">
                See What <span className="text-health-green">Clients</span> Say
                About Us
              </h1>
            </div>
            <h1 className="text-lg tracking-tight">
              Life-changing turnarounds with the right care
            </h1>
          </div>
          <div className="w-[70%] grid grid-cols-2 gap-8">
            {testimonial_data.map((person) => (
              <Testimonial key={person.id} {...person} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center space-x-10">
              <Review
                desc="Based on Google reviews"
                logo={googleLogo}
                stars={fourandhalfStars}
                title={"4.6"}
              />
              <Review
                desc="Based on Practo reviews"
                logo={practoLogo}
                stars={fullStars}
                title={"5.0"}
              />
              <Review
                desc="Based on Facebook reviews"
                logo={facebookLogo}
                stars={fourandhalfStars}
                title={"4.6"}
              />
              <Review
                desc="Based on Sulekha reviews"
                logo={sulekhaLogo}
                stars={fullStars}
                title={"5.0"}
              />
              <Review
                desc="Based on Justdial reviews"
                logo={justdialLogo}
                stars={fourandhalfStars}
                title={"4.6"}
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="w-full">
        <WaveSection src={wave1} />
      </div>
    </main>
  );
}
