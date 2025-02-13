export default function ContactLinks({ Icon, children }) {
  return (
    <div className="flex items-start justify-start space-x-2 w-max transition-colors duration-300 hover:text-logo-yellow">
      <Icon />
      <div>{children}</div>
    </div>
  );
}
