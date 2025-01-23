import { RiArrowRightUpLine } from "@remixicon/react";
import Button from "./Button";

export default function Disclamer() {
  return (
    <div className="w-full rounded-2xl flex items-center justify-between text-dark-grey shadow-navbar bg-white p-8">
      <div className="w-[80%]">
        <p className="font-medium text-xl tracking-tight">
          <span className="font-semibold text-health-green">Disclamer: </span>
          We provide medical service and suicide prevention helpline. If you are
          feeling suicidal, we would suggest you immediately call up our suicide
          prevention helpline{" "}
          <a href="#" className="hover:underline font-bold">
            +91 789 255 1372
          </a>
          . We don’t provide in-patient services currently.
        </p>
      </div>
      <Button
        title={"More Information"}
        Icon={RiArrowRightUpLine}
        css="border border-health-green text-health-green hover:bg-anti-flash-white"
        size={25}
      />
    </div>
  );
}
