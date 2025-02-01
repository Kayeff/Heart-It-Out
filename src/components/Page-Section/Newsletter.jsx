import Button from "../UI/Button";

export default function Newsletter() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[90%] flex items-center justify-center flex-col space-y-4">
        <div className="flex items-center justify-center flex-col space-y-1">
          <h1 className="text-6xl tracking-tight font-bold text-white">
            Subscribe to{" "}
            <span className="text-logo-yellow">our newsletter</span>
          </h1>
          <h1 className="text-white">
            {" "}
            and stay up to date with everything at{" "}
            <span className="text-logo-yellow">Heart It Out!</span>
          </h1>
        </div>
        <div className="w-[50%] flex items-center justify-center space-x-2">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 bg-transparent border border-white/30 outline-none w-[70%] rounded-full text-white placeholder:text-white/40"
          />
          <Button
            title="Subscribe"
            css="px-8 py-3 hover:bg-logo-yellow text-prussian-blue rounded-full hover:shadow-black-button"
          />
        </div>
      </div>
    </div>
  );
}
