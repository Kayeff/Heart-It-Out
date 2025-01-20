import WaveSection from "./WaveSection";

export default function PageSection({ css, wave, children }) {
  return (
    <>
      <section
        className={`w-full py-8 px-40  min-h-screen relative cursor-default space-y-20 ${css}`}
      >
        {children}
      </section>
      <WaveSection src={wave} />
    </>
  );
}
