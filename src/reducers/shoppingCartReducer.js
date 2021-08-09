const shoppingCartReducer = (state = {items: [], total: 0}, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {...state,
                items: [...state.items],
                total: 0
            }
        case 'REMOVE_ITEM':
            return
        default:
            return state
    }

}
export default shoppingCartReducer