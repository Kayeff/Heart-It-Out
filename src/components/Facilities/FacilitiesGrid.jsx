import Facilities from "./Facilities";
import {
  RiCalendar2Fill,
  RiEmpathizeFill,
  RiNurseFill,
  RiSurveyFill,
} from "@remixicon/react";

const facilitiesData = [
  { Icon: RiEmpathizeFill, title: "Quality Health Care" },
  { Icon: RiCalendar2Fill, title: "Book anytime" },
  { Icon: RiNurseFill, title: "50+ Care Experts" },
  { Icon: RiSurveyFill, title: "Our Programs" },
];

export default function FacilitiesGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {facilitiesData.map((data, index) => (
        <Facilities key={index} Icon={data.Icon} title={data.title} />
      ))}
    </div>
  );
}
