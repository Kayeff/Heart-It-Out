import { useState } from "react";
import MenuBar from "./MenuBar";

export default function NavLinks({ href, title, submenu = [] }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div
      onMouseLeave={() => setIsMenuVisible(false)}
      onMouseMove={() => setIsMenuVisible(true)}
      className="relative p-1"
    >
      <a
        className="tracking-tight hover:text-dark-grey transition-colors flex items-center justify-center"
        href={href}
        aria-haspopup={submenu.length > 0}
      >
        {title}
      </a>
      {submenu.length > 0 &&
        (isMenuVisible ? (
          <MenuBar
            submenu={submenu}
            handleLeave={() => setIsMenuVisible(false)}
          />
        ) : null)}
    </div>
  );
}
