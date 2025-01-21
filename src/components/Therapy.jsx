import { RiArrowRightUpLine } from "@remixicon/react";
import Button from "./Button";

export default function Therapy({ twist, src, focusedText, title, paragraph }) {
  return (
    <div className="grid grid-cols-2 gap-20 w-full">
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
              <h1 className="text-4xl font-semibold tracking-tight">
                <span className="text-logo-yellow">{focusedText}</span> {title}
              </h1>
              <p className="text-anti-flash-white text-lg">{paragraph}</p>
            </div>
            <Button
              title={"Start your journey"}
              css="bg-white text-health-green rounded-full px-4 py-3 hover:bg-anti-flash-white"
              Icon={RiArrowRightUpLine}
              size={30}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-center flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                <span className="text-logo-yellow">{focusedText}</span> {title}
              </h1>
              <p className="text-anti-flash-white text-lg">{paragraph}</p>
            </div>
            <Button
              title={"Start your journey"}
              css="bg-white text-health-green rounded-full px-4 py-3 hover:bg-anti-flash-white"
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
