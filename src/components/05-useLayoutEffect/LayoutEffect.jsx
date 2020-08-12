import React, { useLayoutEffect, useRef } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './layout.css'

const LayoutEffect = () => {

   const {state: counter, setstate: setcounter, increment, decrement} = useCounter(1)

   const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
   const {data, error, loading} = state
   console.log(data, error, loading)
    // para pasr un null a boleano usar la doble negacion !!
   const {quote, author} = !!data && data[0] 
   console.log(quote, author)
  
  const parrafoRef = useRef()

   // hook useLayoutEffect
   useLayoutEffect(() => {
      console.log(parrafoRef.current.getBoundingClientRect())
       return () => {
           console.log('destroy')
       };
   }, [quote])
  
    return (
        <div>
            <h1>Hooks useLayoutEffect</h1>
            <h3>Breaking Bad Quotes</h3>
            <hr />
            <div className='alert alert-info'>
                {
                    loading &&  (<p>Loading....</p>)   
                }
            </div>
            <blockquote cite={author} className='blockquote text-right'>
                <p ref={parrafoRef} className='mb-1'>{quote}</p>
               
                
           </blockquote>
            <button type="button" 
                   onClick={()=>increment(1)}
                   className='btn btn-primary btn-block'>
                    Siguiente frase
            </button>
            {
              counter > 1 && <button type="button" 
              onClick={()=>decrement(1)}
              className='btn btn-warning btn-block mt-3'>
              Anterior frase
       </button>
            }
            
        </div>
    )
}

export default LayoutEffect

