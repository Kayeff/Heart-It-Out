export default function Review({ logo, stars, title }) {
  return (
    <div className="p-1 flex items-center justify-center space-x-2">
      <img className="h-8" src={logo} alt="" />
      <h1 className="font-semibold text-xl text-stars">{title}</h1>
      <img className="h-3" src={stars} alt="" />
    </div>
  );
}
