import React, { useEffect, useState } from 'react';
import { HEADER_LIST } from '../utils/helper';
import CustomButton from './CustomButton';
import { BlackArrowIcon } from '../utils/icons';

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div className='flex items-center justify-between py-5'>
      <a href="#logo">
        <img src="/assets/images/webp/page-logo.webp" alt="logo" className='h-10 max-md:h-9 max-sm:h-8' />
      </a>
      <ul className='flex items-center gap-6 max-lg:hidden'>
        {HEADER_LIST.map((obj, index) => (
          <li key={index}>
            <a href={obj.link} className='text-white text-base relative flex after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-1 after:h-[0.5px] after:bg-white pb-0.5'>
              {obj.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='max-lg:hidden flex'>
        <CustomButton buttonText='Get Started' myClass="bg-white" buttonSpan={<BlackArrowIcon />} />
      </div>
      <div
        className={`lg:hidden z-40 text-3xl max-sm:text-2xl font-bold text-white  cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>
      <div className={`w-full h-full transition-all duration-500 left-0 lg:-top-full z-30 fixed flex flex-col bg-navy-blue justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <ul className='flex items-center flex-col gap-6'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a 
                href={obj.link} 
                className='text-white text-xl max-sm:text-base' 
                onClick={() => setOpen(false)} 
              >
                {obj.title}
              </a>
            </li>
          ))}
          <div onClick={() => setOpen(false)}> 
            <CustomButton buttonText='Get Started' myClass='bg-white' buttonSpan={<BlackArrowIcon />} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
