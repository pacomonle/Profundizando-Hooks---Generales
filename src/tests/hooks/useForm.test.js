const { renderHook, act } = require("@testing-library/react-hooks")
const { default: useForm } = require("../../hooks/useForm")
import '@testing-library/jest-dom';

describe('Pruebas custom hook useForm', () => {
    // initial state
    const initialForm ={
        name: 'francisco',
        email: 'francisco@gmail.com'
    }

    test('debe de regresar un formulario por defecto- retornar el initial state y 2 function', () => {
        
        const { result } = renderHook( () => useForm(initialForm) )
       // console.log(result.current)
        const [formValue, reset,  handleInputChange] = result.current;

        expect(formValue).toEqual(initialForm)
        expect(typeof reset).toBe('function')
        expect(typeof handleInputChange).toBe('function')

    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ ,  , handleInputChange ] = result.current;

        act( () => {
           // handleInputChange({target})
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Paco'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Paco' } );

    })
    
    test('debe de re-establecer el formulario con RESET', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , reset, handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Paquito'
                }
            });

            reset()

        });

        const [ formValue ] = result.current;
        // console.log(formValue)
        
        expect( formValue ).toEqual( initialForm );

    })
})
