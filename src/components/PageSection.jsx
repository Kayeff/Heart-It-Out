import WaveSection from "./WaveSection";
import invertedWaves from "../assets/inverted-waves.svg";
import Therapy from "./Therapy";
import { therapy_data } from "../therapy.js";

export default function PageSection() {
  return (
    <>
      <section className="w-full py-8 px-40 bg-health-green min-h-screen relative cursor-default text-white space-y-20">
        {therapy_data.map((therapy) => (
          <Therapy
            key={therapy.id}
            twist={therapy.twist}
            src={therapy.src}
            focusedText={therapy.focusedText}
            title={therapy.title}
            paragraph={therapy.para}
          />
        ))}
      </section>
      <WaveSection src={invertedWaves} />
    </>
  );
}
