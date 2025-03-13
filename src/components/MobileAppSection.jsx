import Advantage from "./Advantage";
import mobile from "../assets/mobileapp.webp";
import Button from "./Button";
import { app_adv } from "../data/app_advdata";

export default function MobileAppSection() {
  return (
    <div className="w-[70%] grid grid-cols-2 gap-4">
      <div className="p-4 flex items-center justify-start">
        <img
          className="w-full object-cover"
          src={mobile}
          alt="heartitout-mobile"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex items-center justify-center flex-col">
        <div className="w-full flex items-start justify-center flex-col space-y-8">
          <h1 className="font-semibold tracking-tight text-5xl text-whitesmoke">
            <span className="text-logo-yellow"> Heart It Out</span> - mobile app
          </h1>
          <div className="w-full space-y-4 flex items-start justify-center flex-col">
            {app_adv.map((item) => (
              <Advantage key={item.id} title={item.title} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              title="Log in now"
              css="px-10 hover:bg-logo-yellow font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
