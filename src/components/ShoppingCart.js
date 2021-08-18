import {connect, useSelector} from 'react-redux'
import CartItem from './CartItem'

const renderCart = (cart) => {
   let array = cart.items.map(item => {
      return <CartItem item={item} price={item.price}/>
   })
   return array
}
const ShoppingCart = () => {
   const cart = useSelector(state => state.shoppingCart)
   if (cart.items.length === 0) {
      return (
         <div className="shopping-cart">
           {renderCart(cart)}
           <p id="no-items"> No Items :(</p>
        </div>
      )
   }
     return (
        
        <div className="shopping-cart">
           {renderCart(cart)}
           <p id="cart-total">Total: {cart.total} </p>
           <button id="checkout-button">Check Out</button>
        </div>
     )
}
const mapStateToProps = (state) => {
   return {
      cart: state.shoppingCart.items
   }
}
export default connect(mapStateToProps)(ShoppingCart)