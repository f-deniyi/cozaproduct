export const productReducer = (state={}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
        case 'SET_PRODUCT':
            return  {...state, ...action.product}
        default:
            return state;
    }
}