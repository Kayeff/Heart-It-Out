import { twMerge } from "tailwind-merge";

export default function SpanText({ text, className }) {
  return <span className={twMerge("text-logo-yellow", className)}>{text}</span>;
}
