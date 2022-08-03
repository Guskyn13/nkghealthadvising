import React, { useState, useEffect } from 'react'

const WindowWidth = () => {
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth
    })

    const detectSize = () => {
        detectHW({
            windWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])
    return (
        <div>
            <p>Width: {windowDimension.winWidth}</p>
        </div>
    )
}

export default WindowWidth