import Button from "./Button.jsx";
import Card from "./Card.jsx";
import { card_data } from "../data/cardData.js";
import blob1 from "../assets/blob-1.svg";
import blob2 from "../assets/blob-2.svg";

export default function WhyChooseUs() {
  return (
    <div className="w-[80%] flex items-center justify-center flex-col space-y-20 relative py-10">
      <h1 className="text-6xl tracking-tight font-bold">
        Why choose <span className="text-logo-yellow">Heart It Out?</span>
      </h1>
      <div className="w-full grid grid-cols-3 gap-3 grid-flow-dense z-10">
        {card_data.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      <Button
        title="Explore our Programs"
        css="hover:text-health-green hover:bg-anti-flash-white font-semibold"
      ></Button>
      <img
        className="h-96 absolute top-0 -left-20"
        src={blob1}
        loading="lazy"
        alt=""
      />
      <img
        className="h-96 absolute bottom-10 -right-20"
        src={blob2}
        loading="lazy"
        alt=""
      />
    </div>
  );
}
