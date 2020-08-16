import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem  from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom'

//demoTodos

describe('Pruebas en <TodoListItem />', () => {

 // simulacion de las function de las props
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    // simulacion de las props
    const index= 0
    const wrapper = shallow(
        <TodoListItem 
            todo={ demoTodos[0] }
            index={ index}
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    )



    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de llamar la función handleDelete', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('debe de llamar la función handleToggle', () => {
        
        wrapper.find('h4').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('debe de mostrar el texto correctamente', () => {
        
        const h4 = wrapper.find('h4');
       //  console.log(index)
        expect( h4.text().trim() ).toBe(`${index + 1}. ${ demoTodos[0].desc }`)

    });

    test('debe de tener la clase complete si el TODO.done = true', () => {
        // simulamos el cambio en el primer todo
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem 
                todo={ todo }
            />
        );
        console.log(wrapper.html())
        expect(wrapper.find('h4').hasClass('complete') ).toBe(true);


    });
    
    
})
