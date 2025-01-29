export default function MenuBar({ submenu, title }) {
  return (
    <menu className="absolute left-1/2 -translate-x-1/2 w-96 bg-anti-flash-white border border-prussian-blue rounded-xl mt-1.5 shadow-navbar tooltip-triangle cursor-default">
      <div className="w-full p-2">
        {submenu.map((menu, index) => (
          <a
            href="#"
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
          </a>
        ))}
      </div>
      <div className="w-full flex items-center justify-center border-t border-prussian-blue rounded-b-xl p-3 bg-prussian-blue text-pretty">
        <h1 className="text-anti-flash-white tracking-wide">{title}</h1>
      </div>
    </menu>
  );
}
