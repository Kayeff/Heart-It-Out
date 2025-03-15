import logo from "../assets/logo.svg";
import NavbarLink from "./NavbarLink";
import { menuItems } from "../data/menuItem";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center sticky top-0 left-0 z-50 transition-top duration-500 pt-4">
      <div className="w-[70%] px-2 py-1 flex items-center justify-between backdrop-blur-xs rounded-full bg-cerulean/90 text-anti-flash-white shadow-navbar">
        <NavLink to="/">
          <img
            className="h-12"
            src={logo}
            alt="heart_it_out_logo"
            loading="lazy"
          />
        </NavLink>
        <div className="flex items-center justify-center font-medium space-x-1">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <NavbarLink
                href={menu.href}
                title={menu.label}
                icon={menu.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
