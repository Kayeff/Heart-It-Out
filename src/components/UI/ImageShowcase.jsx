export default function ImageShowcase({ src, css }) {
  return (
    <div className={`${css} rounded-3xl`}>
      <img
        className="w-full h-full object-cover rounded-xl object-center"
        src={src}
        alt="store_img"
      />
    </div>
  );
}
