import React from 'react'
import useForm from '../../hooks/useForm'
import './effects.css'


const FormWithCustomHook = () => {

const [formValue, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
})

console.log(formValue)
const {name, email, password} = formValue


React.useEffect(() => {
    console.log('password cambio')   
}, [password])


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit ejecutado', formValue)
    setformValue({
        name: '',
        email: '',
        password: ''
    })
}

    return (
        <form onSubmit={handleSubmit}>
            <h1>Custom Hook useEffect</h1>
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
                     
              
              <label for="password">Password</label>
              <input type="password" 
                     name="password" 
                     id="password" 
                     class="form-control" 
                     placeholder="escribe tu password" 
                     value={password} 
                     onChange={handleInputChange} />
              
             </div>
           
            <button type="submit" className='btn btn-success'>Enviar</button>
        </form>
    )
}


export default FormWithCustomHook
