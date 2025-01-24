import Advantage from "../Advantage";
import mobile from "../../assets/mobileapp.webp";
import Button from "../UI/Button";

const app_adv = [
  {
    id: "ad1",
    title:
      "Book personalized therapy sessions tailored to your unique needs, designed to support your mental and emotional well-being.",
  },
  {
    id: "ad2",
    title:
      "Track your wellbeing progress effortlessly with our tools, designed to help you monitor improvements and stay motivated.",
  },
  {
    id: "ad3",
    title:
      "Explore a variety of personalized offerings conveniently available on your dashboard. From health plans to therapy sessions, access everything you need in one place.",
  },
  {
    id: "ad4",
    title:
      "Easily track therapist-recommended assessments through your dashboard, ensuring you stay on top of your progress. Access insights and updates tailored to your therapy journey.",
  },
];

export default function MobileAppSection() {
  return (
    <div className="w-[90%] grid grid-cols-2 gap-4">
      <div className="h-full p-4 flex items-center justify-center">
        <img className="h-[70%]" src={mobile} alt="" />
      </div>
      <div className="h-screen p-4 flex items-center justify-center flex-col space-y-8">
        <div className="space-y-1">
          <h1 className="font-bold tracking-tight text-5xl text-whitesmoke">
            <span className="text-logo-yellow"> Heart It Out</span> - mobile app
          </h1>
          <p className="font-medium text-white">
            A New Way To Envision Your Mental Health & Wellbeing
          </p>
        </div>
        <div className="w-[80%] space-y-4 flex items-start justify-center flex-col">
          {app_adv.map((item) => (
            <Advantage key={item.id} title={item.title} />
          ))}
        </div>
        <Button
          title="Log in now"
          css="bg-white text-dark-grey px-10 py-3 hover:bg-anti-flash-white hover:text-health-green font-medium"
        />
      </div>
    </div>
  );
}
