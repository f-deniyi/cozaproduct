export const fetchProduct= (productID)=>{
    return{
        type:'FETCH_PRODUCT',
        payload:productID
    }
}


export const setProduct=(product)=>{
    return{
        type:'SET_PRODUCT',
        product:product
    }
}