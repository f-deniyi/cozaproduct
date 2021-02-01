import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProductDetailsAPI } from "../../api";
import { setError } from "../error/action";
import { setProduct } from './action';



function* initiateProductFetch({ payload: productId }) {
    try {
        console.log(productId);
        const fetchedProduct = yield call(fetchProductDetailsAPI, productId);
        console.log(fetchedProduct);
        yield put(setProduct(fetchedProduct));
    } catch (err) {
        // console.log(err)
        yield put(setError('Item not found in store, check back later.'));
    }

}

export function* watchProductLoadSaga() {
    yield takeLatest('FETCH_PRODUCT', initiateProductFetch);
}