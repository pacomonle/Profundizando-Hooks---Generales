// trabajamo en consola

// importar en el index.js -> import './components/08-useReducer/intro-reducer'

const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];

// las action modifican el state, siempre se retorna un state
const todoReducer = (state = initialState, action) => {
    // ??
    console.log(action)
    if(action && (action.type === 'agregar')){
        state = [...state, action.payload]
    }
   
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}

const agregarTodoAction = {
   type: 'agregar',
   payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)


console.log(todos);