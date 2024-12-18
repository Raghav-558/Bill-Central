import React from 'react'
import Heading from '../common/SubHeading'
import Description from '../common/Description'
import { CardButtonIcon } from '../utils/icons'
import { UTILITIES_LIST } from '../utils/helper'

const Utilities = () => {
  return (
    <div className='py-[81px] max-lg:py-[60px] max-md:pt-0'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <div className='text-center'>
          <Heading text='Why Choose Us For' secondSpanText='Utilities' />
          <div className='max-w-[620px] mx-auto text-dark-blue pt-4 max-lg:max-w-[900px] max-sm:max-w-[440px]'>
            <Description Para="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
          </div>
        </div>
        <div className='flex flex-wrap pt-[46px] max-lg:pt-8 justify-center'>
          <div className='w-5/12 flex justify-center max-lg:w-full items-center'>
            <div className='bg-navy-blue p-10 max-sm:p-6 rounded lg:h-[596px]'>
              <img
                src='/assets/images/webp/thumb-up.webp'
                alt='thumb-up-image'
                className='h-60 lg:w-[233px] max-lg:h-48 max-md:h-32 pt-[17px] max-lg:py-0'
              />
              <h5 className='font-normal text-2xl leading-[26.4px] text-white pt-[51.17px] max-lg:pt-8 max-md:pt-6'>
                Tailored Recommendations
              </h5>
              <div className='text-white pt-3 max-w-[344px] max-sm:text-sm'>
                <Description Para='Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.' />
              </div>
              <button className='py-[21px] px-[25px] bg-white rounded-full mt-[22px]'>
                <CardButtonIcon />
              </button>
            </div>
          </div>
          <div className='w-7/12 max-lg:w-full max-lg:pt-6 max-md:pt-5'>
            <div className='flex flex-wrap'>
              {UTILITIES_LIST.map((obj, i) => (
                <div
                  className='w-6/12 max-md:w-1/2 max-sm:w-full max-w-[334px] max-lg:max-w-none mx-auto p-3 max-sm:p-0 max-sm:py-3'
                  key={i}
                >
                  <div className='p-6 h-[286px] max-sm:h[200px] border border-dark-blue border-opacity-10 rounded shadow-[0px_0px_13.9px_0px] shadow-light-shadow hover:bg-navy-blue group duration-300 transition-all'>
                    <div className='utilities-icon'>{obj.icon}</div>
                    <h3 className='group-hover:text-white pt-[18px] font-normal text-2xl leading-6 text-light-black'>
                      {obj.title}
                    </h3>
                    <p className='text-base font-normal leading-6 text-dark-blue max-w-[286px] pt-3 max-lg:max-w-none opacity-90 group-hover:text-white'>
                      {obj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utilities
