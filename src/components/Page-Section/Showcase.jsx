import Button from "../UI/Button";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function Showcase({ title, para, buttonText, children }) {
  return (
    <div className="p-8 rounded-3xl bg-prussian-blue/5 flex items-center justify-between flex-col">
      <div className="flex items-start justify-center">{children}</div>
      <div className="flex items-center justify-end flex-col space-y-4">
        <div className="rounded-xl px-4 space-y-1 w-full flex items-start justify-start flex-col">
          <h1 className="font-bold tracking-tight text-4xl text-prussian-blue">
            {title}
          </h1>
          <p className="font-medium text-prussian-blue/80">{para}</p>
        </div>
        <div className="flex items-center justify-end w-full">
          <Button
            title={buttonText}
            css="bg-prussian-blue text-white px-4 py-3 hover:bg-health-green"
            Icon={RiArrowRightUpLine}
          />
        </div>
      </div>
    </div>
  );
}
