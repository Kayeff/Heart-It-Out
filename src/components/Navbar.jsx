import { RiAccountCircleFill } from "@remixicon/react";
import logo from "../assets/logo.svg";
import NavLinks from "./NavLinks";
import { menuItems } from "../data/menuItem";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center sticky top-0 left-0 z-50 transition-top duration-500 pt-4">
      <div className="w-[70%] px-2 py-1 flex items-center justify-between backdrop-blur-xs rounded-full bg-health-green/90 text-anti-flash-white shadow-navbar">
        <a href="#">
          <img
            className="h-12"
            src={logo}
            alt="heart_it_out_logo"
            loading="lazy"
          />
        </a>
        <div className="flex items-center justify-center font-medium space-x-1">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <NavLinks
                href="#"
                title={menu.label}
                submenu={menu.submenu}
                icon={menu.icon}
              />
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center rounded-full hover:bg-prussian-blue/20 p-2 duration-300 transition-colors cursor-pointer">
          <RiAccountCircleFill
            className="text-anti-flash-white transition-colors duration-300"
            size={40}
          />
        </button>
      </div>
    </nav>
  );
}
