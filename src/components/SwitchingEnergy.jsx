import React from 'react'
import SubHeading from '../common/SubHeading'
import { ENERGY_PLANS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'
import { WhiteArrowIcon } from '../utils/icons'
import Description from '../common/Description'

const SwitchingEnergy = () => {
  return (
    <div className='py-[81px] max-lg:py-[60px] max-md:pt-[60px] max-md:pb-0'>
      <div className='max-w-[1140px] mx-auto max-md:px-4'>
        <div className='flex flex-wrap flex-row justify-center max-lg:flex-col-reverse items-center'>
          <div className='w-1/2 max-lg:w-full max-lg:pt-8 '>
            <img
              src='./assets/images/webp/switching-energy-image.webp'
              alt='Switching-energy'
              className='h-[451px] object-cover max-lg:mx-auto max-lg:h-96 max-md:h-80 max-sm:h-64 '
            />
          </div>
          <div className='w-1/2  max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center pl-3 max-lg:pl-0'>
            <div className='max-w-[409px] max-lg:text-center max-lg:max-w-none '>
              <SubHeading text='Made Simple ' spanText='Switching Energy' />
            </div>
            <div className='max-w-[558px] text-dark-blue pt-4  max-lg:max-w-[900px] max-lg:text-center'>
              <Description Para="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." />
            </div>
            <h4 className='font-normal text-2xl max-sm:text-xl leading-[26.4px] text-navy-blue pt-[38px] max-lg:pt-5 max-sm:text-center'>
              Benefits Of Comparing Energy Plans
            </h4>
            <ul className='list-disc pl-5 pt-5  max-sm:pt-4'>
              {ENERGY_PLANS_LIST.map((obj, index) => (
                <li
                  key={index}
                  className='text-dark-blue text-base leading-6 font-normal py-1 max-sm:text-sm'
                >
                  {obj}
                </li>
              ))}
            </ul>
            <div className='pt-[38px] max-lg:pt-5'>
              <CustomButton
                buttonText='Compare With Us'
                myClass='bg-sky-blue text-white'
                buttonSpan={<WhiteArrowIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchingEnergy
