import logo from "../assets/logo.svg";
import NavbarLink from "./NavbarLink";
import { menuItems } from "../data/menuItem";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center sticky top-0 left-0 z-50 duration-500 bg-health-green text-anti-flash-white">
      <div className="w-[70%] p-2 flex items-center justify-between">
        <NavLink to="/">
          <img
            className="h-12"
            src={logo}
            alt="heart_it_out_logo"
            loading="lazy"
          />
        </NavLink>
        <div className="flex items-center justify-center font-medium gap-5 pr-4">
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
