import Button from "./Button";
import Card from "./Card";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function Cards() {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-10">
      <h1 className="text-5xl tracking-tight font-bold">
        Why choose <span className="text-logo-yellow">Heart It Out</span>?
      </h1>
      <div className="w-full p-4 grid grid-cols-3 gap-4">
        <Card
          title="New Standards for Mental Health"
          para="With 12,000+ hours of research from our Leading Experts and 10 lakh+ data points backing our Artificial Intelligence models, we provide the highest quality of care for all your wellbeing needs."
          span={true}
        />
        <Card
          title="Scientifically Proven"
          para="Get scientifically backed, culture-specific, age aligned mental health care."
          span={false}
        />
        <Card
          title="24/7"
          para="Our call center is available to you 24 hours a day, 365 days a year. In case of acute problems, we guarantee an appointment within 24 hours."
          span={false}
        />
        <Card
          title="Respect and Dignity"
          para="A personal approach and ample time for each client are key to us. We replace typical waiting rooms with several comfortable lounges that offer a pleasant atmosphere and refreshments. Our speedy, expert first responders communicate in 15+ languages."
          span={true}
        />
        <Card
          title="Holistic & Convenient"
          para="Heart It Out follows an innovative, tailored approach, so your mind receives undivided attention and care. Our therapeutic care ensures your physical and mental wellbeing. Book instant sessions with our advanced recommendation system."
          span={true}
        />
        <Card
          title="eHealth"
          para="We use electronic health records or remote health monitoring. The client zone and our mobile app allow you to chat and video chat with your doctor."
          span={false}
        />
      </div>
      <Button
        title="Our Programs"
        css="bg-white text-dark-grey text-health-green hover:bg-anti-flash-white"
        Icon={RiArrowRightUpLine}
      ></Button>
    </div>
  );
}
