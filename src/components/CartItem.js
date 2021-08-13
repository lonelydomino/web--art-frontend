import React from 'react'

const CartItem = (props) => {
    let string = "http://localhost:3000" + props.item.image
     return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn"></span>
                <span className="like-btn"></span>
            </div>
     
            <div className="image">
                <img className="cart-item-thumb" src={string} alt={props.item.name} />
            </div>
     
            <div className="description">
                <span>Common Projects</span>
                <span>Bball High</span>
                <span>White</span>
            </div>
     
            <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                    <img src="plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="minus-btn" type="button" name="button">
                    <img src="minus.svg" alt="" />
                </button>
            </div>
     
            <div className="total-price">{props.item.price}</div>
      </div>
     )
}
export default CartItem