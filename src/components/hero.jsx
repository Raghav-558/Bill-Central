import React from 'react'
import Header from '../common/Header'
import { WhiteArrowIcon } from '../utils/icons'
import CustomButton from '../common/CustomButton'
import Description from '../common/Description'

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-no-repeat flex flex-col max-lg:bg-center max-lg:pb-[60px] lg:h-[810px] '>
      <div className='max-w-[1140px] mx-auto px-4 relative'>
        <Header />
        <div className='flex flex-wrap -mx-3 pt-[109px] max-lg:pt-[60px] max-md:pt-12 max-sm:pt-8'>
          <div className='w-1/2 px-3 max-lg:w-full max-lg:text-center'>
            <h1 className='text-custom-64 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-lg:leading-tight leading-[70px] text-white'>
              Easily Compare{' '}
              <span className='font-bold'>Energy, Gas, And Internet</span> Plans
            </h1>
            <div className='pt-4 max-md:pt-3 max-w-[506px] max-md:max-w-[780px] text-white max-lg:max-w-[900px] max-lg:mx-auto'>
              <Description Para='Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.' />
            </div>
            <form className='flex p-[9px] pl-[22px] bg-white rounded-[0px_100px_100px_100px] items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto max-sm:gap-1 mt-[42px] max-lg:mt-5 max-lg:mb-5'>
              <input
                type='text'
                placeholder='Start typing your address'
                required
                className='placeholder:text-deep-blue placeholder:text-base placeholder:font-normal !outline-none !bg-transparent text-deep-blue text-base font-normal placeholder:max-sm:text-sm max-sm:text-sm w-full'
              />
              <CustomButton
                buttonText='Compare'
                myClass='bg-sky-blue text-white'
                buttonSpan={<WhiteArrowIcon />}
              />
            </form>
          </div>
          <div className='w-1/2 px-3 max-lg:w-full max-lg:pt-5 max-sm:pt-2'>
            <div className='relative flex justify-end'>
              <img
                className='absolute -top-14 -right-[11.8%] max-xl:-right-4 max-xl:-top-8 max-lg:-right-10 max-[1280px]:hidden'
                src='./assets/images/webp/dots-image.webp'
                alt='Dots-image'
              />
              <img
                className='max-w-[558px] max-lg:max-w-[490px] mx-auto w-full relative z-[1] rounded h-[760px] max-lg:h-[550px] object-cover'
                src='./assets/images/webp/hero-image.webp'
                alt='Hero-image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
