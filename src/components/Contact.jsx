import React from 'react'

export default function Contact() {
  return (
    <div className='px-5 bg-secondary text-center w-full h-screen md:px-10 xl:px-20 flex flex-col justify-center'>
      <h1 className='text-3xl md:text-5xl font-semibold font-roman'>Contact Me</h1>
      <h1 className='text-lg md:text-4xl font-roman text-primary my-3'>hasebsheikh2380@gmail.com</h1>
      <p>Feel free to Contact me with any queries or questions!</p>
      <form className='my-6'>
        <div className='flex justify-center flex-col items-center md:flex-row gap-y-7'>
          <input type="text" placeholder='Name' className='w-72 border-b-2 border-primary mx-4 pb-2 md:p-2 bg-transparent outline-none placeholder:text-primary' required />
          <input type="text" placeholder='Email address' className='w-72 border-b-2 border-primary mx-4 pb-2 md:p-2 bg-transparent outline-none placeholder:text-primary' required />
        </div>
        <textarea placeholder='Message' className='w-[290px] md:w-[600px] min-h-28 py-2 mt-4 text-sm bg-transparent outline-none border-b-2 border-primary placeholder:text-primary' required></textarea>
        <div className='flex justify-center my-3'>
          <input type="submit" className='border-2 border-primary px-6 py-3 rounded-full block' />
        </div>
      </form>
    </div>
  )
}
