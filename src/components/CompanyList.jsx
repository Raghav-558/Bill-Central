import React from 'react'
import { COMPANIES_LOGO_LIST } from '../utils/helper'

const CompanyList = () => {
  return (
    <div className='pt-[54px] pb-[81px] max-lg:py-[60px] max-md:pb-0'>
      <div className='max-w-[1129px] mx-auto px-4'>
        <h3 className='font-normal text-custom-38 leading-[41.8px] text-navy-blue max-w-[548px] max-lg:max-w-none max-lg:mx-auto max-lg:text-center max-md:text-custom-28 max-sm:text-2xl'>
          More Than <span className='text-sky-blue font-bold'>80,000</span>+
          Companies Trust Bill Central
        </h3>
        <div className='pt-16 flex gap-8 items-center justify-between max-lg:pt-10 overflow-x-auto overflow-hidden pb-4'>
          {COMPANIES_LOGO_LIST.map((object, index) => (
            <div
              key={index}
              className='hover:scale-105 duration-300 ease-linear'
            >
              <img
                className={`max-w-[127px] max-h-[62px] mx-auto cursor-pointer`}
                src={object.image}
                alt={object.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyList
