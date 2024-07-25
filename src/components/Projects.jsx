import React from 'react'
import Slider from './Slider'

export default function Projects() {
  return (
    <div className='h-screen w-full bg-secondary py-20'>
      <h3 className='text-3xl md:text-4xl text-center font-semibold font-roman [word-spacing:-8px]'>Some <span className='text-primary'>of My</span> Work</h3>
      <div className='flex justify-center my-7 h-80'>
        <Slider />
      </div>
    </div>
  )
}
