import React from 'react';
import './App.css';
import Products from './products/Products'
import Login from './login/Login'
import Navigation from "./navigation/Navigation";
import { BrowserRouter,Route, Switch } from 'react-router-dom';

function App() {
return ( 
  <BrowserRouter>
    <>
    <Navigation />
    <Switch>
     <Route exact path = "/" component = { Login } /> 
     <Route path = "/login" component = { Login } />
     <Route path = "/products" component = { Products } />
    </Switch>
    </>
    </BrowserRouter>
 
  );
 
}

export default App;
