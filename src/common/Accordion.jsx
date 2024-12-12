import React, { useRef } from 'react'
import { AccordionIcon } from '../utils/icons'

const Accordion = ({ handleToggle, active, obj }) => {
  const contentEl = useRef()
  const { title, description, icon } = obj

  return (
    <div
      className={`overflow-hidden border border-dark-gray rounded mt-6 max-md:mt-5 max-sm:mt-4 p-[14px] max-lg:p-3 max-md:p-3 max-sm:p-2 transition-all duration-300 group w-full max-w-[558px] max-lg:max-w-[700px] max-lg:mx-auto ${
        active === title
          ? 'shadow-[0px_0px_13.9px_0px] shadow-light-shadow'
          : ''
      }`}
    >
      <div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => handleToggle(title)}
      >
        <div className='flex items-center gap-6 max-sm:gap-2'>
          <div
            className={`h-16 w-16 max-md:h-14 max-md:w-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              active === title ? 'bg-navy-blue' : 'bg-light-green'
            }`}
          >
            <div className={`${active === title?"faq-icon" :"" }`}>
            {icon}</div>
          </div>
          <p
            className="font-helvetica text-2xl max-md:text-xl max-sm:text-base leading-[26px]" 
          >
            {title}
          </p>
        </div>
        <div
          className={`transition-transform duration-500 ${
            active === title ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <AccordionIcon />
        </div>
      </div>
      <div
        ref={contentEl}
        className={` ${active === title ? 'show' : ''}`}
        style={{
          height:
            active === title ? `${contentEl.current.scrollHeight}px` : '0px',
          transition: 'height 0.3s ease-out'
        }}>
        <p className='font-helvetica pl-[88px] max-md:pl-20 max-sm:pl-16 pt-3 max-sm:pt-1 text-base max-sm:text-sm text-dark-blue leading-[25.6px] opacity-90 '>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Accordion
