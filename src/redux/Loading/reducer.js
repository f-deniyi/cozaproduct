export const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return state;
        case 'SET_PRODUCT':
            return false;
        case 'SET_ERROR':
            return false;
        default:
            return state;
    }

}