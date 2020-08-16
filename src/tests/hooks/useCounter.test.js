const { renderHook, act } = require("@testing-library/react-hooks");
const { default: useCounter } = require("../../hooks/useCounter");

describe('Pruebas en useCounter', () => {

    
    test('debe de retornar valores por defecto 4 funciones', () => {
        // renderizar un hook
        const { result } = renderHook( () =>  useCounter() );
        // console.log(result.current)
        expect( result.current.state ).toBe(10); // 10 es el valor por defecto
        expect( typeof result.current.increment ).toBe('function'); // function
        expect( typeof result.current.decrement ).toBe('function'); // function
        expect( typeof result.current.reset ).toBe('function'); // function
        expect( typeof result.current.setstate ).toBe('function'); // function
    })

    test('debe de tener el counter en 100', () => {
        const value = 100
        const { result } = renderHook( () =>  useCounter(value) );
        expect( result.current.state ).toBe(value); // comprobar el state del useCounter

    }) 
    
    test('debe de incrementar el counter en 1', () => {
       const factorIncrement = 1
       const { result } = renderHook( () => useCounter(100) );
       const { increment } = result.current;
       
       act( () => {

        increment(factorIncrement);
       });
       const {state} = result.current;
       expect(state).toBe(101);
    })

    test('debe de decrementar el counter en 1 ', () => {
        const factorDecrement = 1

        const { result } = renderHook( () => useCounter(100) );
        const { decrement} = result.current;
        
        act( () => {
 
         decrement(factorDecrement);
     });
        const {state} = result.current;
        expect(state).toBe(99);
    })

    test('debe de establecer el valor en 100 ', () => {
        const factor = 1

        const { result } = renderHook( () => useCounter(100) );
        const { reset, decrement } = result.current;
        
        act( () => {
 
         decrement(factor);
         reset()
     });
        const {state} = result.current;
        expect(state).toBe(100);
    })
    
})
