import React from 'react'
const CategoryCard = (props) => {
     return (
         <div id="category-card">
             <p id="tag-line">{props.category.tag_line}</p>
             <img className="category-image" key={props.category.id} src={`/images/${props.category.image}`} alt={props.category.name}/>
             <p style={{textAlign: "left", marginLeft: "9%"}}>See more</p></div>
     )
}
export default CategoryCard