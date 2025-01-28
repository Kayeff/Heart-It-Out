import {
  RiArrowRightLongLine,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiMapPinFill,
  RiPhoneFill,
  RiTwitterFill,
  RiWhatsappFill,
} from "@remixicon/react";
import logo from "../../assets/logo.svg";

function Contact({ Icon, children }) {
  return (
    <div className="flex items-start justify-start space-x-2 w-max hover:text-logo-yellow transition-colors">
      <Icon />
      {children}
    </div>
  );
}

function Icons({ Icon, href }) {
  return (
    <a
      className="text-anti-flash-white/90 hover:text-white transition-colors"
      href={href}
    >
      <Icon size={27} />
    </a>
  );
}

function Links({ title, children }) {
  return (
    <div className="flex items-center justify-start flex-col">
      <div className="space-y-4">
        <h1 className="uppercase font-medium tracking-wide text-sm">{title}</h1>
        <div className="space-y-2 flex items-start justify-start flex-col font-medium tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-cerulean text-white flex items-center justify-center cursor-default">
      <div className="w-[80%] py-4 space-y-4">
        <div className="w-full grid grid-cols-2 gap-4 py-4">
          <div className="py-4 space-y-4">
            <div className="flex items-center justify-start space-x-4">
              <img className="h-14" src={logo} alt="" />
            </div>
            <Contact Icon={RiMapPinFill}>
              <a href="#" className="flex items-start justify-center flex-col">
                <h1 className="font-medium">#42, 7th 'B' Cross</h1>
                <h1 className="font-medium">Koramangala 4th Block</h1>
                <h1 className="font-medium">Bangalore - 560034</h1>
              </a>
            </Contact>
            <Contact Icon={RiMailFill}>
              <a href="#" className="flex items-start justify-center flex-col">
                <h1 className="font-medium">hello@heartitout.in</h1>
              </a>
            </Contact>
            <Contact Icon={RiPhoneFill}>
              <a href="#" className="flex items-start justify-center flex-col">
                <h1 className="font-medium">+91 789 255 1372</h1>
              </a>
            </Contact>
            <div className="flex items-start justify-start space-x-4 py-4 w-max">
              <Icons Icon={RiWhatsappFill} href="#" />
              <Icons Icon={RiInstagramFill} href="#" />
              <Icons Icon={RiFacebookBoxFill} href="#" />
              <Icons Icon={RiTwitterFill} href="#" />
              <Icons Icon={RiLinkedinFill} href="#" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            <Links title="our services">
              <a href="#" className="text-sm hover:text-logo-yellow">
                Individual Therapy
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Couples Therapy
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Family Therapy
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Child Therapy
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Corporate Therapy
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Psychiatry Supervision
              </a>
              <a href="#" className="text-sm hover:text-logo-yellow">
                Career Counselling
              </a>
            </Links>
            <Links title="explore">
              <a className="text-sm hover:text-logo-yellow" href="">
                About Us
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Therapists
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Academy
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Corporate
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Events
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Products
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Careers
              </a>
            </Links>
            <Links title="quick links">
              <a className="text-sm hover:text-logo-yellow" href="">
                Blogs
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Privacy Policy
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Terms
              </a>
              <a className="text-sm hover:text-logo-yellow" href="">
                Refund Policy
              </a>
            </Links>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full bg-white/5 py-4 flex items-center justify-center space-x-2 rounded-2xl hover:bg-white/10 transition-colors">
            <span className="font-medium">
              We are looking reinforcements for our team. Join us.
            </span>
            <span>
              <RiArrowRightLongLine />
            </span>
          </button>
        </div>
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="w-full flex items-center justify-between">
          <h1 className="font-medium">
            ©2025 Heart It Out Pvt. Ltd. All rights reserved.
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <a href="#" className="font-medium hover:text-logo-yellow">
              Privacy Policy
            </a>
            <a href="#" className="font-medium hover:text-logo-yellow">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
