export default function Card({ span, title, para }) {
  return (
    <div
      className={`w-full bg-mint-green rounded-3xl p-10 ${
        span && "col-span-2"
      } flex items-start justify-start flex-col space-y-2 text-dark-grey shadow-cards`}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-prussian-blue">
        {title}
      </h1>
      <p className="text-lg w-[90%]">{para}</p>
    </div>
  );
}
