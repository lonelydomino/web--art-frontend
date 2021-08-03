import React from 'react'

class NavBar extends React.Component {
    renderLinks() {
        return this.props.categories.map( category => {
          return <li className="navlink" key={category.id}><span>{category.name}</span></li>})
    }
     render(){
         return(
        <ul>
            {this.renderLinks()}
        </ul>

         )
     }
}
export default NavBar