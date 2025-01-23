export default function NavLinks({ href, children }) {
  return (
    <a
      className="tracking-tight hover:text-dark-grey transition-colors"
      href={href}
    >
      {children}
    </a>
  );
}
