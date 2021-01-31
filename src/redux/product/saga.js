import { call,put, takeLatest } from "redux-saga/effects";
import { fetchProductDetailsAPI } from "../../api";
import { setProduct } from './action';


function* initiateProductFetch({ payload: productId }) {
    console.log(productId);
    const fetchedProduct = yield call(fetchProductDetailsAPI, productId);
    console.log(fetchedProduct);
    yield put(setProduct(fetchedProduct));
}

export function* watchProductLoadSaga() {
    yield takeLatest('FETCH_PRODUCT', initiateProductFetch);
}