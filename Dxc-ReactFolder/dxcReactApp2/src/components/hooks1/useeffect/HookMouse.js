import React, { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse moved')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(
        () => {
            console.log('use effect called')
            window.addEventListener('mousemove', logMousePosition)

            return () => {
                console.log('compoonent unmounting code')
                window.removeEventListener('mousemove', logMousePosition)
            }//to remove the listeners
        }, []//stops the useEffect from getting called multiple times
        // the listener is still there and 'mouse moved' keeps getting called
    )


    return (
        <div>
            Hooks X - {x} Y- {y}
        </div>
    )
}

export default HookMouse