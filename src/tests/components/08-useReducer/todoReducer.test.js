import todoReducer  from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";






describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        // console.log(demoTodos)
  // todoReducer = (state= [], action) => { }  / state = [] - action = {type, payload}
        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual( demoTodos );

    });

    test('debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }

        const action = {
            type : 'add',
            payload: newTodo
        }
  // todoReducer = (state= [], action) => { }  / state = [] - action = {type, payload}
     const state = todoReducer( demoTodos, action);
    // console.log(state)
     
     expect( state.length ).toBe( 3 );
     expect( state ).toEqual( [...demoTodos, newTodo ] );

    })

    test('debe de borrar un TODO', () => {
        // action.payload = ID del TODO
        const action = {
            type : 'delete',
            payload: 2
        }
  // todoReducer = (state= [], action) => { }  / state = [] - action = {type, payload}
     const state = todoReducer( demoTodos, action);
     // console.log(state)
     
     expect( state.length ).toBe( 1 );
     expect( state ).toEqual( [ demoTodos[0] ] );
    })
        
  
    test('debe de hacer el TOGGLE del TODO', () => {
          // action.payload = ID del TODO
          const action = {
            type: 'toggle',
            payload: 1
        }

        

  // todoReducer = (state= [], action) => { }  / state = [] - action = {type, payload}
  const state = todoReducer( demoTodos, action );
      console.log(state)
      expect( state[0].done ).toBe( true );
      expect( state[1] ).toEqual( demoTodos[1]  );
    
    })

})
