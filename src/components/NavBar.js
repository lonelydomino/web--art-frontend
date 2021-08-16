import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    renderLinks() {
        return this.props.categories.map( category => {
          return <NavLink to={`/category/${category.id}`} exact><li className="navlink" key={category.id}><span>{category.name}</span></li></NavLink>})
    }
     render(){
         return(
        <ul>
            {this.props.categories ? this.renderLinks() : null}
        </ul>

         )  
     }
}
export default NavBar