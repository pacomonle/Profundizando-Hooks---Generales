import React from 'react';
import { mount } from 'enzyme';
import  HomeScreen  from '../../../components/09-useContext/HomeScreen';
import {UserContext}  from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Francisco',
        email: 'francisco@gmail.com'
    }

    // en el HomeComponent solo extraemos el user, no usamos el setuser
    // shallow no vale, el mount es necesario poruqe queremos renderizar un componente que esta dentro de otro
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />  
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    
})
