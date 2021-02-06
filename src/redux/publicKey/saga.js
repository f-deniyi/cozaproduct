import { call,put, takeLatest } from "redux-saga/effects";
import { fetchPublicKeyAPI } from "../../api";
import {setKey} from './action';
import {setError} from '../error/action';

function* fetchKey() {
    try{
        const fetchedPublicKey = yield call(fetchPublicKeyAPI);
        
         yield put(setKey(fetchedPublicKey));
    }
   catch(err){
    
    yield put(setError(err.message));
   }
}

export function* watchKeyLoadSaga(){
    yield takeLatest('FETCH_KEY', fetchKey);
}