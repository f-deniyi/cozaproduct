export const loadingReducer=(state=true,action)=>{
    switch (action.type){
        case 'FETCH_PRODUCT':
            return state;
        case 'SET_PRODUCT':
            return false;
        default:
            return state;
    }

}