import React, { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'

const renderCart = (cart) => {
   let array = cart.items.map(item => {
      return <CartItem item={item} price={item.price}/>
   })
   return array
}
const ShoppingCart = (props) => {
   const cart = useSelector(state => state.shoppingCart)
     return (
        <div class="shopping-cart">
           {renderCart(cart)}
           <p id="cart-total">Total: {cart.total} </p>
           <button id="checkout-button">Check Out</button>

        </div>
     )
}

export default ShoppingCart