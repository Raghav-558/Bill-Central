import React, { useState } from 'react'
import SubHeading from '../common/SubHeading'
import { COMPARISONS_ACCORDION_LIST } from '../utils/helper'
import CustomAccordion from '../common/CustomAccordion'

const Comparisons = () => {
  const [active, setActive] = useState(null)

  const handleToggle = title => {
    setActive(prev => (prev === title ? null : title))
  }

  return (
    <div className='py-[81px] max-lg:py-[60px] max-md:pt-7'>
      <div className='max-w-[1161px] mx-auto max-lg:px-4'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full lg:w-1/2'>
            <div className='max-w-[456px] mx-auto lg:mx-0 max-lg:text-center max-lg:max-w-none pb-6 max-lg:pb-0'>
              <SubHeading
                text='Comprehensive Utility'
                secondSpanText='Comparisons'
              />
            </div>
            {COMPARISONS_ACCORDION_LIST.map((obj, index) => (
              <CustomAccordion
                key={index}
                active={active}
                handleToggle={handleToggle}
                obj={obj}
              />
            ))}
          </div>
          <div className='w-full lg:w-1/2 lg:flex lg:justify-end max-lg:pt-8'>
            <img
              src='./assets/images/webp/comparisons-image.webp'
              alt='comparisons'
              className='w-[530px] max-md:w-[400px] max-lg:w-[430px] max-lg:mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparisons
