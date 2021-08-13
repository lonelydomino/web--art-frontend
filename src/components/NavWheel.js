import React from 'react'
import { NavLink } from 'react-router-dom';

const NavWheel = () => {
    // debugger
     return (
 
      <div id="container">
        <div className="nav">
          <input type="checkbox"/>
            <span></span>
            <span></span>
            <div className="menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><a href="#">Log In</a></li>
              <li><NavLink to="/cart" exact> Shopping Cart </NavLink></li>
              <li><a href="#">About</a></li>
            </div>
        </div>
      </div>


     )
}
export default NavWheel