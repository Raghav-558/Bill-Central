import React from 'react'
import { SIMPLE_STEPS_LIST } from '../utils/Helper'
import Heading from '../common/Heading'

const SimpleSteps = () => {
  return (
      <div className='overflow-hidden py-[81px] max-md:py-[60px]'>
          <div className='flex flex-col mb-[58px] max-lg:mb-10 max-md:mb-8 text-center max-sm:mb-5 px-4'>
              <Heading text='Simple Steps to' secondSpanText='Switch' />
              <p className='text-center max-w-[610px] font-normal text-base max-md:text-sm text-light-gray opacity-90 mx-auto leading-[25.6px] pt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
          </div>
          <div className='max-w-[1440px] mx-auto w-full max-sm:px-4'>
              <div className='flex flex-wrap justify-center'>
                  {SIMPLE_STEPS_LIST.map((item, index) => (
                      <div className='relative group cursor-pointer overflow-hidden font-helvetica' key={index}>
                          <img src={item.Image} alt={item.alt} className='w-[360px] max-lg:h-[500px] object-cover' />
                          <div className='absolute group-hover:h-0 group-hover:bg-hidden group-hover:z-10 transition-all duration-300 bg-light-blue opacity-94 top-0 left-0 w-full h-full'>
                              <div className='relative w-full h-full '>
                                  <p className='font-normal min-w-[574px] absolute top-1/2 left-1/2 translate-x-[-50%] text-center leading-[35.2px] pointer-events-none text-[32px] text-dark-blue -rotate-90  group-hover:hidden max-lg:text-2xl max-md:text-xl'>{item.imageContent}</p>
                              </div>
                          </div>
                          <div className='bg-navy-blue absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-300 w-full max-w-[360px] p-8 max-md:p-6 '>
                              <h4 className='font-normal text-white text-[32px] leading-[35.2px] max-lg:text-[28px] max-md:text-2xl max-sm:text-xl'>{item.Heading}</h4>
                              <p className='text-base leading--[25.6px] font-normal text-white pt-4 max-md:pt-2 max-w-[286px] opacity-90 max-md:text-sm'>{item.Content}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default SimpleSteps