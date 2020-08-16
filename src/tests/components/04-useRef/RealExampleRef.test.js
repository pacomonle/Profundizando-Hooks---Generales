import React from 'react';
import { shallow } from 'enzyme';
import  RealExampleRef  from '../../../components/04-useRef/RealExampleRef';
import  MultipleCustomHooks  from '../../../components/03-examples/MultipleCustomsHooks';

describe('Pruebas en <RealExampleRef />', () => {
    
   // const [show, setshow] = useState(false) -> <RealExampleRef />

    const wrapper = shallow( <RealExampleRef /> );
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find(MultipleCustomHooks).exists() ).toBe(false);

    });

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    
        wrapper.find('button').simulate('click');
        expect( wrapper.find(MultipleCustomHooks).exists() ).toBe(true);
    })
    

  
})
