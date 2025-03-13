import wave7 from "../assets/wave7.svg";
import WaveSection from "../components/WaveSection";

export default function Login() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center flex-col">
        <div className="w-[80%] grid grid-cols-2 p-4">
          <div className="rounded-4xl flex items-center justify-center flex-col space-y-2">
            <h1 className="tracking-tight text-5xl font-bold text-prussian-blue">
              Your wellbeing comes first.
            </h1>
            <h1 className="w-[80%] font-medium">
              Get instant one click appointments, track your wellbeing journey,
              access session notes, and more. All in one place.
            </h1>
          </div>
          <div className="rounded-4xl"></div>
        </div>
      </section>
      <div className="w-full bg-health-green">
        <WaveSection src={wave7} />
      </div>
    </>
  );
}
