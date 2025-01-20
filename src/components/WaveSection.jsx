export default function WaveSection({ children, src }) {
  return (
    <div className="w-full relative">
      <img className="w-full" src={src} alt="waves" />
      {children}
    </div>
  );
}
