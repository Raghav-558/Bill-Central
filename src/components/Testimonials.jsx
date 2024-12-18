import React, { useRef } from 'react'
import Slider from 'react-slick'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderLeftArrow, SliderRightArrow } from '../utils/icons'
import { TESTIMONIALS_SLIDER_LIST } from '../utils/helper'

const Testimonials = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          autoplaySpeed: 2000,
          autoplay: true,
          dots: true
        }
      }
    ]
  }

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className='py-[81px] max-lg:py-[60px] max-md:pt-0'>
      <div className='max-w-[1140px] mx-auto max-lg:px-4 relative'>
        <div className='text-center'>
          <SubHeading text='Our' secondSpanText='Testimonials' />
          <div className='max-w-[490px] mx-auto text-dark-blue pt-4 max-lg:max-w-[900px] max-sm:max-w-[440px]'>
            <Description Para='Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum' />
          </div>
        </div>
        <div className='pt-[62px] custom-slider max-md:pt-8 max-lg:pt-10'>
          <Slider {...settings} ref={sliderRef}>
            {TESTIMONIALS_SLIDER_LIST.map((obj, i) => (
              <div
                key={i}
                className='p-5 rounded border border-light-shadow border-opacity-10 shadow-[0px_0px_13.9px_0px] shadow-light-shadow'
              >
                <div className='flex gap-2 items-center pb-6 max-sm:pb-4'>
                  <img src={obj.image} alt='profile' className='max-w-[60px]' />
                  <div>
                    <p className='text-2xl max-sm:text-xl leading-9 text-black'>
                      {obj.title}
                    </p>
                    <p className='text-base max-sm:text-sm opacity-50 leading-6 text-black'>
                      {obj.social}
                    </p>
                  </div>
                </div>
                <img src={obj.star} alt='star-image' className='max-w-[99px]' />
                <p className='font-normal text-base max-sm:text-sm leading-6 text-dark-blue max-w-[324px] max-lg:max-w-none pt-[18px] max-sm:pt-4'>
                  {obj.description}
                </p>
              </div>
            ))}
          </Slider>
          <div className='absolute top-[284px] left-[-54px] right-[-54px] z-10 flex justify-between max-xl:hidden'>
            <button
              className='h-10 w-10 rounded-full border border-dark-blue group flex items-center justify-center hover:bg-dark-blue transition-all duration-300'
              onClick={handlePrevClick}
            >
              <SliderLeftArrow
                colorFill='fill-dark-blue'
                myHover='group-hover:fill-white transition-all duration-300'
              />
            </button>
            <button
              className='h-10 w-10 rounded-full border border-dark-blue flex items-center justify-center hover:bg-dark-blue transition-all duration-300 group'
              onClick={handleNextClick}
            >
              <SliderRightArrow
                colorFill='fill-dark-blue'
                myHover='group-hover:fill-white transition-all duration-300'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
