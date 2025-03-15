import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ title, href }) {
  return (
    <div className="relative w-max">
      <NavLink
        to={href}
        className={({ isActive }) =>
          twMerge(
            "transition-all duration-300 flex items-center justify-center px-3 py-2 hover:bg-prussian-blue/20 rounded-full",
            isActive && "text-logo-yellow"
          )
        }
      >
        {title}
      </NavLink>
    </div>
  );
}
