import React, { useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import procesoPesado from '../../helpers/procesoPesado';
import '../02-useEffect/effects.css'


const MemoHooks = () => {

    
    const [show, setshow] = useState(true)

    const {state: counter, increment} = useCounter(1000)

  // useMemo ->  useMemo(() => function, input)
  const memoProcesoPesado =  useMemo(() => {
                                    procesoPesado(counter)
                                    console.log(procesoPesado(counter))
                                }, [counter])

    return (
        <div>
            <h1>Hook useMemo</h1>
            <h2>Counter : <small>{counter}</small> </h2>
            <hr />
            <p>
            { memoProcesoPesado }
            </p>
           
            <button 
            onClick={()=>{increment(500)}}
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


export default MemoHooks
