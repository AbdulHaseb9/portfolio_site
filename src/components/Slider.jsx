import React from 'react'
import Slider from "react-slick";
import hase from '/portfolio1.jpg'
import Button from './Button';

export default function SliderComp() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const mywork = [
        {
            name: 'Modern Dashboard',
            image: hase,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate repudiandae velitconsectetur adipisicing elit. Numquam voluptate repudiandae velit praesentium nam ab.'
        },
        {
            name: 'Modern Dashboard',
            image: hase,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate repudiandae velitconsectetur adipisicing elit. Numquam voluptate repudiandae velit praesentium nam ab.'
        },
        {
            name: 'Modern Dashboard',
            image: hase,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate repudiandae velitconsectetur adipisicing elit. Numquam voluptate repudiandae velit praesentium nam ab.'
        },
        {
            name: 'Modern Dashboard',
            image: hase,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate repudiandae velitconsectetur adipisicing elit. Numquam voluptate repudiandae velit praesentium nam ab.'
        },
    ]
    return (
        <Slider {...settings} className='w-8/12 border-none'>
            {
                mywork.map((item, index) => (
                    <div className='w-8/12 h-72 p-7' key={index}>
                        <div className='flex gap-x-8 items-center flex-col md:flex-row'>
                            <div className='md:w-1/2'>
                                <img src={item.image} alt={item.name} className='w-40 md:w-full rounded-3xl' />
                            </div>
                            <div className='md:w-1/2'>
                                <h3 className='text-2xl font-semibold tracking-wider'>{item.name}</h3>
                                <p className='my-3 text-gray'>{item.description}</p>
                                <Button title={'Demo'} />
                                <Button title={'Get Code'} margin={'mx-5'} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>)
}
