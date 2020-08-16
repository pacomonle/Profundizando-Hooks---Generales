import React from 'react';
import { shallow, mount } from "enzyme";
import TodoApp  from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';
import TodoList from '../../../components/08-useReducer/TodoList';



describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow( <TodoApp />);
  // comprobar el local storage -> usal el jest.fn()
    Storage.prototype.setItem = jest.fn(()=> {});

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
      // para usar y simular funciones en contexto en general
        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find(TodoAdd).prop('handleAddTodo')( demoTodos[0] );
            wrapper.find(TodoAdd).prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('small').text().trim() ).toBe('Total todos: 2');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('debe de eliminar un todo', () => {
        
        wrapper.find(TodoAdd).prop('handleAddTodo')( demoTodos[0] );
  
        expect( wrapper.find('small').text().trim() ).toBe('Total todos: 1');

        wrapper.find(TodoList).prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('small').text().trim() ).toBe('Total todos: 0');

    });
    
    
    
    
})
