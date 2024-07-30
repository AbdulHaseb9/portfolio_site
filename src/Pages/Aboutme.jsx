import React from 'react'
import profile_pic from '/profile_pic2.jpeg'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

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
        <p data-aos className='text-gray text-sm text-justify font-semibold'>Hi! My name is <span className='text-primary'>Haseeb Sheikh.</span> I am a passionate and dedicated software developer with a keen interest in learning and growing in the field of web development. With 4 months of internship experience and 7 months as a MERN stack instructor, I have honed my skills in building dynamic and responsive web applications. My journey in the tech world has been driven by a strong desire to explore new technologies and deliver high-quality solutions. I am always eager to take on new challenges and expand my knowledge, aiming to make a meaningful impact in the industry..</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center font-semibold gap-y-3'>
          <div className='flex items-center gap-x-2 text-gray'><FaPhoneAlt className='text-primary' /><h4 className='font-semibold text-black'>Phone :</h4>+92 313 1191977</div>
          <div className='flex items-center gap-x-2 text-gray'><FaLocationDot className='text-primary' /><h4 className='font-semibold text-black'>Location :</h4>Karachi, Pakistan</div>
          <div className='flex items-center gap-x-2 text-gray truncate pr-4'><RiGraduationCapFill className='text-primary lg:text-xl' /><h4 className='font-semibold text-black'>Education :</h4><span className='truncate'>DAE Software Engineering</span></div>
          <div className='flex items-center gap-x-2 text-gray'><IoMdMail className='text-primary' /><h4 className='font-semibold text-black'>Mail :</h4><a href="mailto:haseebsheikh772">haseebsheikh772</a></div>
        </div>
        <div className='mt-2'>
          <Link
            to={"/myskills"}
            data-aos="fade-right"
            className="bg-primary text-white px-4 py-2 rounded-md my-3 border-primary border-2 hover:bg-transparent hover:text-primary"
          >
            My Skills
          </Link>
        </div>
      </div>
    </div>
  )
}
