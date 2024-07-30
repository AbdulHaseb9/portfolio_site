import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { saveAs } from "file-saver";

export default function Hero() {
  const downloadPdf = () => {
    const pdfUrl = "/myresume.pdf"; // Adjust the path accordingly
    const fileName = "haseebsheikh_resume.pdf";
    saveAs(pdfUrl, fileName);
  };

  return (
    <div className="px-5 w-full flex items-center justify-center relative h-screen md:px-10 xl:px-20">
      <div data-aos="fade-up">
        <h1 className="text-4xl mobilelarge:text-3xl md:text-5xl font-semibold">
          Hi, I'm{" "}
          <span className="text-primary mobilelarge:text-4xl md:text-5xl">
            Haseeb Sheikh
          </span>
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Mern Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-3xl font-bold inline-block my-3"
          repeat={Infinity}
        />
        <p className="md:w-7/12 lg:w-5/12 text-sm fonsem text-gray text-justify">
          I am a passionate and dedicated software developer with 4 months of internship experience and 7 months as a MERN stack instructor. I thrive on learning and building dynamic web applications, always eager to explore new technologies and challenges.</p>
        <Link
          to={"myskills"}
          data-aos="fade-right"
          className="bg-primary text-white px-4 py-2 rounded-md my-3 border-primary border-2 hover:bg-transparent hover:text-primary"
        >
          My Skills
        </Link>
        <button
          onClick={downloadPdf}
          data-aos="fade-left"
          className="bg-primary text-white px-4 py-2 rounded-md my-3 mx-3 border-primary border-2 hover:bg-transparent hover:text-primary"
        >
          Download CV
        </button>
      </div>
      <div className="text-7xl text-[#aeaeae] tracking-widest hidden md:block absolute -right-40 md:bottom-52 lg:bottom-60 xl:bottom-72 -rotate-90">
        Portfolio
      </div>
    </div>
  );
}

// bg-profile-image bg-no-repeat bg-right-top
