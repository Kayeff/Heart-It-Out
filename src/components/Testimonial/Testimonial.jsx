export default function Testimonial({ para, name, age, designation }) {
  return (
    <div className="w-full p-10 rounded-2xl space-y-4 flex items-center justify-between flex-col bg-prussian-blue/5 text-prussian-blue">
      <p className="text-lg">{para}</p>
      <div className="w-full">
        <h1 className="font-bold">{name}</h1>
        <h1 className="text-sm font-medium text-prussian-blue">
          {designation}, {age}
        </h1>
      </div>
    </div>
  );
}
