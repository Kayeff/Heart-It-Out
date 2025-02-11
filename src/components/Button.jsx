import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiGeminiFill } from "@remixicon/react";

gsap.registerPlugin(useGSAP);

export default function Button({ title, css, Icon, size }) {
  const buttonRef = useRef(null);
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current.querySelector(".star"), {
      opacity: 1,
      scale: 1,
      rotate: 180,
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current.querySelector(".star"), {
      opacity: 0,
      scale: 0,
      rotate: 0,
      duration: 0.5,
    });
  };

  useGSAP(() => {
    return () => {
      gsap.context(() => {}).revert();
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${twMerge(
        "px-6 py-4 rounded-full font-medium flex items-center justify-center transition-all hover:shadow-black-button duration-500 bg-white text-dark-grey relative cursor-pointer",
        css
      )}`}
    >
      <span>{title}</span>
      {Icon ? <Icon size={size} /> : null}
      <span className="absolute -top-2 -left-2 opacity-0 scale-0 star text-prussian-blue">
        <RiGeminiFill size={30} />
      </span>
    </button>
  );
}
