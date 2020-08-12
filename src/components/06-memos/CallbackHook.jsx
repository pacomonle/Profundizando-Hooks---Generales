import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

  const [counter, setcounter] = useState(10)

  const increment = useCallback(
        (num) => {
            // callback
            setcounter(c => c + num)
        },
        [setcounter]
    )

    useEffect(() => {
       console.log('callback')
       setcounter(c => c + 10)
    }, [increment])


    return (
        <div>
             <h1>Hook useCallback</h1>
             <h3>Counter : {counter}</h3>
             <hr />
            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}

export default CallbackHook
