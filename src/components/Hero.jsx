import React from 'react'
import heroImg from '../assets/hero.jpg'

function Hero() {
    return (
        <div className='relative'>
            <img src={heroImg} alt="Hero" />
            <button className='absolute bottom-[30px] left-1/2 bg-white rounded-full be-vietnam-pro-bold uppercase py-[10px] px-10 text-[14px] transform -translate-x-1/2 cursor-pointer'>Shop New</button>
        </div>
    )
}

export default Hero