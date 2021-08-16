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
     return (
      <div id="nav-container">
        <div className="nav">
            <div className="menu">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/cart" exact> Shopping Cart </NavLink></li>
              <li>{loggedIn ? (<><a>{currentUser.data.email} <LogOutButton /></a> </>): (<NavLink to="/login" exact>Log In</NavLink>)}</li>
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