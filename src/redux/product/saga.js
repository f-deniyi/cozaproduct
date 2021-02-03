import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProductDetailsAPI } from "../../api";
import { setError } from "../error/action";
import { setProduct } from './action';



function* initiateProductFetch({ payload: productId }) {
    try {
        // console.log(productId);
        const fetchedProduct = yield call(fetchProductDetailsAPI, productId);
        // console.log(fetchedProduct);
        yield put(setProduct(fetchedProduct));
    } catch (err) {
       
        yield put(setError(err.response.data.message));
    }

}

export function* watchProductLoadSaga() {
    yield takeLatest('FETCH_PRODUCT', initiateProductFetch);
}