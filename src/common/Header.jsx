import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from '../utils/Helper';
import Logo from '../assets/images/webp/page-logo.webp';
import CustomButton from './CustomButton';
import { BlackArrowIcon } from '../utils/Icons';

const Header = () => {
  const [open, setOpen] = useState()

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1024) {
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

    <div className='flex items-center justify-between py-6'>
      <a href="#logo">
        <img src={Logo} alt="page-Logo" className='h-10' />
      </a>
      <ul className='flex items-center gap-6 max-lg:hidden'>
        {HEADER_DATA.map((obj, index) => (
          <li key={index}><a href={obj.Link} className='text-white text-base font-helvetica relative flex after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-1 after:h-[0.2px] after:bg-white pb-0.5'>{obj.Title}</a></li>
        ))}
      </ul>
      <button className='max-lg:hidden flex'><CustomButton buttonText='Get Started' bg='bg-white' buttonSpan={<BlackArrowIcon />} /></button>
      <div
        className={`lg:hidden z-30 text-3xl max-sm:text-2xl font-bold text-white  cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>
      <div className={`w-full h-full transition-all duration-500 left-0 lg:-top-full z-20 fixed flex flex-col bg-nav-bg justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <ul className='flex items-center flex-col gap-6'>
          {HEADER_DATA.map((obj, i) => (
            <li key={i}><a href={obj.Link} className='text-white text-base'>{obj.Title}</a></li>
          ))}
          <button><CustomButton buttonText='Get Started' bg='bg-white' /></button>
        </ul>

      </div>
    </div>
  )
}

export default Header;
