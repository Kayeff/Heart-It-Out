export default function FooterLinks({ title, children }) {
  return (
    <div className="flex items-center justify-start flex-col">
      <div className="space-y-4">
        <h1 className="uppercase font-medium tracking-wide text-sm text-anti-flash-white/80">
          {title}
        </h1>
        <div className="space-y-2 flex items-start justify-start flex-col font-medium tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
}
