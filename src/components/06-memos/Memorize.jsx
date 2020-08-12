import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import Small from './Small'

const Memorize = () => {

    const [show, setshow] = useState(true)

    const {state: counter, increment} = useCounter(10)

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter : <Small counter={counter}></Small> </h2>
            <hr />
            <button 
            onClick={()=>{increment(1)}}
            className='btn btn-success'
            type="button">
            +
            </button>
            <button 
            className= 'btn btn-outline-info mx-4'
            onClick={()=>{setshow(!show)}}
            type="button">
            show / hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
