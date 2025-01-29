import { RiArrowRightUpLine } from "@remixicon/react";
import Button from "../UI/Button";

export default function Therapy({
  twist,
  src,
  focusedText,
  title,
  para,
  buttonText,
}) {
  return (
    <div className="grid grid-cols-2 gap-20 w-full p-10">
      {twist ? (
        <>
          <div className="w-full flex items-center justify-start">
            <img
              className="object-cover rounded-3xl"
              src={src}
              alt="Therapy image"
            />
          </div>
          <div className="flex items-start justify-center flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-prussian-blue">
                <span className="text-health-green">{focusedText}</span> {title}
              </h1>
              <p className="text-prussian-blue text-lg">{para}</p>
            </div>
            <Button
              title={buttonText}
              css="bg-prussian-blue text-white px-4 py-3 hover:bg-health-green"
              Icon={RiArrowRightUpLine}
              size={30}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-center flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-prussian-blue">
                <span className="text-health-green">{focusedText}</span> {title}
              </h1>
              <p className="text-prussian-blue text-lg">{para}</p>
            </div>
            <Button
              title={buttonText}
              css="bg-prussian-blue text-white px-4 py-3 hover:bg-health-green"
              Icon={RiArrowRightUpLine}
              size={30}
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <img
              className="object-cover rounded-3xl"
              src={src}
              alt="Therapy image"
            />
          </div>
        </>
      )}
    </div>
  );
}
