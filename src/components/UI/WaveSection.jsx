export default function WaveSection({ children, src }) {
  return (
    <div className="w-full">
      <img className="w-full" src={src} alt="waves" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] space-y-10 cursor-default">
        {children}
      </div>
    </div>
  );
}
