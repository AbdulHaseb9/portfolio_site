import React from "react";
import javascript from "/skills/js.png";
import typescript from "/skills/typescript.png";
import bootstrap from "/skills/bootstrap.png";
import css from "/skills/css.png";
import expressjs from "/skills/expressjs.webp";
import html from "/skills/html.png";
import mongodb from "/skills/mongodb.svg";
import nodejs from "/skills/nodejs.png";
import reactjs from "/skills/reactjs.png";
import tailwind from "/skills/tailwindcss.png";
import github from "/skills/github.png";
import postman from "/skills/postman.png";
import firebase from "/skills/firebase.png";
import netlify from "/skills/netlify.png";
import figma from "/skills/figma.png";

export default function Skills() {
  const skills = [
    {
      image: reactjs,
    },
    {
      image: javascript,
    },
    {
      image: typescript,
    },
    {
      image: expressjs,
    },
    {
      image: nodejs,
    },
    {
      image: mongodb,
    },
    {
      image: tailwind,
    },
    {
      image: bootstrap,
    },
    {
      image: css,
    },
    {
      image: html,
    },
    {
      image: github,
    },
    {
      image: firebase,
    },
    {
      image: postman,
    },
    {
      image: netlify,
    },
    {
      image: figma,
    },
  ];

  return (
    <div className="bg-secondary lg:h-screen w-full py-20">
      <h2
        className="text-center text-3xl font-semibold my-4 md:text-4xl"
        data-aos="fade-down"
      >
        My <span className="text-primary">Expertise</span>
      </h2>
      <div className="my-7 grid grid-cols-2 mobilelarge:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 place-items-center gap-y-8">
        {skills.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt="Skill"
            className="w-24 hover:scale-110 cursor-grab transition-all duration-200"
            data-aos="fade-up"
          />
        ))}
      </div>
    </div>
  );
}
