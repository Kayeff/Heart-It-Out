import { RiAccountCircleFill } from "@remixicon/react";
import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";
import Button from "../UI/Button";
import { menuItems } from "../../data/menuItem";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollPosition = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPosition = window.pageYOffset;
      prevScrollPosition.current > currScrollPosition
        ? setScrollDirection("up")
        : setScrollDirection("down");

      prevScrollPosition.current = currScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <nav
      className={`${twMerge(
        "w-full px-16 py-4 flex items-center justify-between fixed top-0 left-0 z-50 bg-anti-flash-white text-health-green transition-top duration-500",
        scrollDirection === "up" ? "top-0" : "top-[-100px]"
      )}`}
    >
      <a href="#">
        <img className="h-12" src={logo} alt="heart_it_out_logo" />
      </a>
      <div className="flex items-center justify-center font-medium space-x-5">
        {menuItems.map((menu, index) => (
          <div key={index} className="relative">
            <NavLinks
              href="#"
              title={menu.label}
              submenu={menu.submenu}
              icon={menu.icon}
            />
          </div>
        ))}
      </div>
      <Button
        Icon={RiAccountCircleFill}
        css="bg-health-green text-white px-4 py-3 space-x-0.5 hover:shadow-button"
        title={"Log in"}
        size={21}
      />
    </nav>
  );
}
