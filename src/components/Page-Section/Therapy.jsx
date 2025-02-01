import Button from "../UI/Button";

export default function Therapy({
  twist,
  src,
  focusedText,
  title,
  para,
  buttonText,
}) {
  return (
    <div className="grid grid-cols-2 gap-20 w-full p-10">
      {twist ? (
        <>
          <div className="w-full flex items-center justify-start">
            <img
              className="object-cover rounded-3xl"
              src={src}
              alt="Therapy image"
              loading="lazy"
            />
          </div>
          <div className="flex items-start justify-center flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-semibold tracking-tight text-prussian-blue">
                <span className="text-health-green">{focusedText}</span> {title}
              </h1>
              <p className="text-prussian-blue text-lg">{para}</p>
            </div>
            <Button
              title={buttonText}
              css="bg-prussian-blue text-white hover:bg-health-green hover:shadow-black-button"
              size={30}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-center flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-semibold tracking-tight text-prussian-blue">
                <span className="text-health-green">{focusedText}</span> {title}
              </h1>
              <p className="text-prussian-blue text-lg">{para}</p>
            </div>
            <Button
              title={buttonText}
              css="bg-prussian-blue text-white hover:bg-health-green hover:shadow-black-button"
              size={30}
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <img
              className="object-cover rounded-3xl"
              src={src}
              alt="Therapy image"
              loading="lazy"
            />
          </div>
        </>
      )}
    </div>
  );
}
