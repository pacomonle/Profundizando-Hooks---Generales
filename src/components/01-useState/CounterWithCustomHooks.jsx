import React from 'react'
import './counter.css'
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHooks = () => {

    const {state: counter, increment, decrement, reset} = useCounter()

    return (
        <>
           <h1>Counter with custom Hook</h1> 
           <h3>Counter :  {counter}</h3>
           <hr />
           <button 
           className='btn btn-primary mx-3'
           onClick={()=>increment(4)}
           type="button">
           +
           </button>
           <button 
           className='btn btn-info mx-3'
           onClick={reset}
           type="button">
           reset
           </button>
           <button 
           className='btn btn-danger mx-3'
           onClick={()=>decrement(2)}
           type="button">
           -
           </button>
        </>
    )
}

export default CounterWithCustomHooks
