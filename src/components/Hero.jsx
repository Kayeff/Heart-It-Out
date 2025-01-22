import Button from "./Button";
import heroImage from "../assets/hero.jpg";
import { RiArrowRightUpLine } from "@remixicon/react";
import googleLogo from "../assets/google-logo.png";
import practoStars from "../assets/practo-stars.svg";
import practoLogo from "../assets/practo-logo.png";
import googleStars from "../assets/google-stars.svg";
import Review from "./Review";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center flex-col space-y-6">
        <div className="flex items-start justify-start space-x-2 rounded-full px-1 w-full">
          <Review title={"5.0"} logo={practoLogo} stars={practoStars} />
          <div className="h-full w-[1px] bg-dark-grey"></div>
          <Review title={"4.6"} logo={googleLogo} stars={googleStars} />
        </div>
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
      <div className="w-full h-full rounded-xl flex items-center justify-center p-4">
        <img src={heroImage} alt="" />
      </div>
    </>
  );
}
