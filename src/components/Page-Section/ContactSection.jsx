import Button from "../UI/Button";

export default function ContactSection() {
  return (
    <>
      <div className="flex items-center justify-center flex-col space-y-2">
        <h1 className="text-6xl tracking-tight font-bold text-white">
          Interested in <span className="text-logo-yellow">our services?</span>
        </h1>
      </div>
      <Button
        title="Contact Us"
        css="px-8 py-3 hover:bg-anti-flash-white hover:text-health-green"
      />
    </>
  );
}
