import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import './styles.css'

import TodoList from './TodoList'
import TodoAdd from './TodoAdd'



const initialState = []

const init = () => {
    
 return JSON.parse(localStorage.getItem('todos')) || []
            
}


const TodoApp = () => {



    
// reducer -es una funcion, initialState -estado inicial , init -es una funcion que trabaja el estado inicial
const [todos, dispatch] = useReducer(todoReducer, initialState, init)

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])




// para poder pasar como prop la funcion al hija
const handleAddTodo = (newTodo) => {
    const addTodoAction = {
        type: 'add',
        payload: newTodo
    }

    dispatch(addTodoAction)
}



const handleDelete = (id) => {
    const deleteTodoAction = {
        type: 'delete',
        payload: id
    }
    dispatch(deleteTodoAction)
}


const handleToggle = (id) => {
console.log(id)
   
  dispatch({
    type: 'toggle',
    payload: id
   })
}

    return (
        <div>
            <h1>Hook useReducer</h1>
            <h3>Todo APP</h3><small>Total todos: {todos ? todos.length : 0}</small>
            <hr />
            <div class="row">
                <div className='col-7'>
                    <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}>
                    </TodoList>
                   
                </div>
                <div className='col-5'>
                  <TodoAdd
                  handleAddTodo={handleAddTodo}
                  ></TodoAdd>
                </div>
            </div>
            
        </div>
    )
}

export default TodoApp
