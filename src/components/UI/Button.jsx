import { twMerge } from "tailwind-merge";

export default function Button({ title, css, Icon, size }) {
  return (
    <button
      className={`${twMerge(
        "p-4 rounded-lg font-medium flex items-center justify-center transition-all hover:shadow-button bg-white text-dark-grey",
        css
      )}`}
    >
      <span>{title}</span>
      {Icon ? <Icon size={size} /> : null}
    </button>
  );
}
