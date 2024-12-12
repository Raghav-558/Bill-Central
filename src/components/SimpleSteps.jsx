import React from 'react'
import { SIMPLE_STEPS_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import Slider from 'react-slick'

const SimpleSteps = () => {
  let settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          dots: true,
          speed: 1000,
          autoplaySpeed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          speed: 1000,
          autoplaySpeed: 3000,
          centerMode: true,
          autoplay: true,
          dots: true
        }
      }
    ]
  }
  return (
    <div className='overflow-hidden py-[81px] max-lg:py-[60px] max-lg:pb-20'>
      <div className='flex flex-col pb-[58px] max-lg:pb-10 max-md:pb-8 text-center  px-4'>
        <SubHeading text='Simple Steps To' secondSpanText='Switch' />
        <p className='text-center max-w-[610px] font-normal text-base max-md:text-sm text-light-gray opacity-90 mx-auto leading-[25.6px] pt-4'>
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
          consectetur mi. Vulputate sapien a a bibendum.
        </p>
      </div>
      <div className='max-w-[1440px] mx-auto w-full max-md:px-4'>
        <Slider {...settings}>
          {SIMPLE_STEPS_LIST.map((item, index) => (
            <div
              key={index}
              className='relative group cursor-pointer overflow-hidden w-full'
            >
              <img
                src={item.image}
                alt={item.alt}
                className='w-[360px] max-lg:h-[500px] object-cover max-md:mx-auto'
              />
              <div className='absolute group-hover:h-0 group-hover:bg-hidden group-hover:z-10 transition-all duration-300 bg-light-blue opacity-94 top-0 left-0 w-full h-full'>
                <div className='relative w-full h-full'>
                  <p className='font-normal min-w-[574px] absolute top-1/2 max-lg:top-1/3 left-1/2 pl-3 max-lg:pl-0 translate-x-[-50%] text-left leading-[35.2px] pointer-events-none text-custom-32 text-dark-blue -rotate-90 group-hover:hidden max-lg:text-xl max-md:text-xl'>
                    {item.imageContent}
                  </p>
                </div>
              </div>
              <div className='bg-navy-blue absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-300 w-full max-w-[360px] p-8 max-lg:p-6'>
                <h4 className='font-normal text-white text-custom-32 leading-[35.2px] max-lg:text-xl'>
                  {item.heading}
                </h4>
                <p className='text-base leading-[25.6px] font-normal text-white pt-4 max-md:pt-2 max-w-[286px] opacity-90 max-lg:text-sm pl-[10px] max-lg:pl-0'>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SimpleSteps
