import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { CardButtonIcon } from '../utils/icons'
import { UTILITIES_DATA } from '../utils/helper'

const Utilities = () => {
  return (
    <div className='py-[81px] max-lg:py-[60px] font-helvetica max-md:pt-0'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <div className='text-center'>
          <Heading text='Why Choose Us For' secondSpanText='Utilities' />
          <div className='max-w-[620px] mx-auto text-dark-blue pt-4 max-lg:max-w-[900px] max-sm:max-w-[440px]'>
            <Description Para="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
          </div>
        </div>
        <div className='flex flex-wrap pt-[46px] justify-center'>
          <div className='w-5/12 flex justify-center max-lg:w-full items-center'>
            <div className='bg-navy-blue p-10 max-sm:p-6 rounded pt- max-lg:pt-0'>
              ;
              <img
                src='/assets/images/webp/thumb-up.webp'
                alt='thumb-up'
                className='h-60 max-lg:h-48 max-md:h-32'
              />
              <h5 className='font-helvetica font-normal text-2xl leading-[26.4px] text-white pt-[51px] max-lg:pt-8 max-md:pt-6'>
                Tailored Recommendations
              </h5>
              <div className='text-white pt-3 max-w-[344px] max-sm:text-sm'>
                <Description Para='Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.' />
              </div>
              <button className='py-[22px] px-6 bg-white rounded-full mt-[22px]'>
                <CardButtonIcon />
              </button>
            </div>
          </div>
          <div className='w-7/12 max-lg:w-full max-lg:pt-6 max-md:pt-5'>
            <div className='flex flex-wrap'>
              {UTILITIES_DATA.map((obj, i) => (
                <div
                  className='w-6/12 max-md:w-full max-w-[334px] mx-auto p-3'
                  key={i}
                >
                  <div className='p-6 h-[286px] border border-dark-blue border-opacity-10 rounded shadow-[0px_0px_13.9px_0px] shadow-light-shadow'>
                    <div>{obj.icon}</div>
                    <h3 className='group-hover:text-white pt-[18px] font-normal text-2xl leading-6 text-light-black'>
                      {obj.title}
                    </h3>
                    <p className='text-base font-normal leading-6 text-dark-blue max-sm:text-sm max-w-[286px] pt-3'>
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
