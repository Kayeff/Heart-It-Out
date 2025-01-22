export default function Testimonial({ para, name, age, designation }) {
  return (
    <div className="w-full p-10 rounded-xl space-y-4 flex items-center justify-between flex-col bg-isabelline">
      <p className="text-lg">{para}</p>
      <div className="w-full">
        <h1 className="font-bold">{name}</h1>
        <h1 className="text-sm font-medium text-dark-grey">
          {designation}, {age}
        </h1>
      </div>
    </div>
  );
}
