import React from 'react'

const CustomButton = ({ buttonText, buttonSpan, color, bg }) => {
    return (
        <div>
            <button className={`text-base font-bold ${color} ${bg} rounded-full rounded-tl-none bg-pacific-blue py-3 px-5 flex items-center hover:rounded-tl-full hover:rounded-br-none duration-300 ease-linear gap-1 max-sm:text-sm max-sm:py-2 max-sm:px-4`}>{buttonText}<span>{buttonSpan}</span></button>
        </div>
    )
}

export default CustomButton