const { renderHook } = require("@testing-library/react-hooks")
const { default: useFetch } = require("../../hooks/useFetch")

describe('Pruebas en custom hook useFetch', () => {

    test('debe de retornar la información por defecto, state inicial ', () => {
        const url = 'https://www.breakingbadapi.com/api/quotes/1'
        const { result } = renderHook( () => useFetch(url) )
        // console.log(result.current)
        const {data, loading, error} = result.current
        // comprobar que devuelve el state inicial
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

    })

    test('debe de tener la info deseada, loading false, error false', async() => {
         // es async porque hay que esperar a la data
         const url = 'https://www.breakingbadapi.com/api/quotes/1'
         const { result, waitForNextUpdate } = renderHook( () => useFetch(url) )
         // esto regresa una promesa
        await waitForNextUpdate();

        // console.log(result.current)
        const {data, loading, error} = result.current
         
        // console.log(data)

         // comprobar que devuelve la data
         expect(data.length).toBe(1)
         expect(loading).toBe(false)
         expect(error).toBe(null)
 
    })

    test('debe de manejar el error', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe( false );
        expect( error ).toBe( 'no se pudo cargar la info' );


    })
})
