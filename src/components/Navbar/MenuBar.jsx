export default function MenuBar({ submenu, handleLeave }) {
  return (
    <div
      onMouseLeave={handleLeave}
      className="absolute -translate-x-1/2 w-96 bg-white rounded-md mt-1 shadow-md p-4 border border-health-green/70"
    >
      {submenu.map((menu, index) => (
        <div
          className="w-full hover:bg-health-green/10 flex items-center justify-start rounded-md transition-all space-x-1"
          key={index}
        >
          <img src={menu.src} className="h-8" alt="" />
          <a
            href={menu.href || "#"}
            className="w-full text-dark-grey hover:text-health-green transition-colors px-4 py-3 font-medium"
          >
            {menu.title}
          </a>
        </div>
      ))}
    </div>
  );
}
