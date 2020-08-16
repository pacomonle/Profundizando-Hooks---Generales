import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import  MultipleCustomHooks  from '../../../components/03-examples/MultipleCustomsHooks';

import  useFetch  from '../../../hooks/useFetch';
import  useCounter  from '../../../hooks/useCounter';

// implementar mock de hooks
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');




describe('Pruebas en <MultipleCustomHooks />', () => {
// mockear lo que devuelve un hook
    useCounter.mockReturnValue({
        state: 10,
        increment: () => {},
        decrement: () => {}
    });
    
    
    test('debe de mostrarse correctamente', () => {
  // mockear lo que devuelve un hook
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks></MultipleCustomHooks>);
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should debe de mostrar la información', () => {
       // mockear lo que devuelve un hook 
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks></MultipleCustomHooks>);
        // console.log(wrapper.html())
        expect( wrapper.find('p').at(1).exists() ).toBe( false );
        expect( wrapper.find('.mb-1').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );

    })
    
    

})


