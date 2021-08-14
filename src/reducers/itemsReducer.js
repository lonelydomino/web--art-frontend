const itemsReducer = (state = {items: [], query: "", loading: false}, action) => {
   switch(action.type) {
       case 'LOADING_ITEMS':
             return {...state,
             items: [...state.items],
             query: state.query,
             loading: true
          }
      case 'ADD_ITEMS': 
          return {
              ...state,
              items: action.items,
              loading: false
          }
      case 'UPDATE_QUERY':
         return {
            ...state, 
            query: action.query
         }
      
       default: 
          return state
    }
  }
  export default itemsReducer