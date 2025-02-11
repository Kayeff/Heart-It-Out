import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function MenuBar({ submenu, title }) {
  const menuRef = useRef(null);

  useGSAP(
    () => {
      const menuElement = menuRef.current;
      if (menuElement) {
        gsap.set(menuElement, { opacity: 0, y: -10 });

        if (submenu.length > 0) {
          gsap.to(menuElement, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    },
    { scope: menuRef }
  );

  return (
    <menu
      ref={menuRef}
      className="absolute left-1/2 -translate-x-1/2 w-96 bg-anti-flash-white border border-prussian-blue/20 rounded-xl mt-1.5 shadow-navbar tooltip-triangle cursor-default"
    >
      <div className="w-full p-2">
        {submenu.map((menu, index) => (
          <a
            href="#"
            className="w-full hover:bg-health-green/10 flex items-center justify-start rounded-md transition-all space-x-4 group p-2 cursor-pointer duration-500"
            key={index}
          >
            <img
              src={menu.src}
              className="h-8 group-hover:scale-110 transition-all duration-500"
              alt=""
            />
            <h1
              href={menu.href || "#"}
              className="text-dark-grey transition-colors font-medium group-hover:text-health-green"
            >
              {menu.title}
            </h1>
          </a>
        ))}
      </div>
    </menu>
  );
}
