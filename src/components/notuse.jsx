import React from 'react'
import greenmind from "../assets/projects/greenmind.png";
import logoipsum from "../assets/projects/logoipsum.png";
import abrothers from "../assets/projects/abrothers.png";
import { Link } from 'react-router-dom';

export default function Notuse() {

    const projectsdata = [
        {
            title: "ABrothers E-com",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
            image: abrothers,
            githuburl: "https://github.com/AbdulHaseb9/abrothers",
            liveurl: "https://abrothers.vercel.app/",
        },
        {
            title: "Green Mind",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
            image: greenmind,
            githuburl: "https://github.com/AbdulHaseb9/Greenmind",
            liveurl: "https://hsgreenmind.web.app/",
        },
        {
            title: "Logo Ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis eaque veniam voluptatum nostrum ipsa facilis maxime rem laboriosam quaerat mollitia blanditiis libero deleniti ut ex quo, vero reprehenderit at!",
            image: logoipsum,
            githuburl: "https://github.com/AbdulHaseb9/logoipsum",
            liveurl: "https://logoipsumweb.netlify.app/#",
        },
    ];
    return (
        <div className="slider-container md:h-screen w-full bg-bg_color py-12 padding overflow-hidden">
            <h2 className="text-center text-4xl font-semibold text-white tracking-wider">
                My <span className="text-primary_color">Projects</span>
            </h2>
            <div className="w-full flex justify-center relative">
                {projectsdata.map((item, index) => (
                    <div
                        key={index}
                        className="py-8 flex gap-x-5 flex-col md:flex-row md:h-96 large:h-[440px] overflow-hidden"
                    >
                        <div className="h-72 md:h-full w-full md:w-1/2 lg:p-10">
                            <img
                                src={item.image}
                                className="w-full h-full object-cover object-top -z-30"
                                alt={item.title}
                            />
                        </div>
                        <div className="w-full md:w-1/2 lg:p-10 mt-8 md:mt-0">
                            <h3 className="text-primary_color text-2xl font-semibold tracking-wider">
                                {item.title}
                            </h3>
                            <p className="text-lg my-5 text-text_secondary_color text-justify">
                                {item.description}
                            </p>
                            <div className="space-x-6 my-9">
                                <Link
                                    href={item.liveurl}
                                    target="_blank"
                                    className="text-white font-semibold tracking-wider px-4 py-3 md:px-6 md:py-3 border border-primary_color rounded-full cursor-pointer hover:bg-primary_color"
                                >
                                    Live Demo
                                </Link>
                                <Link
                                    href={item.githuburl}
                                    target="_blank"
                                    className="text-white font-semibold tracking-wider px-4 py-3 md:px-6 md:py-3 border border-primary_color rounded-full cursor-pointer hover:bg-primary_color"
                                >
                                    Get Code
                                </Link>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}