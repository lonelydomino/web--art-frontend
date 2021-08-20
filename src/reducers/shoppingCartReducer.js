const shoppingCartReducer = (state = {items: [],userId:0, id:0, total: 0}, action) => {
    switch(action.type) {
        case 'LOADING_SHOPPING_CART':
            return {...state, items: [...state.items],
            loading: true}
        case 'ADD_SHOPPING_CART':
            let prices = action.shoppingCart.items.map( item => item.price)
            let total = prices.reduce((sum, current) =>  sum + current, 0);
            return {
                ...state,
                items: action.shoppingCart.items,
                total: total,
                loading: false
            }
        case 'ADD_TO_CART':
            return {...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            }
        case 'REMOVE_FROM_CART':
            const newItems = state.items.filter(item => item.id !== action.payload.id)
            return {...state,
                items: newItems,
                total: state.total - action.payload.price
            }
        default:
            return state
    }

}
export default shoppingCartReducer

