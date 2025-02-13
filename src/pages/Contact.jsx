import wave7 from "../assets/wave7.svg";
import WaveSection from "../components/WaveSection";
import ContactLinks from "../components/ContactLinks";
import { RiMapPinFill, RiMailFill, RiPhoneFill } from "@remixicon/react";
import arrow from "../assets/blue-arrow.svg";
import blob2 from "../assets/blob-2.svg";
import Form from "../components/Form";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex items-center justify-between flex-col">
      <div className="w-full p-20 flex items-center justify-center">
        <Heading text="Contact" spanText={"Us"} color={"text-prussian-blue"} />
      </div>
      <div className="w-full bg-health-green">
        <WaveSection src={wave7} />
      </div>
      <div className="w-full bg-health-green flex items-center justify-center flex-col">
        <div className="grid grid-cols-2 w-[70%] py-10">
          <div className="w-full flex items-start justify-start flex-col relative">
            <div className="w-[80%] flex items-center justify-center flex-col space-y-10">
              <div className="w-full flex items-start justify-start">
                <h1 className="tracking-tight text-5xl font-bold text-anti-flash-white space-y-2 flex flex-col">
                  <span>Do you have a question? </span>
                  <span className="text-logo-yellow">Contact us.</span>
                </h1>
              </div>
              <div className="w-full text-anti-flash-white flex items-center justify-center">
                <div className="flex items-start justify-start flex-col w-full space-y-4">
                  <ContactLinks Icon={RiMapPinFill}>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.622159543417!2d77.62163931346697!3d12.931988990881845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145b75c68e79%3A0xd17e7decdc131767!2sHeart%20It%20Out%20-%20Psychologists%20in%20Bangalore%20%7C%20Mental%20Health%20Events%20%26%20Products!5e0!3m2!1sen!2sbd!4v1629096610658!5m2!1sen!2sbd"
                      target="_blank"
                      className="flex items-start justify-center flex-col"
                    >
                      #42, 7th 'B' Cross
                      <br />
                      Koramangala 4th Block
                      <br />
                      Bangalore - 560034
                    </a>
                  </ContactLinks>
                  <ContactLinks Icon={RiMailFill}>
                    <a
                      href="mailto: hello@heartitout.in"
                      className="flex items-start justify-center flex-col font-medium"
                      target="_blank"
                    >
                      hello@heartitout.in
                    </a>
                  </ContactLinks>
                  <ContactLinks Icon={RiPhoneFill}>
                    <a
                      href="tel:+91 789 255 1372"
                      className="flex items-start justify-center flex-col font-medium"
                      target="_blank"
                    >
                      +91 789 255 1372
                    </a>
                  </ContactLinks>
                </div>
              </div>
            </div>
            <img
              className="h-20 absolute top-10 right-20 -rotate-8"
              src={arrow}
              alt=""
            />
          </div>
          <div className="w-full flex items-end justify-center flex-col relative">
            <div className="w-[100%] space-y-4">
              <h1 className="tracking-tight text-5xl font-bold text-anti-flash-white">
                Or Leave us a message{" "}
                <span className="text-logo-yellow">here.</span>
              </h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
