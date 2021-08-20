import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/shoppingCartActions'
import { connect } from 'react-redux'
import CustomizedSnackbars from '../components/FlashMessage'

const displayItem = (item, dispatch, currentUser) => {
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
            <button className="addtocart-button" onClick={() => dispatch(addToCart(item, currentUser))}>Add to Cart</button>
            <br/>
         </div>
      </div>
   )
}
const ItemPage = (props) => {
   const item = useSelector(state => state.items.items.filter(item => item.id === parseInt(props.match.params.itemid)))
   const dispatch = useDispatch()

     return (   
        <>
                	{ props.showMessage ? <div className="flash-message"><CustomizedSnackbars message={props.message}/></div> : null}

         <div id="itempage-container">
           {displayItem(item[0],dispatch, props.currentUser)}
        </div>
        </>
       
     )
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser, showMessage, message } }) => {
   return { authChecked, loggedIn, currentUser, showMessage, message };
 };
export default connect(mapStateToProps)(ItemPage)