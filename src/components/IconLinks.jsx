export default function IconLinks({ Icon, href }) {
  return (
    <a
      className="text-anti-flash-white/90 hover:text-white transition-colors"
      href={href}
    >
      <Icon size={27} />
    </a>
  );
}
