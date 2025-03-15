import Therapy from "./Therapy";
import { therapy_data } from "../data/therapy";

export default function TherapySection() {
  return (
    <div className="w-[70%] space-y-20">
      {therapy_data.map((therapy) => (
        <Therapy key={therapy.id} {...therapy} />
      ))}
    </div>
  );
}
