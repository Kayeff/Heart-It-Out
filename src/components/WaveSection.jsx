import { memo } from "react";

const WaveSection = memo(function WaveSection({ src }) {
  return (
    <img
      className="w-full will-change-transform"
      src={src}
      alt="waves"
      loading="lazy"
    />
  );
});

export default WaveSection;
