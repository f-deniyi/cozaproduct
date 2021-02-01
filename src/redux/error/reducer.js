export const errorReducer=(state='',action)=>{
    switch(action.type){
        case 'SET_ERROR':
            console.log(action.error);
            return action.error
        default:
            return state;
    }
}