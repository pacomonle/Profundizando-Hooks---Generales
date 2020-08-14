import React from 'react'
import './styles.css'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
        <ul className='list-group list-group-flush'>
        {
            todos.map((todo, index) => (
                <TodoListItem 
                key={todo.id}
                index={index}
                todo={todo} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}>
                </TodoListItem>
               
            ) )
        }

</ul>
        </>
    )
}

export default TodoList
