import { twMerge } from "tailwind-merge";

export default function ImageShowcase({ src, className }) {
  return (
    <img
      className={twMerge("w-96 h-96 object-cover", className)}
      src={src}
      alt="store_img"
      loading="lazy"
    />
  );
}
