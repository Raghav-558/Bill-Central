import React from 'react'
import { useState } from 'react'

const Dummy = () => {
    const [dummy, setDummy] = useState("hello")
    const toggleHandler = () => {
        setDummy((changeName) => (changeName === 'Hello' ? 'Hello-2' : 'Hello'))
    }
    return (
        <div className='bg-gray-500 min-h-screen flex flex-col items-center justify-center'>
            <p className='text-4xl text-white pb-5'>{dummy}</p>
            <button onClick={toggleHandler} className='px-5 py-3 bg-white rounded-xl border border-transparent hover:border-white hover:text-white hover:bg-transparent duration-300 ease-linear'>Change Name</button>
        </div>
    )
}

export default Dummy



