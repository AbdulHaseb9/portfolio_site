import React from "react";

export default function Journey() {
  return (
    <div
      id="journey"
      className="w-full bg-secondary_color py-10 padding"
    >
      <h2 className="text-center text-4xl font-semibold text-white">
        My <span className="text-primary_color">Journey</span>
      </h2>
      <div className="w-full my-14 flex justify-center flex-col md:flex-row gap-y-9">
        {/* Education Section */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-white text-xl font-semibold tracking-[2px]">
            Education
          </h2>
          <div className="w-full border-primary_color px-6 space-y-5 grid md:grid-cols-2">
            {/* Enter Education */}
            <div className="w-full md:w-80 p-5 rounded-md border border-primary_color relative before:h-48 before:w-[2px] before:absolute before:top-0 before:-left-10 before:bg-primary_color after:h-4 after:w-4 after:bg-primary_color after:absolute after:top-0 after:-left-[46px] after:rounded-full before:hidden md:before:block after:hidden md:after:block md:col-span-2">
              <h4 className="text-primary_color font-semibold text-xs flex items-center gap-x-3">
                <p className="bg-primary_color h-3 w-3 rounded-full"></p>
                2022 - 2024
              </h4>
              <h3 className="text-white font-semibold tracking-wider text-base my-3">
                Govt - Polytechnic Institute Boys , Landhi
              </h3>
              <p className="text-[#eaeaea] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus recusandae facere.
              </p>
            </div>
            {/* Matric Education */}
            <div className="w-full md:w-80 p-5 rounded-md border border-primary_color relative before:h-48 before:w-[2px] before:absolute before:top-0 before:-left-10 before:bg-primary_color after:h-4 after:w-4 after:bg-primary_color after:absolute after:top-0 after:-left-[46px] after:rounded-full before:hidden md:before:block after:hidden md:after:block md:col-span-2">
              <h4 className="text-primary_color font-semibold text-xs flex items-center gap-x-3">
                <p className="bg-primary_color h-3 w-3 rounded-full"></p>
                2021
              </h4>
              <h3 className="text-white font-semibold tracking-wider text-base my-3">
                Karachi Cadet School
              </h3>
              <p className="text-[#eaeaea] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus recusandae facere.
              </p>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-white text-xl font-semibold tracking-[2px]">
            Experience
          </h2>
          <div className="w-full border-primary_color px-6 grid md:grid-cols-2 gap-y-7">
            {/* Smash Code internship */}
            <div className="w-full md:w-80 p-5 rounded-md border border-primary_color relative before:h-48 before:w-[2px] before:absolute before:top-0 before:-left-10 before:bg-primary_color after:h-4 after:w-4 after:bg-primary_color after:absolute after:top-0 after:-left-[46px] after:rounded-full before:hidden lg:before:block after:hidden lg:after:block md:col-span-2 ">
              <h4 className="text-primary_color font-semibold text-xs flex items-center gap-x-3">
                <p className="bg-primary_color h-3 w-3 rounded-full"></p>
                2024 Feb - Present
              </h4>
              <h3 className="text-white font-semibold tracking-wider text-base my-3">
                Smash Code
              </h3>
              <p className="text-[#eaeaea] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus recusandae facere.
              </p>
            </div>
            {/* Lecturer in Learnify Academy */}
            <div className="w-full md:w-80 p-5 rounded-md border border-primary_color relative before:h-48 before:w-[2px] before:absolute before:top-0 before:-left-10 before:bg-primary_color after:h-4 after:w-4 after:bg-primary_color after:absolute after:top-0 after:-left-[46px] after:rounded-full before:hidden lg:before:block after:hidden lg:after:block md:col-span-2 ">
              <h4 className="text-primary_color font-semibold text-xs flex items-center gap-x-3">
                <p className="bg-primary_color h-3 w-3 rounded-full"></p>
                2023 Nov - Present
              </h4>
              <h3 className="text-white font-semibold tracking-wider text-base my-3">
                Learnify Academy
              </h3>
              <p className="text-[#eaeaea] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus recusandae facere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
