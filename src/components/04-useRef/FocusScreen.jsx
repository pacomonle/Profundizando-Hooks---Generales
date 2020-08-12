import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {
// HOOK useRef
const inputref = useRef()
console.log(inputref)

const handleClick = (e) => {
    console.log('click', inputref.current)
      // document.querySelector('input').focus()
     // document.querySelector('input').select()
    inputref.current.select()
}

    return (
        <div>
            <h1>Hook useRef</h1>
            <h3>Focus Screen</h3>
            <hr />
            <input 
               ref = {inputref}
               type="text"
               className='form-control'
               placeholder='su nombre...'
               name="nombre" 
                />
            <button 
                type="button"
                onClick={handleClick}
                className='btn btn-outline-dark mt-3'>
                   Focus
            </button>
        </div>
    )
}

export default FocusScreen
