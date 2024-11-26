import React from 'react'

export default function HeroSection() {
  return (
    <>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-[8vh] w-[60%] font-bold '>Build your Professional CV in minutes</h1>
                <p className='text-lg text-gray-500'>Easy, Fast, and Customizable templates</p>
                <p  className='text-lg text-gray-500'>to make your Resume stand Out</p>
            </div>
            <div>
                <img src="src/assets/Image/Screenshot_from_2024-07-31_06-46-07-removebg-preview 1.png" alt="ImageHero" />
            </div>
        </div>
    </>
  )
}
