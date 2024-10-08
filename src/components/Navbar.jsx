import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";


function Navbar() {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            {/* Header */}
            <header className='w-full px-5 py-3 bg-secondary flex justify-between items-center z-50 fixed left-0 top-0 md:px-10 xl:px-20 max-w-[1600px]'>
                {/* Logo/Name */}
                <div className='flex items-center gap-3'>
                    <HiBars3BottomLeft className='text-2xl cursor-pointer md:hidden' onClick={() => setSidebar(!sidebar)} />
                    <h2 onClick={() => navigate('/')} className='text-3xl font-bold tracking-widest flex items-center cursor-pointer'>
                        <span className='text-primary'>Ha</span>seeb
                    </h2>
                </div>
                {/* Nav Links */}
                <nav className='text-sm font-semibold space-x-10 text-gray-800 hidden md:block'>
                    <NavLink to={'/'} className='hover:text-primary'>Home</NavLink>
                    <NavLink to={'aboutme'} className='hover:text-primary'>About</NavLink>
                    <NavLink to={'myprojects'} className='hover:text-primary'>Projects</NavLink>
                    {/* <NavLink className='hover:text-primary'>Blog</NavLink> */}
                    <NavLink to={'contactme'} className='hover:text-primary'>Contact</NavLink>
                </nav>
                {/* Social Links */}
                <div className='hidden md:flex gap-x-3'>
                    <Link target='_blank' to={'https://x.com/Haseebsheikh23'}>
                        <FaXTwitter className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://www.facebook.com/profile.php?id=100086119372055'}>
                        <FaFacebookF className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://www.instagram.com/haseebsheikhofficial7/'}>
                        <FaInstagram className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://github.com/AbdulHaseb9/'}>
                        <FaGithub className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    {/* <FaLinkedinIn className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' /> */}
                </div>
            </header>
            {/* Side Bar */}
            <div className={`h-screen w-full p-6 bg-secondary transition-all duration-500 fixed top-0 ${sidebar ? `left-0` : `-left-full`} z-50`}>
                {/* Top */}
                <div className={`flex justify-end text-2xl p-2`}>
                    <RxCross2 onClick={() => setSidebar(false)} />
                </div>
                {/* Center */}
                <div className='flex flex-col items-center gap-y-6 my-10'>
                    <NavLink to={'/'} onClick={() => setSidebar(false)} className='hover:text-primary'>Home</NavLink>
                    <NavLink to={'aboutme'} onClick={() => setSidebar(false)} className='hover:text-primary'>About</NavLink>
                    <NavLink to={'myprojects'} onClick={() => setSidebar(false)} className='hover:text-primary'>Projects</NavLink>
                    {/* <NavLink className='hover:text-primary'>Blog</NavLink> */}
                    <NavLink to={'contactme'} onClick={() => setSidebar(false)} className='hover:text-primary'>Contact</NavLink>
                </div>
                {/* Bottom */}
                <div className='flex justify-center gap-x-3'>
                    <Link target='_blank' to={'https://x.com/Haseebsheikh23'}>
                        <FaXTwitter className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://www.facebook.com/profile.php?id=100086119372055'}>
                        <FaFacebookF className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://www.instagram.com/haseebsheikhofficial7/'}>
                        <FaInstagram className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    <Link target='_blank' to={'https://github.com/AbdulHaseb9/'}>
                        <FaGithub className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' />
                    </Link>
                    {/* <FaLinkedinIn className='p-2 text-primary text-4xl rounded-full hover:bg-primary hover:text-white cursor-pointer' /> */}
                </div>
            </div>
        </>
    )
}

export default Navbar


// bg-slate-300 sidebar background 