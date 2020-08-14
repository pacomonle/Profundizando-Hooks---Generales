import React from 'react'
import { useState } from 'react'
import '../02-useEffect/effects.css'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {

    const [user, setuser] = useState({})
    

    return (
        <UserContext.Provider value={{
            user,
            setuser
        }}>
          <AppRouter></AppRouter>
        </UserContext.Provider>   
    )
}

export default MainApp
