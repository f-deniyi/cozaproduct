export const fetchPublicKey= ()=>{
    return{
        type:'FETCH_KEY'
    }
}
export const setKey=(Key)=>{
    return{
        type:'SET_KEY',
        payload:Key
    }
}
