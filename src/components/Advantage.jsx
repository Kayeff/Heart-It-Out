import { RiCheckboxCircleFill } from "@remixicon/react";

export default function Advantage({ title }) {
  return (
    <div className="flex items-start justify-start space-x-2 w-full text-anti-flash-white">
      <div className="pt-1">
        <RiCheckboxCircleFill size={20} />
      </div>
      <h1 className="text-anti-flash-white text-lg">{title}</h1>
    </div>
  );
}
