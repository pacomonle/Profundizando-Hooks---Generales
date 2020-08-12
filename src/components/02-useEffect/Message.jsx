import React, { useState } from 'react'

const Message = () => {

const [coords, setcoords] = useState({
    x: 0,
    y: 0
})

const {x , y} = coords

React.useEffect(() => {
    // cuerpo del effect

    const mouseMove = (e) =>{
        const coors = {x: e.x, y: e.y}
        console.log(coors)
       // console.log(' :D ')
       setcoords({x:coors.x , y:coors.y})
    }

    window.addEventListener('mousemove', mouseMove)

    console.log('component montado')
    return () => {
        //fase de limpieza
        window.removeEventListener('mousemove', mouseMove)
        console.log('component desmontado')
    }// dependencia
}, [x, y])

    return (
        <div>
            <h1>Eres genial!!!</h1>
            <h3>Mis coordenadas del mouse : {x} ejeX - {y} ejeY </h3>
        </div>
    )
}

export default Message
