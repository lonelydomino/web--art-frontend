import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/shoppingCartActions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const CartItem = (props) => {
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    let string = props.item.image
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
                <span>{props.item.name}</span>
                <span>{props.item.category.name}</span>
            </div>
            <div >
                <div className="total-price">
                    <p>${props.item.price}</p>
                    <button onClick={() => setNumber(props.num + number)}>{number}</button>
                <button className="delete-button" onClick={() => dispatch(removeFromCart(props.currentUser, props.item))} type="button" name="button">X</button>
                </div>
            </div>          
         
     
      </div>
     )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(CartItem)