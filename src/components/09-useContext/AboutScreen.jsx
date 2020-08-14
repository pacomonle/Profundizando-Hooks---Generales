import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
    
        const {user} = useContext(UserContext)
        console.log(user)
   
       return (
           <div>
               <h1>About</h1>
               <hr />
               <pre className='container'>
               {
                   JSON.stringify(user, null ,3)
               }
               </pre>
           </div>
       )
    
}

export default AboutScreen
