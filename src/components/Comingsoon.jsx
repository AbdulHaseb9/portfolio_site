import React from 'react'

export default function Comingsoon() {
    return (
        <div className='h-screen w-full bg-hero-pattern bg-black flex justify-center items-center'>
            <div>
                <h3 className='text-4xl text-center md:text-6xl text-[#dddddd]'>Coming Soon</h3>
                <div className='bg-[#737170] p-1 rounded-lg mt-8'>
                    <form className='md:space-x-2 flex'>
                        <input type="email" placeholder='Enter your email address' className='w-9/12 p-1 md:p-2 bg-transparent outline-none placeholder:text-[#373738]' />
                        <input type='submit' value='Notify Me' className='bg-black text-[#ddd] p-1 md:p-2 rounded-lg cursor-pointer' />
                    </form>
                </div>
            </div>
        </div>
    )
}
