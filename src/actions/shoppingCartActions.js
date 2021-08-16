// export const addToCart = (item) => {
//     return (dispatch) => {
//       dispatch({ type: 'ADD_TO_CART', payload: item})
//     }
//   }


  export const addToCart = (item) => {
    return (dispatch) => {
      return fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(resp => resp.json())
      .then(json =>{
        debugger
        dispatch({ type: 'ADD_TO_CART', payload: item})
      })
    }
  }
