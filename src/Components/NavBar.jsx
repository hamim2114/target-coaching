import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/logo.png";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navMenu = useRef();
  const closeOpenMenus = (e) => {
    if (navMenu.current && nav && !navMenu.current.contains(e.target)) {
      setNav(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <nav  data-aos='fade-down' className="w-screen fixed z-40 ">
      <div className="md:px-[5rem]  bg-gray-100 w-full h-[60px] drop-shadow-lg flex justify-between items-center md:py-0 py-2">
        <div>
          <img className="sm:w-[250px] pl-2 w-[200px]" src={logo} alt="" />
        </div>
        <div>
          <div className="hidden sm:flex">
            <AnchorLink href="#home" className="ml-8">
              Home
            </AnchorLink>
            <AnchorLink href="#about" className="ml-8">
              About Us
            </AnchorLink>
            <AnchorLink href="#course" className="ml-8">
              Courses
            </AnchorLink>
            <AnchorLink href="#teacher" className="ml-8">
              Advisors
            </AnchorLink>
            <AnchorLink href="#event" className="ml-8">
              Event
            </AnchorLink>
            <AnchorLink href="#contact" className="ml-8">
              Contact
            </AnchorLink>
            <AnchorLink href="#blog" className="ml-8">
              Blog
            </AnchorLink>
          </div>
        </div>
        {/* mobile menu */}
        <div ref={navMenu} className="sm:hidden pr-2 z-40" onClick={() => setNav(!nav)}>
          {nav ? <BiMenuAltRight size={30} /> : <BiMenu size={30} />}
        </div>

        <div
          className={
            !nav
              ? "absolute  w-full flex flex-col bg-slate-200 translate-y-[-100%]  duration-1000 "
              : " absolute  w-full mt-[23rem] flex flex-col bg-slate-200 duration-500 "
          }
        >
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#home"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Home
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#about"
            className="p-2 ml-2 border-b border-slate-300"
          >
            About Us
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#course"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Courses
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#teacher"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Advisors
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#event"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Event
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#contact"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Contact
          </AnchorLink>
          <AnchorLink
            onClick={() => setNav(!n)}
            href="#blog"
            className="p-2 ml-2 border-b border-slate-300"
          >
            Blog
          </AnchorLink>
          <button className="bg-blue-600 text-white py-[3px]  hover:bg-transparent hover:text-black duration-500 border border-blue-500">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
