import React, { useState } from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <header className='w-full px-5 py-3 bg-secondary flex justify-between items-center absolute left-0 top-0 md:px-10 xl:px-20'>
                {/* Left side */}
                <div className='flex items-center gap-x-10 lg:gap-x-16'>
                    {/* Logo/Name */}
                    <div className='flex items-center gap-3'>
                        <HiBars3BottomLeft className='text-xl md:hidden' onClick={() => setSidebar(!sidebar)} />
                        <h2 className='text-2xl font-bold tracking-widest md:text-3xl flex items-center'>
                            <span className='text-primary'>Ha</span>seeb
                        </h2>
                    </div>
                    {/* Nav Links */}
                    <nav className='text-sm font-semibold space-x-10 text-gray-800 hidden md:block'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Projects</Link>
                        {/* <Link>Blog</Link> */}
                        <Link>Contact</Link>
                    </nav>
                </div>
                {/* Right side */}
                <div>
                    <button className='px-4 py-2 bg-primary text-sm rounded-md text-white font-semibold tracking-wide'>Let's Talk</button>
                </div>
            </header>
            {/* Side Bar */}
            <div className={`h-screen w-full p-6 bg-secondary transition-all duration-500 absolute top-0 ${sidebar ? `left-0` : `-left-full`}`}>
                {/* Top */}
                <div className={`flex justify-end text-2xl p-2`}>
                    <RxCross2 onClick={() => setSidebar(false)} />
                </div>
                {/* Bottom */}
                <div className='flex flex-col items-center gap-y-6 my-10'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    {/* <Link>Blog</Link> */}
                    <Link>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar


// bg-slate-300 sidebar background 