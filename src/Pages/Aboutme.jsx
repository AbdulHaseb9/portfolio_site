import React from 'react'
import profile_pic from '/profile_pic2.jpeg'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";

export default function Aboutme() {
  return (
    <div className='px-5 w-full flex items-center justify-center flex-col py-24 gap-y-20 md:flex-row lg:h-screen xl:px-20'>
      <div data-aos='fade-right' className='w-full md:w-1/2 flex justify-center items-center'>
        <div className='relative w-64 h-80'>
          <img src={profile_pic} alt="My Picture"
            className='z-20 absolute top-0 left-0 object-cover' />
          <div className='before:content-[""] before:h-full before:w-full before:absolute before:top-10 before:left-5 lg:before:left-10 before:shadow-2xl before:border-8'></div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-center gap-y-4'>
        <h2 data-aos='fade-left' className='text-2xl font-semibold tracking-wider'>I'm Haseeb Sheikh <span className='text-primary'>Web Developer</span></h2>
        <p data-aos='fade-left' className='text-lg text-gray'>Hi! My name is <span className='text-primary'>Haseeb Sheikh.</span> I am a Web Developer, and I'm very passionate and dedicated to my work. With 4 months internship experience and 6 months as an instructor.</p>
        <div data-aos='fade-up' className='grid grid-cols-1 lg:grid-cols-2 place-content-center gap-y-3'>
          <div className='flex items-center gap-x-2 text-gray'><FaPhoneAlt className='text-primary' /><h4 className='font-semibold text-black'>Phone :</h4>+92 313 1191977</div>
          <div className='flex items-center gap-x-2 text-gray'><FaLocationDot className='text-primary' /><h4 className='font-semibold text-black'>Location :</h4>Karachi, Pakistan</div>
          <div className='flex items-center gap-x-2 text-gray truncate pr-4'><RiGraduationCapFill className='text-primary lg:text-xl' /><h4 className='font-semibold text-black'>Education :</h4><span className='truncate'>DAE Software Engineering</span></div>
          <div className='flex items-center gap-x-2 text-gray'><IoMdMail className='text-primary' /><h4 className='font-semibold text-black'>Mail :</h4><a href="mailto:haseebsheikh772">haseebsheikh772</a></div>
        </div>
      </div>
    </div>
  )
}
