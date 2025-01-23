import { RiArrowRightUpLine } from "@remixicon/react";
import Button from "./Button";

export default function Resources({
  imgSrc,
  title,
  paragraph,
  buttonTxt1,
  buttonTxt2,
}) {
  return (
    <div className="w-full flex items-center justify-start flex-col bg-white rounded-3xl shadow-cards">
      <img className="h-1/2" src={imgSrc} alt="" />
      <div className="space-y-1 flex items-center justify-center flex-col py-4 px-8">
        <h1 className="font-semibold text-xl tracking-tight">{title}</h1>
        <p className="text-[15px]">{paragraph}</p>
        <div className="w-full flex items-center justify-center space-x-4 py-4">
          <Button
            Icon={RiArrowRightUpLine}
            css="bg-health-green text-white px-4 py-3"
            title={buttonTxt1}
            size={20}
          />
          <Button
            Icon={RiArrowRightUpLine}
            css="bg-logo-yellow px-4 py-3"
            title={buttonTxt2}
          />
        </div>
      </div>
    </div>
  );
}
