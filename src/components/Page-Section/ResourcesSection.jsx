import Showcase from "./Showcase";
import ImageShowcase from "../UI/ImageShowcase";
import ikiguide from "../../assets/ikiguide.webp";
import doodlebook from "../../assets/doodlebook.webp";
import periodictable from "../../assets/periodicTable.webp";
import pocketbook from "../../assets/pocketnotebooks.webp";
import event from "../../assets/event.webp";
import blog from "../../assets/blog.svg";

export default function ResourcesSection() {
  return (
    <div className="w-[80%] p-4 flex items-center justify-center flex-col space-y-10">
      <h1 className="text-5xl font-bold tracking-tight">
        Discover our <span className="text-health-green">Resources</span>
      </h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <Showcase
          buttonText="Explore Store"
          title="Self-Care Store"
          para="Our minds, bodies and earth are our three homes. Let's take care of it. Together. Explore our products which are 100% cruelty-free, 100% recyclable, Hand made by people with mental illness"
        >
          <div className="grid grid-cols-2 gap-1">
            <ImageShowcase css="small-image" src={ikiguide} />
            <ImageShowcase css="small-image" src={doodlebook} />
            <ImageShowcase css="small-image" src={periodictable} />
            <ImageShowcase css="small-image" src={pocketbook} />
          </div>
        </Showcase>
        <Showcase
          title="Events"
          para="Be Part Of A Conversation That Matters To You! Our mental health experts host online and in-person events where they guide you through relationships, anxiety, procrastination, and more!"
          buttonText="See upcomming events"
        >
          <ImageShowcase src={event} />
        </Showcase>
        <Showcase
          title="Blogs"
          para="How To Cope With Anxiety & Panic Attacks. If you have a friend or loved one who is battling with Anxiety Disorders, there are some simple ways you can be there for them through their Mental Health journey."
          buttonText="View Blog"
        >
          <ImageShowcase src={blog} />
        </Showcase>
      </div>
    </div>
  );
}
