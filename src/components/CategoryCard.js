import React from 'react'
import { NavLink } from 'react-router-dom'
const CategoryCard = (props) => {
     return (
          <NavLink to={`/category/${props.category.id}`} exact>
               <div id="category-card">
                    <p id="tag-line">{props.category.tag_line}</p>
                    <img className="category-image" key={props.category.id} src={`http://localhost:3000${props.category.image}`} alt={props.category.name}/>
                    <p style={{textAlign: "left", marginLeft: "9%"}}>See more</p>
               </div>
          </NavLink>
     )
}
export default CategoryCard
