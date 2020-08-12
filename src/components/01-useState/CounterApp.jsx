import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

// usando destructuring
const [state, setstate] = useState({
                                count1: 10,
                                count2: 20,
                                count3: 30
                            })
const {count1, count2} = state
console.log(count1, count2)
    return (
        <div>
            <h1>Counter App</h1>
            {/*
             <h3>Count :  { count }</h3>
            */}
           
            <h3>Count1 : {count1}</h3>
            <h3>Count2 : {count2}</h3>
            <hr />
            <button 
            className='btn btn-primary'
            onClick={()=>{setstate({
                ...state,
                count1:count1 + 1
            })}}
            type="button">
            +1
            </button>
        </div>
    )
}

export default CounterApp

