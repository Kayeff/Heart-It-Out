export default function NavLinks({ href, children }) {
  return (
    <a
      className="tracking-tight text-lg hover:text-dark-grey transition-colors"
      href={href}
    >
      {children}
    </a>
  );
}
