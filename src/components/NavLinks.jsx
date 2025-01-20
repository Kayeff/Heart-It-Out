export default function NavLinks({ href, children }) {
  return (
    <a className="tracking-tight text-lg" href={href}>
      {children}
    </a>
  );
}
