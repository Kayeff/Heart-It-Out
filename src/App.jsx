import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";
import { therapy_data } from "./therapy";
import Therapy from "./components/Therapy";
import invertedWaves from "./assets/inverted-waves.svg";

export default function App() {
  return (
    <main className="w-full min-h-screen font-Switzer relative">
      <Navbar />
      <Hero />
      <PageSection css="bg-health-green text-white" wave={invertedWaves}>
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
      </PageSection>
      <PageSection css="bg-white text-health-green"></PageSection>
    </main>
  );
}
