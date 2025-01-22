export default function Card({ span, title, para }) {
  return (
    <div
      className={`w-full bg-anti-flash-white rounded-3xl p-10 py-16 flex items-start justify-start flex-col space-y-2 text-dark-grey shadow-cards ${
        span && "col-span-2"
      }`}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-prussian-blue">
        {title}
      </h1>
      <p className="text-lg">{para}</p>
    </div>
  );
}
