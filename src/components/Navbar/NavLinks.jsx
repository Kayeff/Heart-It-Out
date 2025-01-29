import { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import { RiArrowDropDownFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

export default function NavLinks({ title, submenu = [] }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navRef = useRef(null);
  const handleClick = () => setIsMenuVisible((prev) => !prev);

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
          "hover:text-dark-grey transition-colors flex items-center justify-center",
          isMenuVisible ? "text-dark-grey" : ""
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
