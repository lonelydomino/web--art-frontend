import {connect} from 'react-redux'
import CartItem from './CartItem'


import React from 'react'
import { fetchShoppingCart } from '../actions/shoppingCartActions'
class ShoppingCart extends React.Component{
   // state = {
   //    num: 0
   // }

   
   componentDidUpdate() {
      if(this.props.authChecked && this.props.cart.items.length === 0){
         this.props.updateCart(this.props.currentUser.id)
      }
      
   }
   renderCart = (cart) => {
      let array = cart.items.map(item => {
         return <CartItem item={item} price={item.price} />})
         // return <CartItem item={item} price={item.price} handleUpdate={this.handleUpdate} num={this.state.num}/>})

      return array
   }
//    handleChange = (e) => {
//    this.setState({
//       num: parseInt(e.target.value)
//    })
// }
//    handleUpdate = (num) => {
//       this.setState({
//          num: num
//       })
//    }

   
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
              {/* <input id="input-field" type="text" onChange={this.handleChange} value={this.state.num}/> */}

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