export const fetchItems = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ITEMS'})
      fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then( json => {
        dispatch({ type: 'ADD_ITEMS', items: json})
      })
    }
  }