import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import LogOutButton from './LogOutButton';
import { useEffect } from 'react';
import { checkAuth } from "../actions/auth";

const NavWheel = ({ authChecked, loggedIn, currentUser }) => {
  useEffect(() => {
    checkAuth()
  })
 
console.log("in navwheel" + currentUser)
     return (
      <div id="nav-container">
        <div className="nav">
            <div className="menu">
              <li key="1"><NavLink to="/" exact>Home</NavLink></li>
              <li key="2"><NavLink to="/cart" exact> Shopping Cart </NavLink></li>
              <li key="3">{currentUser ? (<><NavLink to="/" exact>{currentUser.email} </NavLink> </>) : null }</li>
              <li key="4">{ loggedIn ? (<LogOutButton />):(<NavLink to="/login" exact>Log In</NavLink>)} </li>
            </div>
        </div>
      </div>
  )
}
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuth())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavWheel);