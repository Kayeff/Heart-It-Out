import Button from "../UI/Button.jsx";
import Card from "../UI/Card.jsx";
import card_data from "../../data/cardData.js";

export default function WhyChooseUs() {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-10">
      <h1 className="text-5xl tracking-tight font-bold">
        Why choose <span className="text-logo-yellow">Heart It Out</span>?
      </h1>
      <div className="w-full p-4 grid grid-cols-3 gap-4 grid-flow-dense">
        {card_data.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      <Button
        title="Explore our Programs"
        css="bg-white text-dark-grey text-health-green hover:bg-anti-flash-white"
      ></Button>
    </div>
  );
}
