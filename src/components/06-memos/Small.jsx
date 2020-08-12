import React, { memo } from 'react'

const Small = memo(({counter}) => {
// metodo memo de REACT - envolver en parentesis todo el component -> memo()
    // solo se va a disparar si las props cambian

console.log('me volvi a llamar :(')
  
   

    return (
        <>
            <small>{counter}</small>
        </>
    )
})

export default Small
