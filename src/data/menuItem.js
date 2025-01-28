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
    { label: "Home", icon: false, submenu: [] },
    {
      label: "Services",
      submenu: [
        { title: "Individual Therapy",src: man},
        { title: "Couples Therapy",src: couples},
        { title: "Family Therapy",src: family},
        { title: "Children Therapy",src: children},
        { title: "Corporate Therapy",src: corporate},
        { title: "Supervision",src: supervise},
        { title: "Psychiatrist",src:  psychiatrist},
        { title: "Career Counselling",src: counsel},
        { title: "Diagnostics",src: checkup},
      ],
    },
    { 
      label: "Academy", 
    },
    { label: "Resources", submenu: [
      {title: "Store", src: store},
      {title: "Events", src: events},
      {title: "Blog", src: blogs},
    ] },
    { label: "Careers", submenu: [] },
    { label: "Contact", submenu: [] },
    { label: "About", submenu: [] },
  ];