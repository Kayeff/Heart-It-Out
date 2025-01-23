export default function Review({ logo, stars, title, desc }) {
  return (
    <div className="p-1 flex items-center justify-center space-y-1 flex-col">
      <img className="h-14" src={logo} alt="" />
      <div className="flex items-center justify-center flex-col">
        <p className="text-xs">{desc}</p>
        <h1 className="font-semibold text-xl text-stars">{title}</h1>
        <img className="h-3" src={stars} alt="" />
      </div>
    </div>
  );
}
