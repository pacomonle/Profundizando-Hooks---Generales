import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Login = () => {

const {setuser} = useContext(UserContext)


    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button 
            className='btn btn-primary'
            onClick={()=>{setuser({
                id:123,
                name: 'Monleon',
                email: 'prueba@prueba.com'
            })}}
            type="button">
            Login
            </button>
            <button 
            className='btn btn-danger mx-4'
            onClick={()=>{setuser({})}}
            type="button">
            Logout
            </button>
        </div>
    )
}

export default Login
