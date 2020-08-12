import React, { useState } from 'react'
import MultipleCustomsHooks from '../03-examples/MultipleCustomsHooks';
import '../02-useEffect/effects.css'

const RealExampleRef = () => {


const [show, setshow] = useState(false)



    return (
        <div>
            <h1>Hook useRef</h1>
            <h3>Ejemplo real</h3>
            <hr />
            {
                show &&  <MultipleCustomsHooks></MultipleCustomsHooks>
            }
            <button 
               type="button" 
               onClick = {() => setshow(!show)}
               className='btn btn-outline-danger btn-block my-5'>
               {!show ? 'Mostrar' : 'Ocultar'}
            </button>
        </div>
    )
}

export default RealExampleRef
