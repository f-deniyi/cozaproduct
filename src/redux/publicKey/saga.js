import { call,put, takeLatest } from "redux-saga/effects";
import { fetchPublicKeyAPI } from "../../api";
import {setKey} from './action';
import {setError} from '../error/action';

function* fetchKey() {
    try{
        const fetchedPublicKey = yield call(fetchPublicKeyAPI);
        // console.log(fetchedPublicKey);
         yield put(setKey(fetchedPublicKey));
    }
   catch(err){
    // console.log(err);
    // console.log(err.response);
    // console.log(err.request);
    yield put(setError('Something bad happened. Please come back later when we fixed the problem'));
   }
}

export function* watchKeyLoadSaga(){
    yield takeLatest('FETCH_KEY', fetchKey);
}