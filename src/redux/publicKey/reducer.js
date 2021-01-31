const publicKeyReducer = (state = '', action) => {
    switch (action.type) {
        case 'FETCH_KEY':
            return state;
        case 'SET_KEY':
            return action.payload;
        default:
            return state;
    }
}
export default publicKeyReducer;