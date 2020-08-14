// componente que se encarga de organizar las rutas
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Navbar from './Navbar';


const AppRouter = () => {
    return (
        <Router>
            <div>
                {/*NAVBAR*/}
                <Navbar></Navbar>
                {/*RUTAS*/}
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/home' component={HomeScreen} />
                    <Route exact path='/about' component={AboutScreen} />
                    <Route exact path='/login' component={Login}/>
                    {/*RUTA 404
                    <Route component={HomeScreen} />
                    */}
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
        
    )
}

export default AppRouter
