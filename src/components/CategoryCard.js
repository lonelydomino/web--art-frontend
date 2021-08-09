import React from 'react'
const CategoryCard = (props) => {
     return (
        <div id="category-card">
             <p id="tag-line">{props.category.tag_line}</p>
             <img className="category-image" key={props.category.id} src={`http://localhost:3000${props.category.image}`} alt={props.category.name}/>
             <p style={{textAlign: "left", marginLeft: "9%"}}>See more</p>
        </div>
     )
}
export default CategoryCard

// src={`/images/${props.category.image}`}
//http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--34910136431e9bd9a3053fdd711c521493f262e2/furniture.jpeg?disposition=attachment