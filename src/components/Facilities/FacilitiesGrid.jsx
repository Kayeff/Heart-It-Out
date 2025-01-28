import Facilities from "./Facilities";
import {
  RiAwardFill,
  RiCalendar2Fill,
  RiEmpathizeFill,
  RiNurseFill,
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
];

export default function FacilitiesGrid() {
  return (
    <div className="grid grid-cols-3 grid-flow-dense gap-3 w-[80%]">
      {facilitiesData.map((data, index) => (
        <Facilities key={index} Icon={data.Icon} title={data.title} />
      ))}
    </div>
  );
}
