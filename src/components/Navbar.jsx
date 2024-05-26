import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [respnav, setrespnav] = useState(false);
  const [fixnavbg, setfixnavbg] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setfixnavbg(true) : setfixnavbg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    // return () => {
    //   window.removeEventListener("scroll", listenScrollEvent);
    // };
  }, []);

  return (
    <>
      {/*  Navbar */}
      <nav
        className={`z-30 fixed py-3 top-0 left-0 w-full flex items-center justify-between text-white padding ${fixnavbg ? `bg-secondary_color` : null
          }`}>
        {/* Logo */}
        <div className={`z-30 flex items-center gap-x-5`}>
          <button className="md:hidden" onClick={() => setrespnav(true)}>
            <FaBarsStaggered />
          </button>
          <h3 className="text-2xl large:text-3xl">Haseeb.</h3>
        </div>
        {/* NavLinks */}
        <div className="hidden md:block space-x-8 md:text-sm lg:text-lg font-semibold">
          <Link
            to={"#main"}
            className={`text-white`}
          >
            Home
          </Link>
          <Link
            to={"#journey"}
            className={`text-white`}
          >
            About
          </Link>
          <Link
            to={"#skill"}
            className={`text-white`}
          >
            Skills
          </Link>
          <Link
            to={"#projects"}
            className={`text-white`}
          >
            Projects
          </Link>
          <Link
            to={"#contactme"}
            className={`text-white`}
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Responsive sidebar that enable when user click on hamburger */}
      <div
        className={`z-50 transition-all duration-500 bg-bg_color w-9/12 h-screen fixed ${respnav ? `-left-0` : `-left-full`
          } top-0 flex flex-col justify-center items-center md:hidden`}
      >
        <div className="w-full text-white h-1/6 py-12 px-12 text-2xl flex justify-end">
          <ImCross onClick={() => setrespnav(false)} />
        </div>
        <div className="h-5/6 text-center space-y-4 md:text-sm lg:text-lg font-semibold">
          <Link
            to={"#main"}
            onClick={() => setrespnav(false)}
            className={`block text-white`}
          >
            Home
          </Link>
          <Link
            to={"#journey"}
            onClick={() => setrespnav(false)}
            className={`block text-white`}
          >
            About
          </Link>
          <Link
            to={"#skill"}
            onClick={() => setrespnav(false)}
            className={`block text-white`}
          >
            Skills
          </Link>
          <Link
            to={"#projects"}
            onClick={() => setrespnav(false)}
            className={`block text-white`}
          >
            Projects
          </Link>
          <Link
            to={"#contactme"}
            onClick={() => setrespnav(false)}
            className={`block text-white`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
