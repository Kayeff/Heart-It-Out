import Button from "./Button";
import hero from "../assets/hero.svg";

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <img className="w-96 h-96" src={hero} alt="" loading="lazy" />
      <div className="w-[80%] flex items-center justify-center flex-col space-y-8 p-4">
        <div className=" flex items-center justify-center flex-col space-y-4">
          <h1 className="tracking-tight text-7xl font-bold text-center text-prussian-blue">
            Face Life's Challenges <br /> Bravely with{" "}
            <span className="text-health-green">Heart It Out.</span>
          </h1>
          <p className="text-lg font-medium text-dark-grey w-[70%] text-center">
            Experience tailored care from our award-winning therapists for all
            your mental health concerns & wellness needs. Leave your worries to
            us. Trust in the care of an experienced team
          </p>
        </div>
        <div className="w-full flex items-center justify-center space-x-2">
          <Button
            css="bg-prussian-blue text-white hover:bg-health-green"
            title={"Book your first session"}
          />
          <Button
            css="bg-logo-yellow text-prussian-blue hover:bg-logo-yellow/70"
            title={"Learn how therapy works"}
          />
        </div>
      </div>
    </div>
  );
}
