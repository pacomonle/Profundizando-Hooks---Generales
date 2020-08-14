import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">useContext app</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to='/home' exact activeClassName='active' className="nav-link" >Home</NavLink>
                <NavLink to='/about' exact activeClassName='active' className="nav-link" >About</NavLink>
                <NavLink to='/login' exact activeClassName='active' className="nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
     </>
    )
}

export default Navbar
