export const updateQuery = (item) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_QUERY', query: item})
    }
  }