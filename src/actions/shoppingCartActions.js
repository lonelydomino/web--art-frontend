// export const addToCart = (item) => {
//     return (dispatch) => {
//       dispatch({ type: 'ADD_TO_CART', payload: item})
//     }
//   }
export const fetchShoppingCart = (userId) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SHOPPING_CART'})
    fetch(`http://localhost:3000/shopping_carts/${userId}`)
    .then(resp => resp.json())
    .then( json => {
      dispatch({ type: 'ADD_SHOPPING_CART', shoppingCart: json})
    })
  }
}

  export const addToCart = (item, currentUser) => {
    return (dispatch) => {
      let newItem = {
        item,
        cart: {id: currentUser.data.id}
      }
      const configObj = {
        method: "PATCH",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    }
      fetch(`http://localhost:3000/shopping_carts/${currentUser.data.id}`, configObj)
      .then(resp => {
          if (resp.ok) {
              return resp
                      .json()
                      .then(json => dispatch({ type: 'ADD_TO_CART', payload: item}))
          } else {
              return resp
                      .json()
                      // .then((errors) => {
                      //     dispatch({type: ERROR, payload: errors})
                      //     return Promise.reject(errors);
                      // });
          }
      })

    
    }
  }
