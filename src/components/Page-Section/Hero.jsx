import Button from "../UI/Button";
import { RiArrowRightUpLine } from "@remixicon/react";
import hero from "../../assets/hero.webp";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center flex-col space-y-6">
        <div className="w-full flex items-start justify-center flex-col space-y-2">
          <h1 className="tracking-tight text-6xl font-bold">
            Face Life's Challenges Bravely with{" "}
            <span className="text-health-green">Heart It Out!</span>
          </h1>
          <p className="text-lg text-dark-grey w-[80%] font-medium">
            Experience tailored care from our award-winning therapists for all
            your mental health concerns & wellness needs.
          </p>
        </div>
        <div className="w-full flex items-center justify-start space-x-2">
          <Button
            css="bg-health-green text-white font-semibold"
            title={"Book your first session"}
            Icon={RiArrowRightUpLine}
          />
          <Button
            css="bg-logo-yellow text-dark-grey font-semibold"
            title={"Learn how therapy works"}
            Icon={RiArrowRightUpLine}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center p-4">
        <img className="rounded-2xl" src={hero} alt="" />
      </div>
    </>
  );
}
