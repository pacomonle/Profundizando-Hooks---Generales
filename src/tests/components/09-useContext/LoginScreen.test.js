import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import  Login  from '../../../components/09-useContext/Login';


describe('Pruebas en <LoginScreen />', () => {
// setuser es una funcion , para simularla necesitamos el jest.fn()
    const setuser = jest.fn();
    
    const wrapper = mount(
        <UserContext.Provider value={{
            setuser
        }}>
            <Login />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de ejecutar el setUser con el argumento esperado', () => {
        // otra opcion para simular la funcion es el simulate('click')
       //  esto da una funcion por eso () para ejecutarla
        wrapper.find('button').at(0).prop('onClick')();

        expect( setuser ).toHaveBeenCalledWith({
            id:123,
            name: 'Monleon',
            email: 'prueba@prueba.com'
        })
        
    });
    
    

})
