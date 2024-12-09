import React from 'react'
import { useState } from 'react'

const Dummy = () => {
    const [dummy, setDummy] = useState("hello")
    return (
        <>{dummy}
            <button onClick={() => setDummy("hello2")}>change</button>
        </>
    )
}

export default Dummy

