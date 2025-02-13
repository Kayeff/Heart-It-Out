import { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import { RiArrowDropDownFill } from "@remixicon/react";
import { twMerge } from "tailwind-merge";
import { NavLink, useLocation } from "react-router-dom";

export default function NavLinks({ title, href, submenu = [] }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const isActive = location.pathname === href;

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

  const handleClick = (event) => {
    if (submenu.length > 0) {
      event.preventDefault();
      setIsMenuVisible((prev) => !prev);
    }
  };

  return (
    <div className="relative w-max" ref={navRef}>
      <NavLink
        to={submenu.length > 0 ? "#" : href}
        className={`${twMerge(
          "transition-all duration-300 flex items-center justify-center px-3 py-2 hover:bg-prussian-blue/20 rounded-full",
          isActive ? "text-logo-yellow bg-prussian-blue/20" : ""
        )}`}
        onClick={handleClick}
      >
        {title}
        {submenu.length > 0 && (
          <span className="-mx-1">
            <RiArrowDropDownFill />
          </span>
        )}
      </NavLink>
      {submenu.length > 0 &&
        (isMenuVisible ? <MenuBar submenu={submenu} /> : null)}
    </div>
  );
}
