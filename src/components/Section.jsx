import { twMerge } from "tailwind-merge";

export default function Section({ classes, children }) {
  return (
    <section className={`${twMerge("w-full", classes)}`}>{children}</section>
  );
}
