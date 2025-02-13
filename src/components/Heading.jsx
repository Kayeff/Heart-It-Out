import { twMerge } from "tailwind-merge";
import SpanText from "./SpanText";

export default function Heading({ text, color, spanText }) {
  return (
    <h1
      className={twMerge(
        "tracking-tight text-7xl font-bold text-center text-prussian-blue",
        color
      )}
    >
      {text}{" "}
      <SpanText
        text={spanText}
        className={`${
          (color === "text-prussian-blue" && "text-health-green") ||
          (color === "text-anti-flash-white" && "text-logo-yellow")
        }`}
      />
    </h1>
  );
}
