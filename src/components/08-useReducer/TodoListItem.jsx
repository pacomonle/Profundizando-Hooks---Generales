import React from 'react'
import './styles.css'


const TodoListItem = ({todo, handleDelete, handleToggle, index}) => {
    return (
        <li 
        className='list-group-item'
        >
            <h4  
            className={todo.done && 'complete'}
            onClick = {() => handleToggle(todo.id)}>
            {index + 1}. {todo.desc} 
            </h4>  
            <button 
            type="button"
            onClick={() => handleDelete(todo.id)} 
            className='btn btn-danger'>
            Borrar
            </button>
        </li>
    )
}

export default TodoListItem
