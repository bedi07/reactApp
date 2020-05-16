import React from "react";
import './Navigation.css';
import {Navbar,Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom" ;

function Navigation () {
return (
    <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand style={{color:"white"}}>
          React Basics
         </Navbar.Brand>
       <Nav>
        <NavLink className="link" to="/login">Login</NavLink>
         <NavLink className="link" to="/products">Shop</NavLink>
        </Nav>
    </Navbar>
)

}

export default Navigation