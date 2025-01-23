import { RiAccountCircleFill } from "@remixicon/react";
import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";
import Button from "../UI/Button";

export default function Navbar() {
  return (
    <nav className="w-full px-16 py-4 flex items-center justify-between sticky top-0 left-0 bg-white z-50">
      <a href="#">
        <img className="h-12" src={logo} alt="heart_it_out_logo" />
      </a>
      <div className="flex items-center justify-center space-x-4 font-medium text-health-green">
        <NavLinks href={"#"}>Home</NavLinks>
        <NavLinks href={"#"}>Services</NavLinks>
        <NavLinks href={"#"}>Academy</NavLinks>
        <NavLinks href={"#"}>Store</NavLinks>
        <NavLinks href={"#"}>Corporate</NavLinks>
        <NavLinks href={"#"}>Blog</NavLinks>
        <NavLinks href={"#"}>Contact</NavLinks>
      </div>
      <div>
        <Button
          Icon={RiAccountCircleFill}
          css={
            "bg-health-green text-white space-x-2 px-4 py-3 hover:shadow-button"
          }
          title={"Log in"}
          size={20}
        />
      </div>
    </nav>
  );
}
