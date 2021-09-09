export const fetchCategories = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATEGORIES'})
      fetch('http://localhost:3000/categories')
      .then(resp => resp.json())
      .then( json => {
        dispatch({ type: 'ADD_CATEGORIES', categories: json})
      })
    }
  }