import man from "../assets/man.svg";
import couples from "../assets/couples.svg";
import family from "../assets/family.svg";
import children from "../assets/children.svg";
import corporate from "../assets/corporate.svg";
import supervise from "../assets/supervise.svg";
import psychiatrist from "../assets/psychiatrist.svg";
import counsel from "../assets/counsel.svg";
import checkup from "../assets/checkup.svg";
import store from "../assets/store.svg";
import events from "../assets/events.svg";
import blogs from "../assets/blogs.svg";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Therapy", href: "/therapy" },
  {
    label: "Services",
    submenu: [
      { title: "Individual Therapy", href: "/individual-therapy", src: man },
      { title: "Couples Therapy", href: "/couple-therapy", src: couples },
      { title: "Family Therapy", href: "/family-therapy", src: family },
      { title: "Children Therapy", href: "/children-therapy", src: children },
      {
        title: "Corporate Therapy",
        href: "/corporate-therapy",
        src: corporate,
      },
      { title: "Supervision", href: "/supervision", src: supervise },
      { title: "Psychiatrist", href: "/psychiatrist", src: psychiatrist },
      { title: "Career Counselling", href: "/career-counsel", src: counsel },
      { title: "Diagnostics", href: "/diagnostics", src: checkup },
    ],
  },
  { label: "Academy", href: "/academy" },
  {
    label: "Resources",
    submenu: [
      { title: "Store", href: "/store", src: store },
      { title: "Events", href: "/events", src: events },
      { title: "Blog", href: "/blog", src: blogs },
    ],
  },
  { label: "Contact", href: "/contact" },
];
