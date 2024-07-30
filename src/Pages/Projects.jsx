import React, { useState } from "react";
import { mywork } from "../components/Work";

export default function Projects() {
  const [projects, setProjects] = useState('all')
  return (
    <div className=" w-full bg-secondary py-20 px-5 md:px-20">
      <h3 className="text-3xl md:text-4xl text-center font-semibold font-roman [word-spacing:-8px]">
        Some <span className="text-primary">of My</span> Work
      </h3>
      {/* Filter Btns */}
      <div className="flex justify-center flex-wrap my-5 gap-x-5 gap-y-3">
        <button
          onClick={() => setProjects('all')}
          className={`rounded-md border-primary px-4 py-2 border-2 ${projects == 'all' ? `bg-transparent text-primary ` : `bg-primary text-white`}`}
        >
          All
        </button>
        <button
          onClick={() => setProjects('javascript')}
          className={`rounded-md border-primary px-4 py-2 border-2 ${projects == 'javascript' ? `bg-transparent text-primary ` : `bg-primary text-white`}`}
        >
          Javascript
        </button>
        <button
          onClick={() => setProjects('react')}
          className={`rounded-md border-primary px-4 py-2 border-2 ${projects == 'react' ? `bg-transparent text-primary ` : `bg-primary text-white`}`}
        >
          React
        </button>
        <button
          onClick={() => setProjects('fullstack')}
          className={`px-4 py-2 rounded-md border-primary border-2 ${projects == 'react' ? `bg-transparent text-primary ` : `bg-primary text-white`}`}
        >
          Full Stack Apps
        </button>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-5 my-6">
        {projects == 'all' ?
          mywork.map((item, index) => (
            <div
              className="md:h-56 lg:h-64 flex flex-col rounded-lg bg-white dark:text-white md:max-w-xl md:flex-row"
              key={index}>
              <img
                className="h-48 w-full rounded-t-lg object-top object-cover md:h-auto md:w-4/12 md:!rounded-none md:!rounded-s-lg"
                src={item.image}
                alt={item.name} />
              <div className="flex flex-col justify-start p-6 md:w-8/12">
                <h5 className="mb-2 text-xl font-medium text-black">{item.name}</h5>
                <p className="mb-4 text-sm text-gray">{item.description}</p>
                <div className="flex flex-wrap">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray m-1 rounded-full"
                    // className="text-xs bg-primary text-secondary p-1 m-1 rounded-full"
                    >
                      {tech + ' ,'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
          : mywork
            .filter(item => item.type == projects).length > 0 ?
            mywork
              .filter(item => item.type == projects)
              .map((item, index) => {
                return (
                  <div
                    className="md:h-56 lg:h-64 flex flex-col rounded-lg bg-white dark:text-white md:max-w-xl md:flex-row"
                    key={index} >
                    <img
                      className="h-48 w-full rounded-t-lg object-top object-cover md:h-auto md:w-4/12 md:!rounded-none md:!rounded-s-lg"
                      src={item.image}
                      alt={item.name} />
                    <div className="flex flex-col justify-start p-6 md:w-8/12">
                      <h5 className="mb-2 text-xl font-medium text-black">{item.name}</h5>
                      <p className="mb-4 text-sm text-gray">{item.description}</p>
                      <div className="flex flex-wrap">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-gray m-1 rounded-full"
                          // className="text-xs bg-primary text-secondary p-1 m-1 rounded-full"
                          >
                            {tech + ' ,'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })
            : <div className="col-span-2">No project Found</div>
        }
      </div>
    </div >
  );
}
