const shoppingCartReducer = (state = {items: [], total: 0}, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            }
        case 'REMOVE_ITEM':
            return
        default:
            return state
    }

}
export default shoppingCartReducer