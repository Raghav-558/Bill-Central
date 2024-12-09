import React from 'react'

const CompanyList = () => {


    return (
        <div className='pt-[54px] pb-[81px] max-md:pb-[60px] max-sm:pt-10'>
            <div className='max-w-[1140px] mx-auto px-4'>
                <h3 className='font-normal text-[38px] font-helvetica leading-[41.8px] text-navy-blue max-w-[548px] max-lg:max-w-none max-lg:mx-auto max-lg:text-center max-md:text-[28px] max-sm:text-2xl'>More than <span className='text-sky-blue font-bold'>80,000+</span> companies trust bill central </h3>
                <div className='flex gap-[51px] pt-16 max-lg:pt-10 max-lg:gap-10 max-lg:flex-wrap max-lg:justify-center max-md:gap-7'>
                    <a href="#">
                        <img src="./assets/images/webp/energy-logo.webp" alt="energy" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/blue-nrg-logo.webp" alt="blue-nrg" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/dodo-logo.webp" alt="dodo" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/origin-logo.webp" alt="origin" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/ovo-logo.webp" alt="ovo" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/sumo-logo.webp" alt="sumo" className='w-[126px]' />
                    </a>
                    <a href="#">
                        <img src="./assets/images/webp/alg-logo.webp" alt="alg" className='w-[62px]' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CompanyList