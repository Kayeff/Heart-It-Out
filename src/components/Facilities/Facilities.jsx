export default function Facilities({ Icon, title }) {
  return (
    <div className="p-8 rounded-2xl bg-whitesmoke transition-colors hover:bg-white flex items-center justify-center flex-col space-y-2 text-dark-grey hover:text-health-green">
      <Icon size={30} />
      <h1 className="font-semibold text-2xl tracking-tight text-center whitespace-break-spaces">
        {title}
      </h1>
    </div>
  );
}
