import React from 'react'
import { NavLink } from 'react-router-dom';

const NavWheel = () => {
    // debugger
     return (
 
      <div id="container">
        <div class="nav">
          <input type="checkbox"/>
            <span></span>
            <span></span>
            <div class="menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><a href="#">Log In</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">About</a></li>
            </div>
        </div>
      </div>


     )
}
export default NavWheel