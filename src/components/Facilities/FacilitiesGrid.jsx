import Facilities from "./Facilities";
import {
  RiAwardFill,
  RiCalendar2Fill,
  RiCalendarScheduleFill,
  RiEmpathizeFill,
  RiNurseFill,
  RiPresentationFill,
  RiShoppingBag4Fill,
  RiSurveyFill,
} from "@remixicon/react";

const facilitiesData = [
  { Icon: RiEmpathizeFill, title: "Quality Health Care" },
  { Icon: RiCalendar2Fill, title: "Book anytime" },
  { Icon: RiNurseFill, title: "50+ Care Experts" },
  { Icon: RiSurveyFill, title: "Wide range of Programs" },
  {
    Icon: RiAwardFill,
    title: "Awarded best startup in Health Care 2021",
  },
  {
    Icon: RiShoppingBag4Fill,
    title: "Self Care Store",
  },
  {
    Icon: RiCalendarScheduleFill,
    title: "Events & Workshops",
  },
  {
    Icon: RiPresentationFill,
    title: "Employee Assistance",
  },
];

export default function FacilitiesGrid() {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-8 py-10">
      <h1 className="tracking-tight text-5xl font-semibold text-white">
        Facilities <span className="text-logo-yellow">we provide</span>
      </h1>
      <div className="grid grid-cols-4 grid-flow-dense gap-2 w-[80%] relative z-10">
        {facilitiesData.map((data, index) => (
          <Facilities key={index} Icon={data.Icon} title={data.title} />
        ))}
      </div>
    </div>
  );
}
