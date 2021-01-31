import { call,put, takeLatest } from "redux-saga/effects";
import { fetchPublicKeyAPI } from "../../api";
import {setKey} from './action'

function* fetchKey() {
    const fetchedPublicKey = yield call(fetchPublicKeyAPI);
    console.log(fetchedPublicKey);
     yield put(setKey(fetchedPublicKey));
}

export function* watchKeyLoadSaga(){
    yield takeLatest('FETCH_KEY', fetchKey);
}