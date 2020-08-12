import React, { useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
    
const [formState, setformState] = useState({
    name: '',
    email: ''
})

const {name, email} = formState

React.useEffect(() => {
    console.log('Hey!!')
  }, [])
  
React.useEffect(() => {
    console.log('formulario cambio')
}, [formState])

React.useEffect(() => {
  console.log('email cambio')
}, [email])

/*
const handleInputChange = (e) => {
     console.log(e.target, e.target.name, e.target.value)

}
*/
const handleInputChange = ({target}) => {
    setformState({
        ...formState,
        [target.name]: target.value 
    })
}

    return (
        <>
            <h1>Hook useEffect</h1>
            <hr />
            <div class="form-group">

              <label for="name">Nombre</label>
              <input type="text"
                     name="name" 
                     id="name" 
                     class="form-control" 
                     placeholder="escribe tu nombre"
                     value={name} 
                     onChange={handleInputChange} />
              
              <label for="email">Email</label>
              <input type="email" 
                     name="email" 
                     id="email" 
                     class="form-control" 
                     placeholder="escribe tu email" 
                     value={email} 
                     onChange={handleInputChange} />
              
             </div>
           
             {
                 (name === '123') && <Message></Message>
             }
        </>
    )
}

export default SimpleForm

