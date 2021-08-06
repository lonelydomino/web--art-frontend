import React from 'react'

const ItemCard = (props) => {
    // debugger
     return (
        <div>
            <h3>{props.item.name}</h3>
            <img src={`http://localhost:3000${props.item.image}`} alt={props.item.name}/>
        </div>
     )
}
export default ItemCard