export default function MenuBar({ submenu, handleLeave }) {
  return (
    <a
      onMouseLeave={handleLeave}
      className="absolute -translate-x-1/2 w-96 bg-anti-flash-white rounded-xl mt-1.5 shadow-md p-4 tooltip-triangle "
    >
      {submenu.map((menu, index) => (
        <div
          className="w-full hover:bg-health-green/10 flex items-center justify-start rounded-md transition-all space-x-4 group p-2 cursor-pointer"
          key={index}
        >
          <img
            src={menu.src}
            className="h-8 group-hover:scale-110 transition-all duration-300"
            alt=""
          />
          <h1
            href={menu.href || "#"}
            className="text-dark-grey transition-colors font-medium group-hover:text-health-green"
          >
            {menu.title}
          </h1>
        </div>
      ))}
    </a>
  );
}
