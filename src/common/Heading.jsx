import React from 'react'

const Heading = ({ text, spanText, secondSpanText }) => {
    return (
        <h2 className='font-helvetica font-normal text-5xl leading-[52.8px] max-lg:text-3xl max-sm:text-2xl text-dark-blue'><span className='font-bold'>{spanText} </span> {text} <span className='font-bold'>{secondSpanText}</span></h2>
    )
}

export default Heading