import {connect} from 'react-redux'
import CartItem from './CartItem'


import React from 'react'
import { fetchShoppingCart } from '../actions/shoppingCartActions'
class ShoppingCart extends React.Component{
   renderCart = (cart) => {
      let array = cart.items.map(item => {
         return <CartItem item={item} price={item.price}/>
      })
      return array
   }
   render(){   
     const cart = this.props.cart
      if (cart.items.length === 0) {
         return (
            <div className="shopping-cart">
              <p id="no-items"> No Items :(</p>
           </div>
         )
      }
        return (
           <div className="shopping-cart">
              {this.renderCart(cart)}
              <p id="cart-total">Total: ${cart.total.toFixed(2)} </p>
              <button id="checkout-button">Check Out</button>
           </div>
        )
     
  }
}
const mapStateToProps = (state) => {
   return {
      cart: state.shoppingCart,
      user: state.currentUser
   }
}
const mapDispatchToProps = (dispatch) => {
return {
   updateCart: (userId) => dispatch(fetchShoppingCart(userId))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)