import React from 'react';

const CustomButton = ({ buttonText, buttonSpan, color, bg }) => {
    return (
        <button className={`font-helvetica text-base font-bold ${color} ${bg} rounded-full rounded-tl-none py-3 px-[26px] max-sm:text-sm max-sm:py-2 max-sm:px-4 flex items-center justify-center hover:rounded-full hover:rounded-tr-none duration-300 ease-linear gap-1`}>
            {buttonText}
            <span>{buttonSpan}</span>
        </button>
    );
}

export default CustomButton;
