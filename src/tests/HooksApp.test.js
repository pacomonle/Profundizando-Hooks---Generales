const { shallow } = require("enzyme")
import React from 'react';
import HooksApp from '../HooksApp';
import '@testing-library/jest-dom'




describe('Prueba <HooksApp></HooksApp>', () => {

    test('should mostrarse correctamente', () => {
        const wrapper = shallow(<HooksApp></HooksApp>)
        expect(wrapper).toMatchSnapshot()
        
    })
    
    
})
