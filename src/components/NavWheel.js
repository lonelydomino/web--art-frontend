import React from 'react'
import { NavLink } from 'react-router-dom';

const NavWheel = () => {
    // debugger
     return (
 
      <div id="nav-container">
        <div className="nav">
            <div className="menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/login">Log In</NavLink></li>
              <li><NavLink to="/cart" exact> Shopping Cart </NavLink></li>
              <li><a href="#">About</a></li>
            </div>
        </div>
      </div>


     )
}
export default NavWheel