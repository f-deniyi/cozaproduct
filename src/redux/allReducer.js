import { combineReducers } from 'redux';
import publicKeyReducer from './publicKey/reducer';
import { productReducer } from './product/reducer'
import { loadingReducer } from './Loading/reducer';
import { errorReducer } from './error/reducer';

const allReducer = combineReducers(
    {   isLoading:loadingReducer,
        product: productReducer,
        publicKey: publicKeyReducer,
        error:errorReducer
    }
)
export default allReducer;