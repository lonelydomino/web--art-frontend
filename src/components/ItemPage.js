import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/shoppingCartActions'

const displayItem = (item, dispatch) => {
   if (!item){
      return
   }
   return(
      <div>
         <div className="column">
            <img className="itempage-image" src={`http://localhost:3000${item.image}`} alt={item.name}/>
         </div>
         <div className="column">
            <h1 className={"itempage-title"}>{item.name}</h1>
            <h2 className={"itempage-price"}>${item.price}</h2>
            <p>description here</p>
            <button className="addtocart-button" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <br/>
            <p> Ratings placeholder</p>
         </div>
      </div>
   )
}
const ItemPage = (props) => {
   const item = useSelector(state => state.items.items.filter(item => item.id === parseInt(props.match.params.itemid)))
   const dispatch = useDispatch()

     return (   
        <div id="itempage-container">
           {displayItem(item[0],dispatch)}
        </div>
     )
}
export default ItemPage