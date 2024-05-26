import React from "react";
import { FaFacebookF } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <div
      id="main"
      className="padding bg-bg_color md:h-screen w-full flex items-center py-28 text-center md:text-left"
    >
      <div>
        <h2 className="text-white font-bold text-4xl text-center md:text-left md:text-5xl mb-4">
          Hi, I'm Haseeb Sheikh
        </h2>
        {/* npm typing animation */}
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Mern-Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="-z-10 text-primary_color font-semibold text-2xl text-center md:text-3xl md:text-left"
          repeat={Infinity}
        />
        <p className="text-white text-justify w-full md:w-1/2 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam
          quam harum beatae totam incidunt rerum maxime dignissimos ducimus,
          aliquid animi exercitationem sequi cumque perspiciatis expedita
          dolorum doloribus eius deleniti.
        </p>
        {/* Buttons */}
        <div className="flex justify-center space-x-9 md:block my-5">
          <Link
            to={resume}
            target="_blank"
            // rel="noopener noreferrer"
            // locale={false}
            download
            className="border border-primary_color text-primary_color px-3 md:px-7 py-3 rounded-md font-bold hover:bg-primary_color hover:text-black"
          >
            Download CV
          </Link>
          <Link
            href="#contactme"
            className="border border-primary_color text-primary_color px-3 md:px-7 py-3 rounded-md font-bold hover:bg-primary_color hover:text-black"
          >
            Let's Talk
          </Link>
        </div>
        {/* Social Links */}
        <div className="text-white flex justify-center md:justify-normal gap-x-7 text-xl mt-14">
          <a
            href="https://www.facebook.com/profile.php?id=100086119372055"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaFacebookF />
          </a>
          {/* <a
            href="#"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaLinkedinIn />
          </a> */}
          {/* <a href="#" target="_blank" className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color">
            <FaXTwitter />
          </a> */}
          <a
            href="https://github.com/abdulhaseb9"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/haseebsheikhofficial7/"
            target="_blank"
            className="border border-white rounded-full p-2 cursor-pointer hover:text-primary_color hover:border-primary_color"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
