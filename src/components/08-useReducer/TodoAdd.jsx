import React from 'react'
import useForm from '../../hooks/useForm'
import './styles.css'

const TodoAdd = ({ handleAddTodo}) => {

    // hook personalizado useForm para el input del form
const [formValue, reset,  handleInputChange] = useForm({
    inputValue: ''
})

const  {inputValue} = formValue

const handleSubmit = (e) => {
    e.preventDefault();
if( inputValue.trim().length < 1){ return }
    const newTodo = {
        id: new Date().getTime(),
        desc: inputValue,
        done: false
    }

handleAddTodo(newTodo)

reset()
}

    return (
        <>
        <h3>Agregar TODO</h3>
        <hr />
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className='form-control'
            placeholder='Aprender...'
            autoComplete= 'off'
            name="inputValue" 
            value= {inputValue}
            onChange={handleInputChange} 
            />
            <button 
            className='btn btn-outline-primary btn-block my-1'
            type="submit">
            Agregar
            </button>
        </form>
        </>
    )
}

export default TodoAdd
