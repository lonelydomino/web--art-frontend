import React from 'react'

const ItemCard = (props) => {
     return (
        <div className="item-card">
                <div class="inner">

            <h3>{props.item.name}</h3>
            <img className="item-image" src={`http://localhost:3000${props.item.image}`} alt={props.item.name}/>
            <h3>Price: $20.99</h3>
             <p>Rating: stars</p>
        </div>
        </div>

     )
}
export default ItemCard