import React from 'react'
import { NavLink } from 'react-router-dom'

const ItemCard = (props) => {
     return (
          <NavLink to={`/category/${props.categoryId}/items/${props.item.id}`}>
               <div className="item-card">
                    <div className="inner">
                    <h3>{props.item.name}</h3>
                    <img className="item-image" src={`http://localhost:3000${props.item.image}`} alt={props.item.name}/>
                    <h3>Price: {props.item.price}</h3>
                    <p>Rating: stars</p>
                    </div>
               </div>
          </NavLink>

     )
}
export default ItemCard