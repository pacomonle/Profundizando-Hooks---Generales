import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd  from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
 // para simular las funnction de las props
    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        /> 
    )


    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('NO debe de llamar handleAddTodo', () => {
        
        // comprobar la validacion cuando no enviamos nada al submit  
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // console.log(formSubmit)
        // simulacion del evento sin usar el simulate
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);


    });

    test('debe de llamar la función handleAddTodo', () => {
    // simulando en el input pra enviar un argumento al submit
        const value = 'Aprender Firestore';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'inputValue'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { } event del input
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        }); 

       // comprobar que se limpia el input al salir del submit
        expect( wrapper.find('input').prop('value') ).toBe('');




    })
    
    

    

    
})
