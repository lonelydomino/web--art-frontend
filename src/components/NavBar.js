import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    myFunction() {
        var x = document.getElementById("nav-bar-list");
        if (x.className === "nav-bar-list") {
          x.className += " responsive";
        } else {
          x.className = "nav-bar-list";
        }
      }
    renderLinks() {
        return this.props.categories.map( category => {
          return <NavLink to={`/category/${category.id}`} exact><li className="navlink" key={category.id}><span>{category.name}</span></li></NavLink>})
    }
     render(){
         return(
        <ul id="nav-bar-list" className="nav-bar-list">
            {this.renderLinks()}
           
        </ul>

         )  
     }
}
export default NavBar