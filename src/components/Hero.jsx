import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className='px-5 w-full flex items-center justify-center relative h-screen md:px-10 xl:px-20'>
      <div data-aos="fade-up">
        <h1 className='text-4xl mobilelarge:text-3xl md:text-5xl font-semibold'>Hi, I'm <span className='text-primary mobilelarge:text-4xl md:text-5xl'>Haseeb Sheikh</span></h1>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000,
            'Backend Developer',
            1000,
            'Mern Stack Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className='text-2xl md:text-3xl font-bold inline-block my-3'
          repeat={Infinity}
        />
        <p className='md:w-7/12 lg:w-5/12 text-sm text-gray text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nulla. Minima quaerat possimus reiciendis labore numquam. Quis ea atque doloribus hic explicabo? Ea sapiente voluptates veniam numquam, ab est adipisci.</p>
        <button data-aos="fade-right" className='bg-primary text-white px-4 py-2 rounded-md my-3 border-primary border-2 hover:bg-transparent hover:text-primary'>Hire Me</button>
        <button data-aos="fade-left" className='bg-primary text-white px-4 py-2 rounded-md my-3 mx-3 border-primary border-2 hover:bg-transparent hover:text-primary'>Download CV</button>
      </div>
      <div className='text-7xl text-[#aeaeae] tracking-widest hidden md:block absolute -right-40 md:bottom-52 lg:bottom-60 xl:bottom-72 -rotate-90'>
        Portfolio
      </div>
    </div>
  )
}


// bg-profile-image bg-no-repeat bg-right-top