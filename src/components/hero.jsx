import React from 'react'
import Header from '../common/Header'
import Discription from '../common/Discription'
import HeroImage from '../assets/images/webp/hero-image.webp'
import DotsImage from '../assets/images/webp/dots-image.webp'
import { WhiteArrow } from '../utils/Icons'
import CustomButton from '../common/CustomButton';

const Hero = () => {
    return (
        <div className='bg-hero max-2xl:bg-contain bg-cover max-xl:bg-cover bg-top bg-no-repeat'>
            <div className='max-w-[1140px] mx-auto px-4'>
                <Header />
                <div className='flex flex-wrap pt-[109px]'>
                    <div className='w-1/2 px-3 max-lg:w-full max-lg:text-center flex flex-col justify-between'>
                        <div className='max-lg:text-center '>
                            <h1 className='text-[64px] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-lg:leading-tight leading-[70px] text-white font-helvetica'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
                            <div className='pt-4 max-md:pt-3'><Discription Para='Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.' /></div>

                            <div className='flex p-[9px] pl-[22px] mt-[42px] bg-white rounded-full rounded-tl-none items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto'>
                                <input type="text" placeholder='Start typing your address' className='outline-none' />
                                <CustomButton buttonText="Compare" bg="bg-sky-blue" color="text-white" buttonSpan={<WhiteArrow />}  />
                            </div>
                        </div>
                        <h2 className='text-[38px] font-helvetica text-nav-bg font-normal max-md:text-3xl max-sm:text-2xl max-lg:pt-5 max-xl:text-white 2xl:text-white'>More than <span className='text-sky-blue font-bold'>80,000</span>+ companies trust bill central </h2>
                    </div>
                    <div className='w-1/2 px-3 max-lg:w-full max-lg:items-center max-lg:flex max-lg:justify-center max-lg:pt-10'>
                        <div className='relative'>
                            <img className='absolute -top-14 right-4 max-lg:hidden max-lg:-right-10 max-lg:top-[-500px] max-w-[112px]' src={DotsImage} alt="dots" />
                            <img className='max-w-[558px] w-full relative z-[1] rounded' src={HeroImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
