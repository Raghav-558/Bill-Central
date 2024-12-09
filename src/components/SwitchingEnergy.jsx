import React from 'react'
import Heading from '../common/Heading'
import Discription from '../common/Discription'
import { ENERGY_PLANS_LIST } from '../utils/Helper'
import CustomButton from '../common/CustomButton'
import { WhiteArrowIcon } from '../utils/Icons'

const SwitchingEnergy = () => {
    return (
        <div className='py-[81px] max-lg:py-[60px] max-md:pt-[60px] max-md:pb-0'>
            <div className='max-w-[1140px] mx-auto px-4'>
                <div className='flex flex-wrap -mx-4 flex-row justify-center max-lg:flex-col-reverse items-center'>
                    <div className='w-1/2 px-3 max-lg:w-full max-lg:pt-8'>
                        <img src="./assets/images/webp/switching-energy-image.webp" alt="Switching-energy" className='h-[451px] object-cover max-lg:mx-auto max-lg:h-96 max-md:h-80 max-sm:h-64 ' />
                    </div>
                    <div className='w-1/2  max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                        <div className='max-w-[409px] max-lg:text-center '><Heading text='Made Simple ' spanText='Switching Energy' /></div>
                        <div className='max-w-[558px] text-dark-blue pt-4 max-sm:pt-3 max-lg:max-w-[900px] max-lg:text-center'><Discription Para="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." /></div>
                        <h4 className='font-helvetica font-normal text-2xl max-sm:text-xl leading-[26.4px] text-navy-blue pt-[38px] max-lg:pt-5 max-sm:text-center'>Benefits of Comparing Energy Plans</h4>
                        <ul className='list-disc pl-5 pt-5 pb-[42px] max-lg:pb-5 max-sm:pt-4'>
                            {ENERGY_PLANS_LIST.map((obj, index) => (
                                <li key={index} className='text-dark-blue text-base leading-6 font-normal font-helvetica py-2 max-md:py-1 max-sm:text-sm'>{obj.Title}</li>
                            ))}
                        </ul>
                        <CustomButton buttonText="Compare With Us" bg="bg-sky-blue" color="text-white" buttonSpan={<WhiteArrowIcon />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchingEnergy