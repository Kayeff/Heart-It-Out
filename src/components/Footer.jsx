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
import logo from "../assets/logo.svg";
import ContactLinks from "./ContactLinks";
import IconLinks from "./IconLinks";
import FooterLinks from "./FooterLinks";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-health-green text-white flex items-center justify-center cursor-default pb-4">
      <div className="w-[80%] py-4 space-y-4">
        <div className="w-full grid grid-cols-2 gap-4 py-4">
          <div className="py-4 space-y-4">
            <NavLink to="/" className="flex items-center justify-start">
              <img className="h-14" src={logo} alt="" />
            </NavLink>
            <ContactLinks Icon={RiMapPinFill}>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.622159543417!2d77.62163931346697!3d12.931988990881845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145b75c68e79%3A0xd17e7decdc131767!2sHeart%20It%20Out%20-%20Psychologists%20in%20Bangalore%20%7C%20Mental%20Health%20Events%20%26%20Products!5e0!3m2!1sen!2sbd!4v1629096610658!5m2!1sen!2sbd"
                target="_blank"
                className="flex items-start justify-center flex-col"
              >
                #42, 7th 'B' Cross
                <br />
                Koramangala 4th Block
                <br />
                Bangalore - 560034
              </a>
            </ContactLinks>
            <ContactLinks Icon={RiMailFill}>
              <a
                href="mailto: hello@heartitout.in"
                className="flex items-start justify-center flex-col font-medium"
                target="_blank"
              >
                hello@heartitout.in
              </a>
            </ContactLinks>
            <ContactLinks Icon={RiPhoneFill}>
              <a
                href="tel:+91 789 255 1372"
                className="flex items-start justify-center flex-col font-medium"
                target="_blank"
              >
                +91 789 255 1372
              </a>
            </ContactLinks>
            <div className="flex items-start justify-start space-x-4 py-4 w-max">
              <IconLinks Icon={RiWhatsappFill} href="#" />
              <IconLinks Icon={RiInstagramFill} href="#" />
              <IconLinks Icon={RiFacebookBoxFill} href="#" />
              <IconLinks Icon={RiTwitterFill} href="#" />
              <IconLinks Icon={RiLinkedinFill} href="#" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            <FooterLinks title="our services">
              <NavLink
                to="/individual-therapy"
                className="text-sm hover:text-logo-yellow"
              >
                Individual Therapy
              </NavLink>
              <NavLink
                to="/couple-therapy"
                className="text-sm hover:text-logo-yellow"
              >
                Couples Therapy
              </NavLink>
              <NavLink
                href="/family-therapy"
                className="text-sm hover:text-logo-yellow"
              >
                Family Therapy
              </NavLink>
              <NavLink
                to="/children-therapy"
                className="text-sm hover:text-logo-yellow"
              >
                Child Therapy
              </NavLink>
              <NavLink
                to="/corporate-therapy"
                className="text-sm hover:text-logo-yellow"
              >
                Corporate Therapy
              </NavLink>
              <NavLink
                to="/supervision"
                className="text-sm hover:text-logo-yellow"
              >
                Psychiatry Supervision
              </NavLink>
              <NavLink
                to="/career-counsel"
                className="text-sm hover:text-logo-yellow"
              >
                Career Counselling
              </NavLink>
            </FooterLinks>
            <FooterLinks title="explore">
              <NavLink className="text-sm hover:text-logo-yellow" to="/about">
                About Us
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/therapy">
                Therapists
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/academy">
                Academy
              </NavLink>
              <NavLink
                className="text-sm hover:text-logo-yellow"
                to="/corporate"
              >
                Corporate
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/events">
                Events
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/store">
                Products
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/">
                Careers
              </NavLink>
            </FooterLinks>
            <FooterLinks title="quick links">
              <NavLink className="text-sm hover:text-logo-yellow" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/blog">
                Blogs
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/">
                Privacy Policy
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/">
                Terms
              </NavLink>
              <NavLink className="text-sm hover:text-logo-yellow" to="/">
                Refund Policy
              </NavLink>
            </FooterLinks>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full bg-white/5 py-4 flex items-center justify-center space-x-2 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
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
            <NavLink to="#" className="font-medium hover:text-logo-yellow">
              Privacy Policy
            </NavLink>
            <NavLink to="#" className="font-medium hover:text-logo-yellow">
              Cookies
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
