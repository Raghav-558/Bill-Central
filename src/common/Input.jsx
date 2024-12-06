import React from 'react';
import { WhiteArrow } from '../utils/Icons';

const Input = ({ placeholder = 'Start typing your address', buttonText = 'Compare', onButtonClick }) => {
    return (
        <div>
            <label htmlFor="#" className='flex items-center bg-white  justify-between px-[22px] rounded-full'>
                <input type="text" placeholder={placeholder} className="text-dark-blue rounded-l-md py-6" />
                <button type="button" className="py-3 px-5 text-white rounded-full leading-[18.5px] rounded-tl-none bg-sky-blue flex items-center gap-[3px]">{buttonText}<WhiteArrow /></button>
            </label>
        </div>
    );
}

export default Input;
