import { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import { RiArrowDropDownFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

export default function NavLinks({ title, submenu = [] }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleClick = () => setIsMenuVisible((prev) => !prev);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    if (isMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible]);

  return (
    <div className="relative w-max" ref={navRef}>
      <button
        className={`${twMerge(
          "hover:text-dark-grey transition-all duration-300 flex items-center justify-center px-3 py-2 hover:bg-slate-600/5 rounded-full",
          isMenuVisible ? "text-dark-grey bg-slate-600/5" : ""
        )}`}
        onClick={handleClick}
      >
        {title}
        {submenu.length > 0 && (
          <span className="-mx-1">
            <RiArrowDropDownFill />
          </span>
        )}
      </button>
      {submenu.length > 0 &&
        (isMenuVisible ? <MenuBar title={title} submenu={submenu} /> : null)}
    </div>
  );
}
