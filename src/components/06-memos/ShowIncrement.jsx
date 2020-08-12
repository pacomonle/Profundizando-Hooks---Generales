import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

console.log('me volvi a generar :(')

    return (
        <>
            <button 
            className='btn btn-warning'
            onClick={() => increment(5)}
            type="button">
            + Incrementar
            </button>
        </>
    )
})

export default ShowIncrement
