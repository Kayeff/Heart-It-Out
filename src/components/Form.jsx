import Button from "./Button";

export default function Form() {
  return (
    <form className="w-full rounded-3xl p-8 flex items-center justify-center flex-col space-y-4 text-anti-flash-white bg-health-green z-10 border border-prussian-blue/30 shadow-cards">
      <div className="w-full flex items-start justify-start flex-col space-y-1">
        <h1 className="font-medium">Name: </h1>
        <input
          type="text"
          placeholder="Your name"
          className="p-3 rounded-lg w-full outline-0 border border-anti-flash-white/30"
        />
      </div>
      <div className="w-full flex items-start justify-start flex-col space-y-1">
        <h1 className="font-medium">E-mail: </h1>
        <input
          type="email"
          placeholder="Your email address"
          className="p-3 rounded-lg w-full outline-0 border border-anti-flash-white/30"
        />
      </div>
      <div className="w-full flex items-start justify-start flex-col space-y-1">
        <h1 className="font-medium">Message: </h1>
        <textarea
          placeholder="Your message"
          className="p-3 rounded-lg w-full outline-0 border border-anti-flash-white/30 resize-none h-32"
        />
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <Button title={"Send it"} css={"w-[70%] hover:bg-logo-yellow"} />
      </div>
    </form>
  );
}
